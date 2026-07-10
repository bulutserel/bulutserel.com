import type { ExperienceCompanyGroup } from "@/types/content";

export const experience: ExperienceCompanyGroup[] = [
  {
    id: "getir",
    company: "Getir",
    roles: [
      {
        id: "getir-pm",
        role: "Product Manager",
        duration: "Jan 2024 — Present",
        achievements: [
          "Strategic Roadmap & Performance Management: Managing product roadmaps and tracking OKRs and KPIs to align product goals with business outcomes.",
          "Stakeholder Collaboration: Partnering closely with cross-functional stakeholders to drive continuous product and business development.",
          "Cross-Functional Team Leadership: Collaborating directly with Mobile, Backend, Frontend, and Data teams to manage and scale products with a holistic, 360-degree perspective.",
        ],
      },
      {
        id: "getir-qa",
        role: "Software Quality Assurance Engineer",
        duration: "Jun 2021 — Dec 2023",
        achievements: [
          "Elevating Product Quality: Driving continuous improvement to significantly enhance the overall quality and reliability of the products.",
          "Test Documentation & Design: Preparing comprehensive quality-related documentation and designing detailed test cases for end-to-end coverage.",
          "Scaling Test Automation: Integrating automation frameworks into the testing lifecycle to expand test coverage and accelerate delivery.",
        ],
      },
    ],
  },
  {
    id: "ericsson",
    company: "Ericsson",
    roles: [
      {
        id: "ericsson-ste",
        role: "Software Test Engineer",
        duration: "Aug 2019 — Jun 2021",
        achievements: [
          "Manual Testing & Methodologies: Thorough Manual, Blackbox, and Whitebox testing to minimize software defects.",
          "Automation & API: Strong API Automation solutions to verify integration and system stability.",
          "Process Management: Efficient Test Planning and Release Management focused on minimizing risks and meeting project deadlines.",
        ],
      },
    ],
  },
  {
    id: "turk-traktor",
    company: "Türk Traktör",
    roles: [
      {
        id: "turk-traktor-bda",
        role: "Business Development Associate",
        duration: "Jan 2019 — May 2019",
        achievements: [
          "Conducted data analysis, data gathering, and market research to support strategic decision-making and product optimization.",
          "Created a heat map visualization to identify trends and guide business decisions.",
          "Applied optimization techniques using advanced Excel tools such as Solver and VBA automation.",
          "Utilized SAP and Microsoft Office for data processing, reporting, and performance tracking.",
          "Tools & technologies: Microsoft Excel (Solver, VBA), SAP.",
        ],
      },
    ],
  },
];
