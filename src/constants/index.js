import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";
 import javascript from '../image/javascript.png'
 import tailwind from '../image/tailwind.png'
 import react from '../image/react-native.png'
 import sass from '../image/sass.png'
 import next from '../image/nextjs.svg'
export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  // {
  //   id: "2",
  //   title: "How to use",
  //   url: "#how-to-use",
  // },
  {
    id: "3",
    title: "New User",
    url: "#roadmap",
  },
  // {
  //   id: "4",
  //   title: "New account",
  //   url: "#signup",
  //   onlyMobile: true,
  // },
  // {
  //   id: "5",
  //   title: "Sign in",
  //   url: "#login",
  //   onlyMobile: true,
  // },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [ javascript, tailwind, next, react, sass];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "AI Integration",
    text: "Ai integrations are under process for websites.Leading to better user experience and better conversion rate.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Game theme websites",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with your website.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to integrate the chatbots in their website, making it more easier for the user to interact.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Completely Dynamic websites for lightning fast reload time and awesome experience",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Streamline your workflow and boost productivity with Webolitics. Our smart automation and robust security make us the perfect choice for teams seeking efficiency";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic Landing Page",
    description: "Along with one year hosting and domain",
    price: "70",
    features: [
      "Best option for just creating an Online presence",
      "SEO optimized websites for better traffic",
      "Along with mobile friendly designs.",
    ],
  },
  {
    id: "1",
    title: "Premium Website",
    description: "Pricing starts from just",
    price: "150",
    features: [
      "Enhanced and Robust security from cyberattacks",
      "Long-term investment and better user experience",
      "Any one premium feature of your choice",
    ],
  },
  {
    id: "2",
    title: "Enterprise Software",
    description: "Fully customised software as per your needs",
    price: null,
    features: [
      "Infinite customization options",
      "24/7 technical team support",
      "Scalability-grows with the business.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Tailored Web Solutions",
    text: "We design and develop websites that align perfectly with your unique business goals and target audience.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Cutting-Edge Technology",
    text: "We stay up-to-date with the latest web technologies and trends to deliver modern, efficient websites.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Expert Team",
    text: "Our skilled team of web developers, designers, and digital marketers brings years of experience to every project.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "SEO Optimization",
    text: "We prioritize search engine optimization (SEO) to improve your website's visibility and attract more organic traffic.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Affordable Pricing",
    text: "We offer competitive pricing without compromising on quality.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Exceptional Customer Service",
    text: "We're dedicated to providing top-notch customer support throughout the entire project lifecycle.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
