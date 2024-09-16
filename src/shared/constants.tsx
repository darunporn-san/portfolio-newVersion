import {
  IAboutUS,
  IExampleProject,
  IExampleWorking,
  IExperience,
  INavigation,
  ISkill,
} from "./type";
import {
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
    name: "Officemate(OFM)",
    position: "IT outsource (Frontend Developer)",
    logo1: "",
    year: "16 SEP 21 - NOW",
  },
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
        language:
          "Next.JS, Antd, TailwindCSS, Highcharts, Leaflet, Context API",
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

    year: "AUG 21 - 16 APR 24",
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

    year: "APR 19 - JUL 21",
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

    year: "SEP 18 - FEB 19",
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
    icon: <MailOutlined />,
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

export const OBCL: IExampleWorking[] = [
  {
    name: "GeoJson Leaflet",
    first_image: "/images/example/geojson-image.gif",
    second_image: "/images/example/geojson.png",
  },
  {
    name: "Radius Leaflet",
    first_image: "/images/example/leaflet-image.gif",
    second_image: "/images/example/leaflet.png",
  },
  {
    name: "Routing Map",
    first_image: "/images/example/routing-image.gif",
    second_image: "/images/example/routing.png",
  },
  {
    name: "Draw Canvas",
    first_image: "/images/example/draw-image.gif",
    second_image: "/images/example/draw.png",
  },
];

export const DCP: IExampleWorking[] = [
  {
    name: "Signin",
    first_image: "/images/example/sso-image.png",
    second_image: "/images/example/sso.png",
  },
  {
    name: "Bigdata",
    first_image: "/images/example/bigdata-image.png",
  },
  {
    name: "Academy",
    first_image: "/images/example/academy-image.png",
  },
  {
    name: "Map",
    first_image: "/images/example/map-image.gif",
    second_image: "/images/example/map.png",
  },
  {
    name: "Chat",
    first_image: "/images/example/chat-image.png",
    second_image: "/images/example/chat.png",
  },
  {
    name: "Interactive",
    first_image: "/images/example/interactive-image.gif",
    second_image: "/images/example/interactive.png",
  },
];

