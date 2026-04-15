import { useMemo, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyInquiryFormProps = {
  caseStudy: CaseStudy;
};

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
};

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const CaseStudyInquiryForm = ({ caseStudy }: CaseStudyInquiryFormProps) => {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const accessKey = import.meta.env.VITE_STATICFORMS_ACCESS_KEY as string | undefined;
  const isConfigured = useMemo(() => Boolean(accessKey && accessKey.trim().length > 0), [accessKey]);

  const onFieldChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    if (!isConfigured) {
      setSubmitError("Form is not configured yet. Add VITE_STATICFORMS_ACCESS_KEY to your environment.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          accessKey,
          subject: caseStudy.inquiryContext.subject,
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
          replyTo: form.email,
          honeypot: "",
          source: caseStudy.inquiryContext.source,
          caseStudy: caseStudy.title,
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Submission failed. Please try again.");
      }

      setSubmitted(true);
      setForm(INITIAL_STATE);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="inquiry" className="rounded-[2.5rem] bg-[#f2f4f6] px-6 py-7 lg:px-8 lg:py-8">
      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Get a tailored version</p>
          <h2 className="font-display text-3xl font-black tracking-[-0.03em] text-slate-950 sm:text-4xl">
            Tell us where this workflow should land in your business.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
            Share the process, the bottleneck, and the result you want. We’ll map the fastest version worth building.
          </p>

          <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_rgba(25,28,30,0.04)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Inquiry context</p>
            <p className="mt-3 text-xl font-semibold text-slate-950">{caseStudy.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">{caseStudy.primaryIndustryExample}</p>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-[2rem] bg-white p-6 text-emerald-900 shadow-[0_24px_60px_rgba(25,28,30,0.04)]">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
              <div>
                <p className="font-semibold">Your inquiry has been sent.</p>
                <p className="mt-2 text-sm leading-6 text-emerald-900/75">
                  We’ll respond with next steps for adapting this workflow to your team’s process and constraints.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <form className="grid gap-4 rounded-[2rem] bg-white p-6 shadow-[0_24px_60px_rgba(25,28,30,0.04)] lg:p-7" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="case-name" className="text-slate-800">Full Name</Label>
                <Input
                  id="case-name"
                  value={form.name}
                  onChange={(e) => onFieldChange("name", e.target.value)}
                  required
                  placeholder="Jane Smith"
                  className="h-12 rounded-xl border-[#c6c6cd]/40 bg-[#f7f9fb] text-slate-950 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="case-email" className="text-slate-800">Work Email</Label>
                <Input
                  id="case-email"
                  type="email"
                  value={form.email}
                  onChange={(e) => onFieldChange("email", e.target.value)}
                  required
                  placeholder="jane@company.com"
                  className="h-12 rounded-xl border-[#c6c6cd]/40 bg-[#f7f9fb] text-slate-950 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="case-company" className="text-slate-800">Company</Label>
                <Input
                  id="case-company"
                  value={form.company}
                  onChange={(e) => onFieldChange("company", e.target.value)}
                  required
                  placeholder="Acme Inc."
                  className="h-12 rounded-xl border-[#c6c6cd]/40 bg-[#f7f9fb] text-slate-950 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="case-phone" className="text-slate-800">Phone</Label>
                <Input
                  id="case-phone"
                  value={form.phone}
                  onChange={(e) => onFieldChange("phone", e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="h-12 rounded-xl border-[#c6c6cd]/40 bg-[#f7f9fb] text-slate-950 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="case-message" className="text-slate-800">What process should this improve?</Label>
              <Textarea
                id="case-message"
                value={form.message}
                onChange={(e) => onFieldChange("message", e.target.value)}
                required
                placeholder="Tell us about your current workflow, bottlenecks, volume, and the result you want."
                className="min-h-[150px] rounded-xl border-[#c6c6cd]/40 bg-[#f7f9fb] text-slate-950 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {submitError && (
              <div className="flex items-start gap-2 rounded-xl border border-destructive/25 bg-destructive/10 p-3 text-sm text-destructive">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{submitError}</span>
              </div>
            )}

            <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-5 text-slate-500">
                By submitting, you agree to be contacted about this workflow inquiry.
              </p>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 rounded-xl bg-[linear-gradient(135deg,#000000,#131b2e)] px-6 text-white hover:opacity-95"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Inquiry"
                )}
              </Button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default CaseStudyInquiryForm;
