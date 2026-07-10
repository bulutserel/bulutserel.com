import { GraduationCap, Package, Tractor } from "lucide-react";
import { cn } from "@/lib/utils";
import { EricssonIcon } from "@/components/icons/EricssonIcon";

const iconStroke = 1.75;

/**
 * Marks next to employer names: Ericsson (brand SVG), others Lucide metaphors
 * (delivery / tractor / education) matching each company.
 */
export function ExperienceCompanyIcon({
  companyId,
  className,
}: {
  companyId: string;
  className?: string;
}) {
  const stroke = iconStroke;

  switch (companyId) {
    case "getir":
      return (
        <Package
          className={cn(className, "text-[#5D3EBC]")}
          strokeWidth={stroke}
          aria-hidden
        />
      );
    case "ericsson":
      return <EricssonIcon className={className} />;
    case "turk-traktor":
      return (
        <Tractor className={className} strokeWidth={stroke} aria-hidden />
      );
    case "cankaya":
      return (
        <GraduationCap className={className} strokeWidth={stroke} aria-hidden />
      );
    default:
      return null;
  }
}
