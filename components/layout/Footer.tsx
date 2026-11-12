import { site } from "@/content/site";
import { Container } from "@/components/layout/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-2 font-mono text-xs uppercase tracking-wider text-muted sm:flex-row sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p>{site.heroMantra}</p>
      </Container>
    </footer>
  );
}
