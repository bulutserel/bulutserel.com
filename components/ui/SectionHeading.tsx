import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string;
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  id,
  kicker,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "mx-auto max-w-2xl text-center",
        align === "left" && "max-w-3xl text-left",
        className,
      )}
    >
      {kicker ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
          {kicker}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-pretty text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </div>
  );
}
