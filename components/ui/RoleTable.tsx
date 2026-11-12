"use client";

import { useId, useState } from "react";
import type { ExperienceCompanyGroup } from "@/types/content";
import { cn } from "@/lib/utils";

export function RoleTable({ groups }: { groups: ExperienceCompanyGroup[] }) {
  const rows = groups.flatMap((group) =>
    group.roles.map((role) => ({ ...role, company: group.company })),
  );
  const [openId, setOpenId] = useState<string | null>(rows[0]?.id ?? null);
  const baseId = useId();

  return (
    <ul className="border-t border-line">
      {rows.map((row, i) => {
        const open = openId === row.id;
        const panelId = `${baseId}-${row.id}`;
        return (
          <li
            key={row.id}
            className="reveal border-b border-line"
            style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenId(open ? null : row.id)}
              className="group -mx-4 my-1 grid w-[calc(100%+2rem)] grid-cols-[1fr_auto] items-baseline gap-x-6 gap-y-1 rounded-xl px-4 py-5 text-left transition-colors duration-300 hover:bg-surface sm:grid-cols-[10rem_1fr_auto]"
            >
              <span className="col-span-2 font-mono text-xs uppercase tracking-wider text-muted sm:col-span-1">
                {row.duration}
              </span>
              <span
                className={cn(
                  "transition-[color,transform] duration-500 ease-out-expo group-hover:translate-x-1",
                  open ? "text-foreground" : "text-muted group-hover:text-foreground",
                )}
              >
                <span className="block text-xl font-medium tracking-[-0.02em] sm:text-2xl">
                  {row.company}
                </span>
                <span className="mt-1 block text-sm">{row.role}</span>
              </span>
              <span
                aria-hidden
                className={cn(
                  "relative size-4 self-center transition-transform duration-500 ease-out-expo",
                  open && "rotate-45",
                )}
              >
                <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current" />
              </span>
            </button>
            <div
              id={panelId}
              className={cn(
                "grid transition-[grid-template-rows,opacity] duration-500 ease-out-expo",
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden" inert={!open}>
                <ul className="space-y-3 pb-8 leading-relaxed text-muted sm:pl-[calc(10rem+1.5rem)]">
                  {row.achievements.map((a) => (
                    <li key={a} className="flex gap-3">
                      <span aria-hidden className="text-faint">&mdash;</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
