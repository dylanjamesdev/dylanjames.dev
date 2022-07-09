import emoji from "react-easy-emoji";
/**
 * Static Data
 */
export const greetings = {
  name: `'Dylan James'`,
  title: "Welcome!",
  description:
    "I'm a hobbiest full-stack developer with experience in Node, Deno, Javascript, React, Fastify, Nuxt, Vue, and Express. I've always had a passion for learning and I'm always looking to improve my skills. I'm always looking for new challenges and opportunities to grow as a developer.",
};

export const openSource = {
  githubUserName: "dylanjamesdev",
};

export const socialLinks = {
  github: "https://github.com/dylanjamesdev",
  gitlab: "https://gitlab.com/dylanjames",
  discord: "https://discord.gg/n5GE82ShZA",
};

export const skillsSection = {
  title: "Skills",
  subTitle:
    "I'd like to think that I'm pretty proficient in the following frameworks and technologies.",
  skills: [
    emoji(
      "⚡ Developing web applications with React, Vue, Nuxt, Express, Fastify, Node, Deno, and more."
    ),
    emoji(
      "⚡ Integration of third party services such as Strip, Mail Servers, Docker, Json API's, etc."
    ),
    emoji(
      "⚡ Deploying applications to a cloud environment such as AWS, Digital Ocean, Heroku, Firebase, etc."
    ),
    emoji(
      "⚡ Specific knowledge with on premise development environments such as many variations of Linux, Windows, etc."
    ),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "express",
      fontAwesomeClassname: "logos:express",
    },
    {
      skillName: "fastify",
      fontAwesomeClassname: "logos:fastify",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend & Design",
    progressPercentage: "90",
  },
  {
    Stack: "Backend Development",
    progressPercentage: "80",
  },
  {
    Stack: "Freehand CSS",
    progressPercentage: "65",
  },
];

export const featuredProjects = [
  {
    role: "Owner",
    company: "Tritan Bot",
    link: "https://tritan.gg/",
    companylogo: "https://s3.wasabisys.com/team-tritan/tritan-bot/logo.webp",
    date: "2020 – Present",
    desc: "Tritan Bot is a multipurpose Discord bot developed in NodeJS that can be used for many things.",
    github: "https://github.com/dylanjamesdev/tritan-bot",
  },
  {
    role: "Co-Owner",
    company: "Serenity VPN",
    link: "https://serenityvpn.org",
    companylogo: "https://serenityvpn.org/img/logo.png",
    date: "2022 - 2022",
    desc: " Serenity VPN is a secure, private, safe, minimal logging VPN service that provides you free anonymous internet access.",
  },
  {
    role: "Frontend Developer",
    company: "Windy Pink",
    link: "https://windy.pink",
    companylogo:
      "https://media.discordapp.net/attachments/936747785557000283/943025414484426813/windy.png",
    date: "2020 - Present",
    desc: "Windy Pink is an image hosting service for Discord developed in React and Express.",
  },
];
