import { useMemo, useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type ConsultationModalProps = {
  open: boolean;
  source: string;
  onOpenChange: (open: boolean) => void;
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

const ConsultationModal = ({ open, source, onOpenChange }: ConsultationModalProps) => {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const accessKey = import.meta.env.VITE_STATICFORMS_ACCESS_KEY as string | undefined;

  const isConfigured = useMemo(() => Boolean(accessKey && accessKey.trim().length > 0), [accessKey]);

  const onFieldChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const onClose = (nextOpen: boolean) => {
    onOpenChange(nextOpen);
    if (!nextOpen) {
      setSubmitError(null);
      setIsSubmitting(false);
      if (submitted) {
        setSubmitted(false);
        setForm(INITIAL_STATE);
      }
    }
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
          subject: "New Consultation Request",
          name: form.name,
          email: form.email,
          phone: form.phone,
          company: form.company,
          message: form.message,
          replyTo: form.email,
          honeypot: "",
          source,
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
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl rounded-2xl border-border p-0 overflow-hidden">
        <div className="relative bg-[radial-gradient(circle_at_top_right,hsl(var(--gradient-start)/0.18),transparent_45%),radial-gradient(circle_at_bottom_left,hsl(var(--gradient-end)/0.16),transparent_45%)] p-6 sm:p-8">
          <DialogHeader className="text-left">
            <DialogTitle className="font-display text-2xl sm:text-3xl tracking-tight">
              Book Your Free Consultation
            </DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-muted-foreground max-w-lg">
              Share your goals and we&apos;ll reply with the next steps, timeline, and a practical AI rollout plan.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="mt-6 rounded-xl border border-emerald-500/25 bg-emerald-500/10 p-5 text-emerald-900 dark:text-emerald-100">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">Request sent.</p>
                  <p className="text-sm opacity-90 mt-1">We&apos;ll contact you shortly at the email you provided.</p>
                </div>
              </div>
              <Button
                type="button"
                onClick={() => onClose(false)}
                className="mt-5 btn btn-primary"
              >
                Close
              </Button>
            </div>
          ) : (
            <form className="mt-6 grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="consult-name">Full Name</Label>
                  <Input
                    id="consult-name"
                    value={form.name}
                    onChange={(e) => onFieldChange("name", e.target.value)}
                    required
                    placeholder="Jane Smith"
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="consult-email">Work Email</Label>
                  <Input
                    id="consult-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => onFieldChange("email", e.target.value)}
                    required
                    placeholder="jane@company.com"
                    className="h-11 rounded-xl"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="consult-phone">Phone</Label>
                  <Input
                    id="consult-phone"
                    value={form.phone}
                    onChange={(e) => onFieldChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="h-11 rounded-xl"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="consult-company">Company</Label>
                  <Input
                    id="consult-company"
                    value={form.company}
                    onChange={(e) => onFieldChange("company", e.target.value)}
                    placeholder="Acme Inc."
                    className="h-11 rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="consult-message">What should we help with?</Label>
                <Textarea
                  id="consult-message"
                  value={form.message}
                  onChange={(e) => onFieldChange("message", e.target.value)}
                  required
                  placeholder="Tell us about your workflows, pain points, and goals."
                  className="min-h-[120px] rounded-xl"
                />
              </div>

              {submitError && (
                <div className="rounded-lg border border-destructive/25 bg-destructive/10 p-3 text-sm text-destructive flex items-start gap-2">
                  <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{submitError}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between pt-1">
                <p className="text-xs text-muted-foreground">
                  By submitting, you agree to be contacted about your consultation request.
                </p>
                <Button
                  type="submit"
                  disabled={isSubmitting || !isConfigured}
                  className="btn btn-primary h-11 px-6"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Request"
                  )}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
