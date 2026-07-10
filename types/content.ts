export type ExperienceRole = {
  id: string;
  role: string;
  duration: string;
  achievements: string[];
};

export type ExperienceCompanyGroup = {
  id: string;
  company: string;
  roles: ExperienceRole[];
};

export type SkillCategory = "I'm doing" | "I'm using" | "I'm learning";

export type SkillGroup = {
  category: SkillCategory;
  items: string[];
};
