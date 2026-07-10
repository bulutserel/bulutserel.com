import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_BY_COMPANY: Record<string, string> = {
  getir: "/logos/getir.png",
  ericsson: "/logos/ericsson.png",
  "turk-traktor": "/logos/turk-traktor.png",
  cankaya: "/logos/cankaya.png",
};

type Props = {
  companyId: string;
  className?: string;
};

/**
 * Employer mark from /public/logos. Decorative — company name is the accessible label.
 */
export function ExperienceCompanyLogo({ companyId, className }: Props) {
  const src = LOGO_BY_COMPANY[companyId];
  if (!src) return null;

  return (
    <div
      className={cn(
        "relative size-9 shrink-0 overflow-hidden rounded-lg border border-card-border bg-cream p-1 shadow-[var(--shadow-inset)] sm:size-10",
        className,
      )}
      aria-hidden
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-contain p-0.5"
        sizes="(max-width: 640px) 36px, 40px"
      />
    </div>
  );
}
