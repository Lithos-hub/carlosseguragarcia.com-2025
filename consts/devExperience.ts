type Stack = {
  techName: string;
  imageUrl: string;
};

export interface Experience {
  id: number;
  image: string;
  role: string;
  company: string;
  companyFields: string[];
  subtitle: string;
  clients: string[];
  clientFields: string[];
  initialMonth: number;
  endMonth: number | null;
  initialYear: number;
  endYear: number | null;
  stack: Stack[];
  tasks: string[];
}

interface ExperienceItem {
  stack: { techName: string }[];
  clientFields: string[];
  [key: string]: any;
}

type FieldExtractor<T> = (item: ExperienceItem) => T[];

export const DEV_EXPERIENCE = [
  {
    id: 1,
    image: "/company-logos/cgi.png",
    role: "Front-end Developer",
    company: "CGI",
    companyFields: ["Consulting", "IT"],
    clients: ["BBVA"],
    clientFields: ["Banking"],
    subtitle: "CGI",
    initialYear: 2021,
    endYear: 2022,
    initialMonth: 3,
    endMonth: 6,
    stack: [
      { techName: "Vue 2", imageUrl: "/tech-logos/vue.svg" },
      { techName: "Vuex", imageUrl: "/tech-logos/vuex.svg" },
      { techName: "Vuetify", imageUrl: "/tech-logos/vuetify.svg" },
      { techName: "JavaScript", imageUrl: "/tech-logos/javascript.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
    ],
    tasks: [
      "I developed a web app from scratch for BBVA to manage their projects budget",
      "I worked with a team of 3 developers, being the only frontend developer",
      "I was responsible for the development of the whole app from scratch",
      "I worked using agile methodologies (Kanban board)",
      "I used Vue 2, Vuex, Vuetify, SCSS and JavaScript",
    ],
  },
  {
    id: 2,
    image: "/company-logos/cathedral_software.png",
    role: "Front-end Developer",
    company: "Cathedral Software",
    companyFields: ["Consulting", "IT"],
    subtitle: "Cathedral Software",
    clients: ["McKinsey & Company", "Repsol"],
    clientFields: ["Consulting", "Energy"],
    initialYear: 2022,
    endYear: 2023,
    initialMonth: 6,
    endMonth: 8,
    stack: [
      { techName: "Vue 3", imageUrl: "/tech-logos/vue.svg" },
      { techName: "React", imageUrl: "/tech-logos/react.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Vuex", imageUrl: "/tech-logos/vuex.svg" },
      { techName: "Next", imageUrl: "/tech-logos/next.svg" },
      { techName: "leaflet", imageUrl: "/tech-logos/leaflet.svg" },
      { techName: "Jest", imageUrl: "/tech-logos/jest.svg" },
      { techName: "Vitest", imageUrl: "/tech-logos/vitest.svg" },
      {
        techName: "Testing Library",
        imageUrl: "/tech-logos/testing-library.svg",
      },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
      { techName: "Three.js", imageUrl: "/tech-logos/three.svg" },
    ],
    tasks: [
      "I developed a landing page as internal project using Next 13, TypeScript, Tailwind CSS and Three.js",
      "I helped to get better performance and SEO optimization for the landing page",
      "I developed a SPA as internal project using React, TypeScript, Tailwind CSS and AG Grid",
      "I worked in several projects for McKinsey & Company and Repsol using Vue 3, TypeScript, Tailwind CSS and AG Grid",
      "I worked using agile methodologies (Scrum)",
      "I worked in an optimal environment where best practices prevailed, using Gitflow, conventional commits and clean code",
      "I worked in communication with the client in English",
      "I developed several unit tests",
      "I worked in collaboration with the design team to improve the UI/UX of the app",
    ],
  },
  {
    id: 3,
    image: "/company-logos/innoIT.png",
    role: "Front-end Developer",
    company: "InnoIT",
    companyFields: ["Consulting", "IT"],
    subtitle: "InnoIT",
    clients: ["Europcar"],
    clientFields: ["Transport", "Renting", "SaaS"],
    initialYear: 2023,
    endYear: 2024,
    initialMonth: 8,
    endMonth: 6,
    stack: [
      { techName: "Vue 3", imageUrl: "/tech-logos/vue.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Nuxt", imageUrl: "/tech-logos/nuxt.svg" },
      { techName: "Pinia", imageUrl: "/tech-logos/pinia.svg" },
      { techName: "Jest", imageUrl: "/tech-logos/jest.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
    ],
    tasks: [
      "I helped to migrate a project from Vue 2/Nuxt 2 to Vue 3/Nuxt 3",
      "I was nominated for tech lead of the team due to my high performance and capabilities",
      "I helped to implement from scratch a new domain-based architecture (Domain-Driven Design)",
      "I communicated in English with the client's frontend lead and the other developers on a daily basis",
      "I helped develop unit tests under the Behavior Driven Development philosophy",
    ],
  },
  {
    id: 4,
    image: "/company-logos/photopills.png",
    role: "Front-end Developer",
    company: "PhotoPills",
    companyFields: ["Product", "SaaS"],
    subtitle: "PhotoPills",
    clients: ["PhotoPills"],
    clientFields: ["Photography", "Product", "SaaS"],
    initialYear: 2024,
    endYear: 2025,
    initialMonth: 6,
    endMonth: 1,
    stack: [
      { techName: "Vue 3", imageUrl: "/tech-logos/vue.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Vitest", imageUrl: "/tech-logos/vitest.svg" },
      { techName: "Pinia", imageUrl: "/tech-logos/pinia.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
    ],
    tasks: [
      "I developed as main developer a complex SPA SaaS from scratch using the latest frontend technologies",
      "I worked closely with the UX/UI team to implement pixel perfect on the frontend",
      "I implemented architectural improvements to more efficiently modularize the code",
      "I implemented numerous features in the context of 2D canvas, representing astronomical information",
      "I worked using Gitflow, conventional commits and best practices",
    ],
  },
  {
    id: 5,
    image: "/company-logos/knowmad_mood.jpg",
    role: "Software Engineer",
    company: "Knowmad Mood",
    companyFields: ["Consulting", "IT"],
    subtitle: "Knowmad Mood",
    clients: ["El Corte Inglés"],
    clientFields: ["E-commerce", "Fashion"],
    initialYear: 2025,
    endYear: null,
    initialMonth: 2,
    endMonth: null,
    stack: [
      { techName: "Vue 3", imageUrl: "/tech-logos/vue.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Jest", imageUrl: "/tech-logos/jest.svg" },
      { techName: "Pinia", imageUrl: "/tech-logos/pinia.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "Less", imageUrl: "/tech-logos/less.svg" },
    ],
    tasks: [
      "I'm working in an internal squad for El Corte Inglés to develop a new e-commerce experience",
    ],
  },
].sort((a, b) => b.id - a.id) as Experience[];

// Get all years from beginning and end of experience + 1 year
const getYears = (experience: Experience) => {
  return [
    experience.initialYear,
    experience.endYear,
    experience.endYear ?? new Date().getFullYear(),
  ];
};

export const EXPERIENCE_YEARS = [
  ...new Set(DEV_EXPERIENCE.map(getYears).flat()),
] as const;

const getMostCommonFields = <T extends string>(
  experiences: ExperienceItem[],
  fieldExtractor: FieldExtractor<T>,
  limit: number = 5,
): string => {
  const fieldCount = experiences.reduce(
    (acc, experience) => {
      fieldExtractor(experience).forEach((field) => {
        acc[field] = (acc[field] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>,
  );

  return Object.entries(fieldCount)
    .sort((a, b) => b[1] - a[1])
    .map(([field]) => field)
    .slice(0, limit)
    .join(", ");
};

export const getMostUsedTech = () =>
  getMostCommonFields(DEV_EXPERIENCE, (exp) =>
    exp.stack.map((tech) => tech.techName),
  );

export const getMainClientFields = () =>
  getMostCommonFields(DEV_EXPERIENCE, (exp) => exp.clientFields);

export const techSkills = [
  {
    image: "/tech-logos/html.svg",
    name: "HTML",
  },
  {
    image: "/tech-logos/css.svg",
    name: "CSS",
  },
  {
    image: "/tech-logos/javascript.svg",
    name: "JavaScript",
  },
  {
    image: "/tech-logos/typescript.svg",
    name: "TypeScript",
  },
  {
    image: "/tech-logos/vite.svg",
    name: "Vite",
  },
  {
    image: "/tech-logos/vue.svg",
    name: "Vue",
  },
  {
    image: "/tech-logos/react.svg",
    name: "React",
  },
  {
    image: "/tech-logos/next.svg",
    name: "Next.js",
  },
  {
    image: "/tech-logos/nuxt.svg",
    name: "Nuxt",
  },
  {
    image: "/tech-logos/pinia.svg",
    name: "Pinia",
  },
  {
    image: "/tech-logos/vuex.svg",
    name: "Vuex",
  },
  {
    image: "/tech-logos/redux.svg",
    name: "Redux",
  },
  {
    image: "/tech-logos/jest.svg",
    name: "Jest",
  },
  {
    image: "/tech-logos/vitest.svg",
    name: "Vitest",
  },
  {
    image: "/tech-logos/testing-library.svg",
    name: "Testing Library",
  },
  {
    image: "/tech-logos/sass.svg",
    name: "SASS",
  },
  {
    image: "/tech-logos/tailwind.svg",
    name: "Tailwind CSS",
  },
  {
    image: "/tech-logos/less.svg",
    name: "Less",
  },
  {
    image: "/tech-logos/three.svg",
    name: "Three.js",
  },
  {
    image: "/tech-logos/leaflet.svg",
    name: "Leaflet.js",
  },
  {
    image: "/tech-logos/git.svg",
    name: "Git",
  },
  {
    image: "/tech-logos/docker.svg",
    name: "Docker",
  },
  {
    image: "/tech-logos/node.svg",
    name: "Node",
  },
  {
    image: "/tech-logos/mongo.svg",
    name: "MongoDB",
  },
  {
    image: "/tech-logos/linux.svg",
    name: "Linux",
  },
];