export const exampleProject: IExampleProject[] = [
  {
    name: "Data Collection for NBTC",
    detail: `This project addresses the challenges associated with communication cables in Bangkok. The process involves selecting a location to display routes using Google Maps, accessed via the Google API Key. Subsequently, distances are measured to pinpoint problem areas with the communication cables. The following images illustrate various stages of the project:

    Image 1: Displays a route with added information, and users can click on the route to view detailed information.
    
    Image 2: Shows the interface for selecting a location, where users can adjust the radius of a circle to display relevant information.
    
    Image 3: Illustrates the process of selecting specific route coordinates and displaying the chosen route.
    
    Image 4: Demonstrates the step of measuring rectangles or circles on an uploaded image or a snapshot from a 360-degree view.`,
    // detail: `โปรเจคนี้เป็นโปรเจคเกี่ยวกับปัญหาของสายสื่อสารในกรุงเทพ โดยการทำงานจะมีการเลือกตำแหน่งเพื่อที่จะแสดงเส้นทางตาม GoogleMap โดยดึงจาก Google API Key หลังจากนั้นจะมีการวัดระยะทางเพื่อแสดงจุดปัญหาของสายสื่อสารนั้น มีตัวอย่างดังตามในรูปข้างล่าง\n
    // รูปที่ 1 : รูปนี้แสดงเส้นทางที่มีการเพิ่มข้อมูลไปแล้วโดยสามารถคลิ๊กในเส้นเพื่อดูรายละเอียด \n รูปที่ 2 : รูปนี้เมื่อทำการกดตรงตำแหน่งที่ต้องการจะมีให้ปรับรัศมีของวงกลทเพื่อที่จะแสดงข้อมูล \n รูปที่ 3 : รูปนี้จะเป้นขั้นตอนการเลือกพิกัดเส้นทางที่ต้องการและจะแสดงเส้นทางนั้น  \n รูปที่ 4 : รูปนี้จะเป็นขั้นตอนการวัด สี่เหลี่ยมหรือวงกลมบนรูปภาพที่มีการอัพโหลดไฟล์หรือมาจากการsnapจาก 360 องศา  `,
    project: OBCL,
  },
  {
    name: "All Project in Sports Authority of Thailand",
    detail: `This project focuses on sports-related "Big Data" collection and is divided into four sub-projects:

  1. Data Collection: This sub-project involves collecting various data about athletes, personnel, stadiums, teams, and competitions. It covers sports such as football, basketball, rugby, and hockey.
    
    2. Academy: This sub-project allows athletes to fill out questionnaires according to their level to receive a certificate.
    
    3. E-Learning: This sub-project offers educational courses that include lessons and exams. During video lessons, students can interact by answering questions or taking breaks. Additionally, there is a chat feature that allows students to communicate with their peers enrolled in the same course and to have private conversations with the instructors.
    
    4. KPI: This sub-project focuses on analyzing the data from the three sub-projects. The results are displayed through various graphs, such as pie charts and bar charts, and visualized on a map of Thailand.`,
    // detail: `โปรเจคนี้เป็นโปรเจคเกี่ยวกับการกีฬาซึ่งจะเป็นการเก็บแบบ BigData โดยจะมีการแบ่งเป็นทั้งหมด 4 โปรเจคย่อยในนี้ประกอบด้วย \n
    //   1 : Data Collection เป็นโปรเจคการเก็บข้อมูลต่างๆ ของนักกีฬา บุคลากร สนามกีฬา ทีม และการแข่งขันมีทั้ง ฟุตบอล บาสเกตบอล รักบี้ และ Hockey \n 2 : Academy เป็นโปรเจคให้กรอกข้อมูลตอบคำถามตามระดับของนักกีฬาแต่ละคนเพื่อรับใบ Certificate \n
    //   3 : E-Learning เป็นโปรเจคการเรียนการสอน โดยประกอบด้วยคอร์สต่างๆ จะมีทั้งบทเรียนและบททดสอบ ซึ่งในระหว่างการดูวิดิโอจะมีการให้นักเรียนได้มีการ interactive ตอบคำถาม หรือพักเบรค และยังมีแชทระหว่างนักเรียนที่เรียนอยู่ในคอร์สนั้นๆ ยังสามารถแชทกับครูผู้สอนเป้นการส่วนตัวได้อีกด้วย\n
    //    4 : KPI เป็นโปรเจคเกี่ยวกับการวิเคราะห์ข้อมูลของ 3 โปรเจคข้างต้น โดยจะมีการแสดงผ่านกราฟต่างๆ เช่น piechart, barchart และ แสดงข้อมูลผ่านแผนที่ประเทศไทย`,
    project: DCP,
  },
  {
    name: "Other Projects",
    detail: `Here are some other projects I've mostly been involved in, primarily revolving around dashboards that analyze backend data and display it on the frontend, categorized by company:

    1. DA - People Counting or Tookdee Website: This project focuses on displaying data through dashboards and reports.
    
    2 Softnix - Railway Project: Implemented using WordPress, this project involves displaying and managing data with Data Stewards, web design using Adobe XD, and collaborating on redesigning the company's product related to dashboard analysis.
    
    3. 2Bsimple - Involves CSS refinement and beginning to learn Angular/React frameworks.`,
    // detail: `โปรเจคอื่นๆส่วนใหญ่เป็นเกี่ยวกับ Dashboard ที่ได้ทำการ analyze มาจาก backend หลังจากนั้นนำมาแสดงผลฝั่งของ frontend ตัวอย่างแยกตามบริษัท \n
    // 1 : DA - People Counting หรือ Tookdee Website เป็นโปรเจคแสดงผลผ่าน Dashboard และ Report \n
    // 2 : Softnix - โปรเจคการรถไฟเป็นโปรเจคที่ทำด้วย wordpress มีการแสดงข้อมูลและการกรอกข้อมูล Data Stewards, ออกแบบหน้าเว็บไซต์โดยใช้ Adobe XD และมีการช่วยกันออกแบบ redesign product ของบริษัทซึ่งเป็น product เกี่ยวกับการ analyze dashboard \n
    // 3 : 2Bsimple - ที่นี้จะเป็นการแก้ css และเริ่มเรียนรู้ angular/ react`,
    project: [],
  },
  // {
  //   name: "Career Path Project (Mobile Developer)",
  //   detail:'ตัวอย่าง project ทีเริ่มทำพร้อมกับศึกษาไปเรื่อยๆ',
  //   project:[
  //     {
  //       name: "SwiftUI ",
  //       first_image: "/images/example/swiftui-image.gif",
  //       second_image: "/images/example/swiftui.png",
  //     },
  //   ]
  // }
];
