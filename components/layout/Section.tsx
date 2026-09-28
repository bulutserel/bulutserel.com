import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";

export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className="border-t-2 border-foreground">
      <Container className="grid md:grid-cols-[1fr_3fr]">
        <h2
          id={headingId}
          className="pt-6 font-mono text-sm uppercase tracking-wide md:border-r-2 md:border-foreground md:py-6"
        >
          {index} — {title}
        </h2>
        <div className="pb-8 pt-4 md:py-10 md:pl-10">{children}</div>
      </Container>
    </section>
  );
}
