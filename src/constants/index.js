import {
  web,
  javascript,
  html,
  css,
  reactjs,
  sass,
  tailwind,
  git,
  fab,
  movieslib,
  siteviagens,
  card,
  fylolanding,
  imc,
  ip,
  ordercard,
  pokedex,
  pomodoro,
  stopwatch,
  timetracking,
  todolist,
  watch,
  netflix
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Trabalho",
  },
  {
    id: "contact",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Sass",
    icon: sass,
  },
];

const experiences = [
  {
    title: "Soldado",
    company_name: "Força Aérea Brasileira",
    icon: fab,
    iconBg: "#383E56",
    date: "Agosto 2018 - Agosto 2022",
    points: [
    ],
  },
];

const projects = [
  {
    name: "Netflix Clone",
    description:
      "Um clone do netflix apenas para fins didáticos.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "React",
        color: "blue-text-gradient",
      },
    ],
    image: netflix,
    source_code_link: "https://netflix-clone-orcin-gamma.vercel.app/",
  },
  {
    name: "MoviesLib",
    description:
      "Uma biblioteca com a avaliação dos principais filmes.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: movieslib,
    source_code_link: "https://thiagoplaca.github.io/MoviesLib/",
  },
  {
    name: "Interactive Card Details ",
    description:
    "Uma página de pagamento com cartão, que permite a interação dos dados do usuário com o layout do.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      {
        name: "Sass",
        color: "pink-text-gradient",
      },
    ],
    image: card,
    source_code_link: "https://thiagoplaca.github.io/Interactive-Card-Details/",
  },
  {
    name: "My Pokedex",
    description:
    "Um projeto consumindo dados da API: PokéAPI.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: pokedex,
    source_code_link: "https://thiagoplaca.github.io/MyPokedex/",
  },
  {
    name: "My IP",
    description:
      "Uma Ferramenta para descobrir seu IP Local.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: ip,
    source_code_link: "https://thiagoplaca.github.io/MyIP/",
  },
  {
    name: "Digital Clock",
    description:
    "Projeto de um relógio digital, com a opção de alternar o layout da página para o Light Mode.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: watch,
    source_code_link: "https://thiagoplaca.github.io/Digital-Clock/",
  },
  {
    name: "To Do List",
    description:
    "Uma Lista de tarefas desenvolvida com JavaScript.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: todolist,
    source_code_link: "https://thiagoplaca.github.io/ToDoList/",
  },
  {
    name: "Pomodoro Timer",
    description:
    "Um simples temporizador pomodoro.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: pomodoro,
    source_code_link: "https://thiagoplaca.github.io/Pomodoro-Timer/",
  },
  {
    name: "Stopwatch",
    description:
    "Um cronômetro.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: stopwatch,
    source_code_link: "https://thiagoplaca.github.io/Stopwatch-Project/",
  },
  {
    name: "Site de Viagens",
    description:
    "Um simples site de viagens.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: siteviagens,
    source_code_link: "https://thiagoplaca.github.io/SiteViagens/",
  },
  {
    name: "Calculadora IMC",
    description:
      "Uma calculadora de IMC.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: imc,
    source_code_link: "https://thiagoplaca.github.io/Calculadora_Imc/",
  },
  {
    name: "Time Tracking Dashboard",
    description:
    "Uma simples página desenvolvida com conceitos flexbox e css grid.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: timetracking,
    source_code_link: "https://thiagoplaca.github.io/TimeTrackingDashboard/",
  },
  {
    name: "Order Summary Component",
    description:
    "Um simples card de pagamento.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: ordercard,
    source_code_link: "https://thiagoplaca.github.io/OrderSummaryComponent/",
  },
  {
    name: "Fylo Landing Page",
    description:
      "Uma simples landing page.",
      tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
    ],
    image: fylolanding,
    source_code_link: "https://thiagoplaca.github.io/fyloLandingPage/",
  },
];

export { services, technologies, experiences, projects };