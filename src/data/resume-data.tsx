import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import headshot from "@/images/headshot.jpg";

export const RESUME_DATA = {
  name: "Hamad Marhoon",
  initials: "HM",
  location: "Tucson, Arizona, MST",
  locationLink: "https://www.google.com/maps/place/Tucson",
  about: "I like building things",
  summary:
    "I am passionate about building software that solves problems and makes our lives easier.",
  avatarUrl: headshot,
  personalWebsiteUrl: "https://hamadmarhoon.com/",
  contact: {
    email: "marhoon@arizona.edu",
    tel: "+15209108834",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/hamadmarhoon",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/hamad-marhoon",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/hamadmarhoon_",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "University of Arizona",
      degree:
        "Bachelor of Science in Computer Science + Bachelor of Arts in Philosophy",
      start: "Aug 2020",
      end: "May 2024",
    },
  ],
  work: [
    {
      company: "Center for Digital Humanities",
      link: "https://digitalhumanities.arizona.edu/",
      title: "Lead Developer",
      start: "May 2022",
      badges: [],
      end: "May 2024",
      description:
        "I led a team of developers at the Center for Digital Humanities to create web applications. We utilized React, Next.js, and Firebase to develop user-friendly platforms for various cultural and academic entities.",
    },
    {
      company: "University of Arizona Housing and Residential Life",
      link: "https://housing.arizona.edu/",
      badges: [],
      title: "Resident Assistant",
      start: "Aug 2022",
      end: "May 2024",
      description:
        "I oversaw a floor of 24 students in the Arizona-Sonora dorm. I created an environment conducive to academic and social growth within my residents, serving as a resource for them to succeed in their first year of college.",
    },
  ],
  skills: [
    "TypeScript",
    "Python",
    "Java",
    "C",
    "React/Next.js",
    "React Native",
    "Firebase",
  ],
  projects: [
    {
      title: "Chicana Borderlands Voices",
      techStack: ["Developer", "React", "TypeScript", "Firebase"],
      description:
        "Mapping important figures in the political involvement of women in Texas/Arizona.",
      link: {
        label: "https://chicanaborderlandsvoices.vercel.app/",
        href: "https://chicanaborderlandsvoices.vercel.app/",
      },
    },

    {
      title: "Music & Health Story Lab",
      techStack: ["Lead Developer", "JavaScript", "React", "Firebase"],
      description:
        "A website for creating and sharing stories related to health and wellness",
      link: {
        label: "music-health-lab.web.app/",
        href: "https://music-health-lab.web.app/",
      },
    },
    {
      title: "Ancient-Modern",
      techStack: ["Lead Developer", "React", "JavaScript"],
      description: "Digitized museum exhibit for the Arizona State Museum",
      link: {
        label: "ancient-to-modern.arizona.edu",
        href: "https://ancient-to-modern.arizona.edu",
      },
    },
    {
      title: "Discovering Community",
      techStack: ["Lead Developer", "React", "Firebase", "JavaScript"],
      description:
        "A website for exploring Southern Arizona communities with AR",
      link: {
        label: "dcb.arizona.edu",
        href: "https://dcb.arizona.edu/",
      },
    },
    {
      title: "X Tank",
      techStack: ["Side Project", "Java"],
      description: "Multiplayer tank fighting game ",
      link: {
        label: "github.com",
        href: "https://github.com/hamadmarhoon/X_Tank",
      },
    },
    {
      title: "Digital Black Religion",
      techStack: ["Lead Developer", "React", "JavaScript"],
      description:
        "A website for exploring the countours of Black religion in the digital era",
      link: {
        label: "digitalblackreligion.web.app",
        href: "https://digitalblackreligion.web.app",
      },
    },
  ],
} as const;
