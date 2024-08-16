import Image from "next/image";
import React, { useEffect, useState } from "react";
import GithubIconBetter from "./icons/githubIconReal";
import Link from "next/link";
import LinkIcon from "./icons/linkIcons";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

export interface IProjects {
  selectedLanguage: string;
}

const Projects: React.FC<IProjects> = ({ selectedLanguage }) => {
  const [language, setLanguage] = useState(selectedLanguage);
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const cards = [
    {
      key: "fasteng",
      src: "/images/fasteng.png",
      title: "Fasteng",
      resume: t("translation.projects.fasteng"),
      stack: "Next.js, Nestjs, MongoDB, MaterialUI",
      githubLink: "https://github.com/Fastengapp",
      previewLink: "https://smartdoser.fastengapp.com.br/entrar",
      alt: "Preview project card",
    },
    {
      key: "locale",
      src: "/images/locale.png",
      title: "Locale Imóveis",
      resume: t("translation.projects.locale"),
      stack: "Next.js, Nestjs, MongoDB, Tailwind CSS",
      githubLink: "https://github.com/Carlos-Teixeira-Jr/locale-backend-cln",
      previewLink: "https://www.localeimoveis.com",
      alt: "Preview project card",
    },
    {
      key: "UnderAppz",
      src: "/images/underappz.png",
      title: "UnderAppz",
      resume: t("translation.projects.underappz"),
      stack: "Next.js, Nestjs, MongoDB, Tailwind CSS",
      githubLink: "https://github.com/Carlos-Teixeira-Jr/underappz-backend",
      previewLink: "https://underappz.vercel.app/",
      alt: "Preview project card",
    },
    {
      key: "Coffee Connoisseur",
      src: "/images/coffee-connoisseur.png",
      title: "Coffee Connoisseur",
      resume: t("translation.projects.coffeeConnoisseur"),
      stack: "Next.js, Javascript, CSS, React",
      githubLink:
        "https://github.com/Carlos-Teixeira-Jr/discover-coffee-stores2",
      previewLink: "https://discover-coffee-stores2.vercel.app/",
      alt: "Preview project card",
    },
    {
      key: "Netflix Clone",
      src: "/images/netflix-clone.png",
      title: "Netflix Clone",
      resume: t("translation.projects.netflixClone"),
      stack: "Next.js, Javascript, CSS, React",
      githubLink: "https://github.com/Carlos-Teixeira-Jr/netflix-clone",
      previewLink: "https://netflix-clone-nu-mocha.vercel.app/",
      alt: "Preview project card",
    },
    {
      key: "AirBnb Clone",
      src: "/images/airbns.png",
      title: "AirBnb Clone",
      resume: t("translation.projects.airBnbClone"),
      stack: "Javascript, Tailwind, Next.js, React",
      githubLink: "https://github.com/Carlos-Teixeira-Jr/airbnb-style-clone",
      previewLink: "https://airbnb-style-clone.vercel.app/",
      alt: "Preview project card",
    },
    {
      key: "Quotes Carroussel",
      src: "/images/quotes-carroussel.png",
      title: "Quotes Carroussel",
      resume: t("translation.projects.quotesCarroussel"),
      stack: "Javascript, Next.js, tailwind CSS",
      githubLink: "https://github.com/Carlos-Teixeira-Jr/next-quote-carousel",
      previewLink: "https://next-quote-carousel.vercel.app/",
      alt: "Preview project card",
    },
    {
      key: "Pokedéx",
      src: "/images/pokedex.png",
      title: "Pokedéx",
      resume: t("translation.projects.pokedex"),
      stack: "Javascript, Vue.js, Bulma",
      githubLink: "https://github.com/Carlos-Teixeira-Jr/pokedex",
      previewLink: "https://pokedex-eight-lemon.vercel.app/",
      alt: "Preview project card",
    },
    {
      key: "Robofriends",
      src: "/images/robofriends.png",
      title: "Robofriends",
      resume: t("translation.projects.roboFriends"),
      stack: "Javascript, CSS, React",
      githubLink: "https://github.com/Carlos-Teixeira-Jr/robofriends",
      previewLink: "https://carlos-teixeira-jr.github.io/robofriends/",
      alt: "Preview project card",
    },
  ];

  return (
    <div className="md:my-40 my-14">
      <Element name="projects">
        <h1 className="text-4xl font-bold leading-2 text-center my-5">
          {t("translation.projects.title")}
        </h1>
        <p className="text-2xl font-normal leading-2 text-center m-5 mb-10">
          {t("translation.projects.resume")}
        </p>

        <div className="md:flex md:flex-wrap lg:flex-wrap justify-center gap-5">
          {cards.map((card) => (
            <div className="mx-5 my-5 md:my-0 flex flex-col" key={card.key}>
              <div className="h-fit">
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={375}
                  height={200}
                  className="rounded-t-[30px] h-fit w-fit object-cover"
                />
              </div>
              <div className="lg:w-[385px] lg:h-full flex flex-col justify-between p-5 bg-[#363636] rounded-b-[30px]">
                <div>
                  <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">
                    {card.title}
                  </h2>
                  <p className="text-center mb-3 text-md font-light leading-6">
                    {card.resume}
                  </p>
                </div>

                <div>
                  <p className="text-center text-sm">Stack: {card.stack}</p>
                  <div
                    className={`${
                      language === "en" ? "lg:mt-6 md:mt-12 mt-2" : "lg:mt-3.5"
                    }`}
                  >
                    <div className="flex justify-center">
                      <div className="flex mx-2">
                        <a
                          href={card.githubLink}
                          className="flex"
                          target="_blank"
                        >
                          <GithubIconBetter width="25" height="25" />
                          <p className="text-center text-sm mx-2 my-auto hover:underline">
                            {t("translation.projects.viewCode")}
                          </p>
                        </a>
                      </div>

                      <div className="flex mx-2">
                        <a
                          href={card.previewLink}
                          className="flex my-auto"
                          target="_blank"
                        >
                          <LinkIcon
                            width="35"
                            height="35"
                            viewBox="0 130 960 960"
                            className="my-auto"
                          />
                          <p className="text-center text-sm mx-2 my-auto hover:underline">
                            {t("translation.projects.livePreview")}
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Element>
    </div>
  );
};

export default Projects;
