export const sectionsOptions = [
  "hero",
  "about",
  "summary",
  "experience",
  "projects",
] as const;
export type Section = (typeof sectionsOptions)[number];

interface SectionData {
  id: string;
  code: string;
  title: string;
  componentName: string;
}

export const sections: Record<Section, SectionData> = {
  hero: {
    id: "hero",
    code: "A1",
    title: "<Hero />",
    componentName: "Hero.vue",
  },
  about: {
    id: "about",
    code: "A2",
    title: "<About />",
    componentName: "About.vue",
  },
  summary: {
    id: "summary",
    code: "B1",
    title: "<Summary />",
    componentName: "Summary.vue",
  },
  experience: {
    id: "experience",
    code: "B2",
    title: "<Experience />",
    componentName: "Experience.vue",
  },
  projects: {
    id: "projects",
    code: "B1",
    title: "<Projects />",
    componentName: "Projects.vue",
  },
};
