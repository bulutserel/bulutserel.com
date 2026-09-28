import type { ExperienceCompanyGroup } from "@/types/content";

const columns = "sm:grid-cols-[11rem_9rem_1fr] sm:gap-4";

export function RoleTable({
  groups,
  labels = ["Year", "Company", "Role"],
}: {
  groups: ExperienceCompanyGroup[];
  labels?: [string, string, string];
}) {
  const rows = groups.flatMap((group) =>
    group.roles.map((role) => ({ ...role, company: group.company })),
  );

  return (
    <div className="border-t-2 border-foreground">
      <div
        aria-hidden
        className={`hidden border-b-2 border-foreground py-2 font-mono text-xs uppercase tracking-wide text-muted sm:grid ${columns}`}
      >
        {labels.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>
      {rows.map((row, i) => (
        <details
          key={row.id}
          open={i === 0}
          className="group border-b-2 border-foreground"
        >
          <summary className="-mx-2 flex cursor-pointer items-start gap-4 px-2 py-4 hover:bg-foreground hover:text-background">
            <span className={`grid flex-1 gap-1 ${columns}`}>
              <span className="font-mono text-xs uppercase sm:text-sm">{row.duration}</span>
              <span className="font-semibold uppercase">{row.company}</span>
              <span className="uppercase">{row.role}</span>
            </span>
            <span aria-hidden className="font-mono text-lg leading-none">
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <ul className="space-y-2 pb-5 font-mono text-sm leading-relaxed sm:pl-[calc(11rem+1rem)]">
            {row.achievements.map((a) => (
              <li key={a} className="flex gap-3">
                <span aria-hidden>—</span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </details>
      ))}
    </div>
  );
}
