import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground py-5">
      <Container className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wide sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>{site.heroMantra}</p>
      </Container>
    </footer>
  );
}
