export const sectionsOptions = [
  "hero",
  "about",
  "experience",
  "projects",
] as const;
export type Section = (typeof sectionsOptions)[number];

interface SectionData {
  id: string;
  code: string;
  mainColor: string;
  title: string;
  componentName: string;
}

export const sections: Record<Section, SectionData> = {
  hero: {
    id: "hero",
    code: "A1",
    mainColor: "red",
    title: "<Hero />",
    componentName: "Hero.vue",
  },
  about: {
    id: "about",
    code: "A2",
    mainColor: "blue",
    title: "<About />",
    componentName: "About.vue",
  },
  experience: {
    id: "experience",
    code: "B1",
    mainColor: "amber",
    title: "<Experience />",
    componentName: "Experience.vue",
  },
  projects: {
    id: "projects",
    code: "C1",
    mainColor: "blue",
    title: "<Projects />",
    componentName: "Projects.vue",
  },
};
