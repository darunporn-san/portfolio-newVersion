import { IAboutUS, IExampleWorking, IExperience, INavigation, ISkill } from "./type";
import {
  StarOutlined,
  StarFilled,
  StarTwoTone,
  MobileOutlined,
  MailOutlined,
  HomeOutlined,
  GithubOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

export const navigation: INavigation[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-me" },
  { name: "Experience", href: "/experience" },
  { name: "Skill", href: "/skill" },
  { name: "Example", href: "/example" },
];

export const education: IExperience[] = [
  {
    name: "Mahidol University",
    logo1: "/images/experience/mahidol.png",
    position:
      "Multimedia Systems,Bachelor of Science (English Program) Faculty of Information and Technology (ICT) ",
    year: "2013 - 2018",
  },
  {
    name: "Wichienmatu School,",
    position: "Science-Math(SMA - IPST) ",
    logo1: "/images/experience/wch.png",

    year: "2007 - 2013",
  },
];

export const workExperience: IExperience[] = [
  {
    name: "Digital Associates Co., Ltd.",
    position: "Middle Frontend Developer",
    logo1: "/images/experience/digital.png",
    project: [
      {
        detail: "Data Collection for Sports Authority of Thailand (Launched)",
        language:
          "Vue2(Admin Panel) + Vue3(User Panel), Bootstrap, Vuetify + Antd",
      },
      {
        detail: "Registration system for Football Association (Launched) ",
        language: "Vue2, TailwindCSS, Vuetify",
      },
      {
        detail: "Platform Data Management (Launched)",
        language: "Vue3, Antd, TailwindCSS, Pinia",
      },
      {
        detail: "Online Learning system for Football Association (Develop)",
        language: "Next.JS, Antd, TailwindCSS, React Context API, SWR",
      },
      {
        detail: "Data Collection for NBTC (Develop)",
        language: "Next.JS, Antd, TailwindCSS, Highcharts, SWR, Leaflet",
      },
      {
        detail: "Tookdee Website (Launched)",
        language: "Next.JS, Antd, TailwindCSS, Highcharts",
      },
      {
        detail: "Data analytics dashboard for football association (Develop) ",
        language: "Next.JS, SWR, TailwindCSS, Highcharts",
      },
    ],
    product: [
      {
        detail: "Intensive Voice (Develop)",
        language: "Next.JS, Recoil, TailwindCSS",
      },
      {
        detail: "People Counting (Launched)",
        language: "Next.JS, Antd, Redux, Highcharts",
      },
    ],

    year: "2021 - NOW",
  },
  {
    name: "Softnix Technology Co.,Ltd.",
    position: "Junior Frontend Developer",
    logo1: "/images/experience/softnix.png",
    project: [
      {
        detail:
          "Data and visualization in Data Stewards for Data Government  website of State Railway of Thailand",
        language: "Wordpress",
      },
      {
        detail: "Wireframe and prototype",
        language: "Adobe XD",
      },
    ],
    product: [
      {
        detail: "Redesign and Improvement Website",
        language: "React, Redux",
      },
    ],

    year: "2019 - 2021",
  },
  {
    name: "2BSimple Co.,Ltd.",
    position: "Junior Frontend Developer",
    logo1: "/images/experience/2bsimple.png",
    project: [
      {
        detail: "Coding Thailand Online Quiz & Challenge, Coding Thailand ",
      },
      {
        detail: "Scraping Data from Facebook",
      },
      {
        detail: "Improvement for wealth management service",
      },
    ],

    year: "2018 - 2019",
  },
];

export const aboutUS: IAboutUS[] = [
  {
    label: "Phone",
    icon: <MobileOutlined />,
    value: "0969538874",
  },
  {
    label: "Email",
    icon: <MailOutlined   />,
    value: "darunporn.san@gmail.com",
  },
  {
    label: "Address",
    icon: <HomeOutlined />,
    value: "Pakkret, Nonthaburi, Thailand",
  },
];

export const linkAbout: IAboutUS[] = [
  {
    label: "Github",
    icon: <GithubOutlined />,
    url: "https://github.com/darunporn-san",
  },
  {
    label: "Linkedin",
    icon: <LinkedinOutlined />,
    url: "https://www.linkedin.com/in/darunporn-santisawaddiwong-4a0721128/",
  },
];

export const skills: ISkill[] = [
  {
    name: "HTML",
    image: "/images/skill/html.png",
  },
  {
    name: "JavaScript",
    image: "/images/skill/js-logo.png",
  },
  {
    name: "TypeScript",
    image: "/images/skill/ts-logo.png",
  },
  {
    name: "CSS",
    image: "/images/skill/css.png",
  },
  {
    name: "React",
    image: "/images/skill/react.png",
  },
  {
    name: "Next",
    image: "/images/skill/next.png",
  },
  {
    name: "Redux",
    image: "/images/skill/redux.svg",
  },
  {
    name: "Vue",
    image: "/images/skill/vue.png",
  },
  {
    name: "Vuetify",
    image: "/images/skill/vuetify.png",
  },
  {
    name: "Bootstrap",
    image: "/images/skill/bootstrap.png",
  },
  {
    name: "Tailwind",
    image: "/images/skill/Tailwind.png",
  },
  
];


export const exampleWorking :IExampleWorking[]= [
  {
    name:'Leaflet',
    first_image:'/images/example/leaflet-image.gif',
    second_image:'/images/example/leaflet.png',
  },
  {
    name:'Map',
    first_image:'/images/example/map-image.gif',
    second_image:'/images/example/map.png',
  }
]