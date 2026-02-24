import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  label: string;
  tone?: "light" | "dark";
  className?: string;
};

const SectionBadge = ({ label, tone = "light", className }: SectionBadgeProps) => {
  return (
    <div
      className={cn(
        "section-badge",
        tone === "dark" && "section-badge--dark",
        className,
      )}
    >
      <span className="section-badge-dot" aria-hidden="true" />
      <span className="section-badge-label">{label}</span>
    </div>
  );
};

export default SectionBadge;
