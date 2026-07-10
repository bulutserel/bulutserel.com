"use client";

import { motion } from "framer-motion";
import type { ExperienceCompanyGroup } from "@/types/content";
import { ExperienceCompanyLogo } from "@/components/experience/ExperienceCompanyLogo";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { cn } from "@/lib/utils";

export function ExperienceCard({
  group,
  index,
}: {
  group: ExperienceCompanyGroup;
  index: number;
}) {
  const reduce = useReducedMotion();
  const titleId = `exp-${group.id}-title`;

  const body = (
    <>
      <div className="flex min-w-0 flex-1 items-center justify-between gap-3">
        <h3
          id={titleId}
          className="min-w-0 text-lg font-semibold leading-snug tracking-tight text-navy-900"
        >
          {group.company}
        </h3>
        <ExperienceCompanyLogo companyId={group.id} />
      </div>
      <div className="mt-5">
        {group.roles.map((role, roleIndex) => (
          <div
            key={role.id}
            className={cn(roleIndex > 0 && "mt-6 border-t border-card-border/70 pt-6")}
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h4 className="text-base font-semibold tracking-tight text-foreground">
                {role.role}
              </h4>
              <p className="shrink-0 font-mono text-xs text-muted">{role.duration}</p>
            </div>
            {role.achievements.length > 0 && (
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
                {role.achievements.map((a, i) => (
                  <li key={`${role.id}-a-${i}`}>{a}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </>
  );

  const className = cn(
    "relative rounded-2xl border border-card-border bg-card/70 p-6 shadow-soft backdrop-blur-md",
    "shadow-[0_1px_0_0_rgba(255,255,255,0.35)_inset]",
  );

  if (reduce) {
    return (
      <article className={className} aria-labelledby={titleId}>
        {body}
      </article>
    );
  }

  return (
    <motion.article
      className={className}
      aria-labelledby={titleId}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
    >
      {body}
    </motion.article>
  );
}
