import { education } from "@/content/education";
import { Section } from "@/components/layout/Section";
import { RoleTable } from "@/components/ui/RoleTable";

export function EducationSection() {
  return (
    <Section id="education" index="03" title="Education">
      <RoleTable groups={education} labels={["Years", "School", "Degree"]} />
    </Section>
  );
}
