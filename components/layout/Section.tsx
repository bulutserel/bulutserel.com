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
    <section id={id} aria-labelledby={headingId} className="py-20 sm:py-32">
      <Container>
        <header className="reveal mb-12 flex items-start gap-4 sm:mb-16 sm:gap-6">
          <span className="mt-2 font-mono text-xs text-muted sm:mt-4">{index}</span>
          <h2
            id={headingId}
            className="text-5xl font-medium leading-none tracking-[-0.04em] sm:text-7xl lg:text-8xl"
          >
            {title}
          </h2>
        </header>
        <div className="grid md:grid-cols-[1fr_3fr] md:gap-12">
          <div aria-hidden className="hidden md:block" />
          <div className="min-w-0">{children}</div>
        </div>
      </Container>
    </section>
  );
}
