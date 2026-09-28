import { experience } from "@/content/experience";
import { Section } from "@/components/layout/Section";
import { RoleTable } from "@/components/ui/RoleTable";

export function ExperienceSection() {
  return (
    <Section id="experience" index="02" title="Experience">
      <RoleTable groups={experience} />
    </Section>
  );
}
