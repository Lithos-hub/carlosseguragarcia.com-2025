type Stack = {
  techName: string;
  imageUrl: string;
};

export interface Experience {
  image: string;
  title: string;
  subtitle: string;
  initialMonth: number;
  endMonth: number | null;
  initialYear: number;
  endYear: number | null;
  stack: Stack[];
  tasks: string[];
}

export const DEV_EXPERIENCE = [
  {
    image: "/company-logos/cgi.png",
    title: "Front-end Developer",
    subtitle: "CGI",
    initialYear: 2021,
    endYear: 2022,
    initialMonth: 3,
    endMonth: 6,
    stack: [
      { techName: "Vue", imageUrl: "/tech-logos/vue.svg" },
      { techName: "Vuex", imageUrl: "/tech-logos/vuex.svg" },
      { techName: "Vuetify", imageUrl: "/tech-logos/vuetify.svg" },
      { techName: "JavaScript", imageUrl: "/tech-logos/javascript.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
    ],
    tasks: [
      "Frontend development (Vue 2, Vuetify and Google App Engine)",
      "Frontend apps maintenance and integrations",
      "Gitflow forkflow",
    ],
  },
  {
    image: "/company-logos/cathedral_software.png",
    title: "Front-end Developer",
    subtitle: "Cathedral Software",
    initialYear: 2022,
    endYear: 2023,
    initialMonth: 6,
    endMonth: 8,
    stack: [
      { techName: "Vue", imageUrl: "/tech-logos/vue.svg" },
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
      "Landing page development (Next 13, TypeScript, Tailwind CSS and Three.js)",
      "SPA development (React, TypeScript, Tailwind CSS and AG Grid)",
      "SPA development (Vue 3, TypeScript, Tailwind CSS and AG Grid)",
      "SPA development (Vue 3, TypeScript, Tailwind CSS and Leaflet.js)",
      "SPA development (Vue 3, JavaScript and Vuetify)",
      "Testing (Jest, Vitest and Testing Library)",
      "Agile methodologies (Scrumban).",
      "Gitflow, conventional commits and best practices",
    ],
  },
  {
    image: "/company-logos/innoIT.png",
    title: "Front-end Developer",
    subtitle: "InnoIT",
    initialYear: 2023,
    endYear: 2024,
    initialMonth: 8,
    endMonth: 6,
    stack: [
      { techName: "Vue", imageUrl: "/tech-logos/vue.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Nuxt", imageUrl: "/tech-logos/nuxt.svg" },
      { techName: "Pinia", imageUrl: "/tech-logos/pinia.svg" },
      { techName: "Jest", imageUrl: "/tech-logos/jest.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
    ],
    tasks: [
      "Migration project from Vue 2/Nuxt 2 to Vue 3/Nuxt 3",
      "Software architecture tasks",
      "Testing (Jest)",
      "Gitflow, conventional commits and best practices",
    ],
  },
  {
    image: "/company-logos/photopills.png",
    title: "Front-end Developer",
    subtitle: "PhotoPills",
    initialYear: 2024,
    endYear: 2025,
    initialMonth: 6,
    endMonth: 1,
    stack: [
      { techName: "Vue", imageUrl: "/tech-logos/vue.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Vitest", imageUrl: "/tech-logos/vitest.svg" },
      { techName: "Pinia", imageUrl: "/tech-logos/pinia.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
    ],
    tasks: [
      "SPA development (Vue 3, TypeScript, Tailwind CSS, SCSS)",
      "Pixel perfect",
      "Canvas 2D development",
      "Testing (Vitest)",
      "Gitflow, conventional commits and best practices",
    ],
  },
  {
    image: "/company-logos/knowmad_mood.jpg",
    title: "Software Engineer",
    subtitle: "Knowmad Mood",
    initialYear: 2025,
    endYear: null,
    initialMonth: 1,
    endMonth: null,
    stack: [
      { techName: "Vue", imageUrl: "/tech-logos/vue.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Jest", imageUrl: "/tech-logos/jest.svg" },
      { techName: "Pinia", imageUrl: "/tech-logos/pinia.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "Less", imageUrl: "/tech-logos/less.svg" },
    ],
    tasks: [
      "E-commerce development (Vue 3, TypeScript, Tailwind CSS, Less)",
      "Testing (Jest)",
      "Gitflow, Scrum and agile methodologies",
    ],
  },
] as Experience[];

// Get all years from beginning and end of experience + 1 year

const getYears = (experience: Experience) => {
  return [
    experience.initialYear,
    experience.endYear,
    experience.endYear ?? new Date().getFullYear(),
  ];
};

export const YEARS = [...new Set(DEV_EXPERIENCE.map(getYears).flat())] as const;
