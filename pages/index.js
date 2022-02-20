import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import fetch from "node-fetch";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const FeaturedProjects = dynamic(() => import("../containers/Featured"));
const GithubRepos = dynamic(() => import("../containers/Github"));
const TeamTritanRepos = dynamic(() => import("../containers/TeamTritanRepos"));
const GithubProfileCard = dynamic(() => import("../components/Footer"));
import { openSource } from "..";
import SEO from "../components/SEO";

export default function Home({
  githubProfileData,
  githubRepoData,
  teamTritanRepos,
}) {
  return (
    <div>
      <SEO
        data={{
          title: "Dylan J - Full Stack Developer",
          description: "A passionate Full Stack Web Developer.",
          image: "https://tritan.gg/assets/images/devs/dylan.webp",
          url: "https://dylan.is-a.dev",
          keywords: [
            "dylan j",
            "dylan james",
            "full stack developer",
            "tritan bot",
          ],
        }}
      />
      <Navigation />
      <Greetings />
      <Skills />
      <FeaturedProjects />
      <Proficiency />

      <GithubRepos repos={githubRepoData} />
      <GithubProfileCard prof={githubProfileData} />
    </div>
  );
}

Home.prototype = {
  githubProfileData: PropTypes.object.isRequired,
};

export async function getServerSideProps() {
  const githubProfileData = await fetch(
    `https://api.github.com/users/dylanjamesdev`
  )
    .catch(console.error)
    .then((res) => res.json());

  const githubRepoData = await fetch(
    `https://api.github.com/users/dylanjamesdev/repos?per_page=100`
  )
    .catch(console.error)
    .then((res) => res.json());

  return {
    props: { githubProfileData, githubRepoData },
  };
}
