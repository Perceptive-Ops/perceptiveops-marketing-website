import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import App from "@/App";
import CaseStudyDetailPage from "@/pages/CaseStudyDetailPage";
import CaseStudyInquiryForm from "@/components/CaseStudyInquiryForm";
import { caseStudies } from "@/data/caseStudies";

describe("case study routes", () => {
  it("renders the case studies hub", () => {
    window.history.pushState({}, "", "/case-studies");

    render(<App />);

    expect(
      screen.getByRole("heading", { name: /case studies that close with clarity/i }),
    ).toBeInTheDocument();
  });

  it("renders a case study detail page from slug", () => {
    render(
      <MemoryRouter initialEntries={["/case-studies/lead-qualification-nurturing"]}>
        <Routes>
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /lead qualification & nurturing/i })).toBeInTheDocument();
    expect(screen.getByText(/simple flow. visible shift./i)).toBeInTheDocument();
  });

  it("shows 404 content for an invalid slug", () => {
    render(
      <MemoryRouter initialEntries={["/case-studies/not-real"]}>
        <Routes>
          <Route path="/case-studies/:slug" element={<CaseStudyDetailPage />} />
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/oops! page not found/i)).toBeInTheDocument();
  });
});

describe("case study inquiry form", () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    vi.stubEnv("VITE_STATICFORMS_ACCESS_KEY", "test-key");
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    }) as unknown as typeof fetch;
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it("submits the selected case study context", async () => {
    render(<CaseStudyInquiryForm caseStudy={caseStudies[0]} />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jane Smith" } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: "jane@example.com" } });
    fireEvent.change(screen.getByLabelText(/^company$/i), { target: { value: "Acme" } });
    fireEvent.change(screen.getByLabelText(/what process should this improve/i), {
      target: { value: "We need better routing." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send inquiry/i }));

    await waitFor(() => expect(global.fetch).toHaveBeenCalledTimes(1));
    const fetchMock = global.fetch as unknown as ReturnType<typeof vi.fn>;
    const [, options] = fetchMock.mock.calls[0];
    const body = JSON.parse((options as RequestInit).body as string);

    expect(body.caseStudy).toBe(caseStudies[0].title);
    expect(body.source).toBe(caseStudies[0].inquiryContext.source);
    expect(screen.getByText(/your inquiry has been sent/i)).toBeInTheDocument();
  });

  it("shows a configuration error when static forms is unavailable", async () => {
    vi.unstubAllEnvs();

    render(<CaseStudyInquiryForm caseStudy={caseStudies[1]} />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Jane Smith" } });
    fireEvent.change(screen.getByLabelText(/work email/i), { target: { value: "jane@example.com" } });
    fireEvent.change(screen.getByLabelText(/^company$/i), { target: { value: "Acme" } });
    fireEvent.change(screen.getByLabelText(/what process should this improve/i), {
      target: { value: "We need cleaner AP operations." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send inquiry/i }));

    expect(await screen.findByText(/form is not configured yet/i)).toBeInTheDocument();
  });
});
