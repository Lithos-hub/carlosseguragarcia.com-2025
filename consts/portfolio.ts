export interface Portfolio {
  id: number;
  image: string;
  stack: { techName: string; imageUrl: string }[];
  prevTitle: string;
  title: string;
  description: string;
  repo: string;
  href?: string;
}

export const PORTFOLIO_PROJECTS: Portfolio[] = [
  {
    id: 1,
    image: "/img/apps/vue-form-latte.png",
    stack: [
      { techName: "Vue", imageUrl: "/tech-logos/vue.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Vitest", imageUrl: "/tech-logos/vitest.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
    ],
    prevTitle: "NPM Package",
    repo: "https://github.com/Lithos-hub/vue-form-latte",
    title: "Vue Form Latte",
    description: "Component library to generate dynamic forms",
  },
  {
    id: 2,
    image: "/img/apps/iUI.jpg",
    stack: [
      { techName: "Vue", imageUrl: "/tech-logos/vue.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
    ],
    prevTitle: "UI components portfolio",
    href: "https://iui-app.netlify.app/",
    repo: "https://github.com/Lithos-hub/iUI",
    title: "iUI",
    description:
      "iUI is a components portfolio made with Vue 3, TypeScript, Tailwind CSS, SASS, Vitest and Vite.",
  },
  {
    id: 3,
    image: "/img/apps/iOrbit.jpg",
    stack: [
      { techName: "React", imageUrl: "/tech-logos/react.svg" },
      { techName: "Three.js", imageUrl: "/tech-logos/three.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
    ],
    prevTitle: "Solar system 3D model",
    href: "https://i-orbit.vercel.app/",
    repo: "https://github.com/Lithos-hub/iOrbit",
    title: "iOrbit",
    description:
      "Interactive 3D solar system model using React Three Fiber (Three.js) and React.",
  },
  {
    id: 4,
    image: "/img/apps/iAdopt.jpg",
    stack: [
      { techName: "Next 13", imageUrl: "/tech-logos/next.svg" },
      { techName: "HTML", imageUrl: "/tech-logos/html.svg" },
      { techName: "CSS", imageUrl: "/tech-logos/css.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "OpenAI", imageUrl: "/tech-logos/openai.svg" },
      { techName: "MongoDB", imageUrl: "/tech-logos/mongo.svg" },
    ],
    prevTitle: "Next 13 Landing App",
    href: "https://i-adopt-landing-app.vercel.app/",
    repo: "https://github.com/Lithos-hub/iAdopt-LandingApp",
    title: "iAdopt",
    description:
      "Chatbot tool that helps animal shelters to find the best match for their animals and potential adopters using ChatGPT.",
  },
  {
    id: 5,
    image: "/img/apps/infojobs.svg",
    stack: [
      { techName: "React", imageUrl: "/tech-logos/react.svg" },
      { techName: "HTML", imageUrl: "/tech-logos/html.svg" },
      { techName: "CSS", imageUrl: "/tech-logos/css.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Node", imageUrl: "/tech-logos/node.svg" },
      { techName: "Express", imageUrl: "/tech-logos/express.svg" },
      { techName: "OpenAI", imageUrl: "/tech-logos/openai.svg" },
    ],
    prevTitle: "React SPA + Node Proxy",
    href: "https://hackathon-infojobs-2023-lithoshub.netlify.app/",
    repo: "https://github.com/Lithos-hub/infojobs-hackathon",
    title: "Infojobs Hackathon 2023",
    description:
      "My submission for the Infojobs Hackathon 2023 where I propose several new features using OpenAI API (ChatGPT and Whisper).",
  },
  {
    id: 6,
    image: "/img/apps/iPet.jpg",
    stack: [
      { techName: "React", imageUrl: "/tech-logos/react.svg" },
      { techName: "HTML", imageUrl: "/tech-logos/html.svg" },
      { techName: "CSS", imageUrl: "/tech-logos/css.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Vitest", imageUrl: "/tech-logos/vitest.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "Node", imageUrl: "/tech-logos/node.svg" },
      { techName: "Express", imageUrl: "/tech-logos/express.svg" },
      { techName: "MongoDB", imageUrl: "/tech-logos/mongo.svg" },
    ],
    prevTitle: "MERN fullstack SPA",
    href: "https://main--ipet-spa.netlify.app/",
    repo: "https://github.com/Lithos-hub/iPet-SPA",
    title: "iPet",
    description:
      "Application to manage pets, events, appointments, vets, contacts, notes, etc.",
  },
  {
    id: 7,
    image: "/img/apps/iMovies.jpg",
    stack: [
      { techName: "Vue 3", imageUrl: "/tech-logos/vue.svg" },
      { techName: "HTML", imageUrl: "/tech-logos/html.svg" },
      { techName: "CSS", imageUrl: "/tech-logos/css.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Vitest", imageUrl: "/tech-logos/vitest.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
      { techName: "Node", imageUrl: "/tech-logos/node.svg" },
      { techName: "Express", imageUrl: "/tech-logos/express.svg" },
      { techName: "MongoDB", imageUrl: "/tech-logos/mongo.svg" },
    ],
    prevTitle: "MEVN fullstack SPA",
    href: "https://main--imovies-v2.netlify.app/",
    repo: "https://github.com/Lithos-hub/iMovies-v2-SPA",
    title: "iMovies",
    description: "App to search, display and save movies using the TMDB API.",
  },
  {
    id: 8,
    image: "/img/apps/iCompose.jpg",
    stack: [
      { techName: "Vue 3", imageUrl: "/tech-logos/vue.svg" },
      { techName: "HTML", imageUrl: "/tech-logos/html.svg" },
      { techName: "CSS", imageUrl: "/tech-logos/css.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
      { techName: "Vitest", imageUrl: "/tech-logos/vitest.svg" },
      { techName: "TypeScript", imageUrl: "/tech-logos/typescript.svg" },
      { techName: "Tailwind", imageUrl: "/tech-logos/tailwind.svg" },
    ],
    prevTitle: "Frontend SPA (Vue 3)",
    href: "https://icompose.netlify.app/",
    repo: "https://github.com/Lithos-hub/iCompose-v2",
    title: "iCompose",
    description: "Vue components portfolio made from scratch.",
  },
  {
    id: 9,
    image: "/img/apps/iCode.jpg",
    stack: [
      { techName: "Vue 3", imageUrl: "/tech-logos/vue.svg" },
      { techName: "HTML", imageUrl: "/tech-logos/html.svg" },
      { techName: "CSS", imageUrl: "/tech-logos/css.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
      { techName: "JavaScript", imageUrl: "/tech-logos/javascript.svg" },
    ],
    prevTitle: "Frontend SPA (Vue 3)",
    href: "https://icode-playground-app.netlify.app/",
    repo: "https://github.com/Lithos-hub/iCode",
    title: "iCode",
    description:
      "Online code editor with HTML, CSS and JavaScript using Monaco Editor.",
  },
  {
    id: 10,
    image: "/img/apps/iShop.jpg",
    stack: [
      { techName: "Vue 3", imageUrl: "/tech-logos/vue.svg" },
      { techName: "HTML", imageUrl: "/tech-logos/html.svg" },
      { techName: "CSS", imageUrl: "/tech-logos/css.svg" },
      { techName: "SCSS", imageUrl: "/tech-logos/sass.svg" },
      { techName: "JavaScript", imageUrl: "/tech-logos/javascript.svg" },
      { techName: "Firebase", imageUrl: "/tech-logos/firebase.svg" },
    ],
    prevTitle: "Frontend SPA (Vue 3)",
    href: "https://ishop-app.netlify.app/",
    repo: "https://github.com/Lithos-hub/iShop",
    title: "iShop",
    description: "Fake e-commerce app simulating a real ordering process.",
  },
];
