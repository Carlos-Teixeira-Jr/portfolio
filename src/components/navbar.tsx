import { MouseEvent, useEffect, useState } from "react";
import GithubIcon from "./icons/githubIcon"
import LinkedinIcon from "./icons/linkedInIcon"
import HamburguerMenuIcon from "./icons/hamburguerMenuIcon";
import MessageIcon from "./icons/messageIcon";
import { Link } from "react-scroll";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export interface INavbar {
  selectedLanguage: (language: string) => void;
}

const Navbar = ({selectedLanguage}: INavbar) => {

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [menuIsOpen, setMenusIsOpen] = useState(false);
  const [language, setLanguage] = useState('ptbr');
  const { t } = useTranslation();

  useEffect(() => {
    selectedLanguage(language)
  }, [language]);
  
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
      setIsTablet(window.innerWidth <= 900);
    }

    handleResize(); // inicializa o estado com o tamanho da tela atual
    window.addEventListener("resize", handleResize); // adiciona um listener para quando a tela for redimensionada

    return () => {
      window.removeEventListener("resize", handleResize); // remove o listener quando o componente é desmontado
    };
  }, []);

  const handleOpenMenu = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setMenusIsOpen(!menuIsOpen)
  }

  return (
    <div className="lg:flex md:justify-between my-5 lg:my-5 lg:mx-[180px]">
      {!isMobile ? (
        <>
          <h1 className="mx-5 font-stylish text-4xl font-bold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text">{"{Carlos | Teixeira}"}</h1>
          <div className="flex justify-evenly lg:w-2/6 sm:my-3 lg:my-auto">
            <Link to="tech-stack" smooth={true} duration={500}>
              <button className="text-[#CCCCCC] mx-6 text-lg mb-5">{t("translation.navbar.techstack")}</button>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-[#CCCCCC] mx-6 text-lg mb-5" >{t("translation.navbar.projects")}</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="text-[#CCCCCC] mx-6 text-lg mb-5" >{t("translation.navbar.contacts")}</button>
            </Link>
          </div>
          {!isTablet && (
            <>
              <div className="flex">
                <div className="text-[#CCCCCC] mx-5">
                  <a href="https://github.com/Carlos-Teixeira-Jr" target="_blank">
                    <GithubIcon />
                  </a>
                </div>
                <div className="text-[#CCCCCC] mx-5">
                  <a href="mailto:teixeirahist1988@gmail.com" target="_blank">
                    <MessageIcon/>
                  </a>
                </div>
                <div className="text-[#CCCCCC] mx-5">
                  <a href="https://www.linkedin.com/in/carlos-teixeira-000b7b1a0/" target="_blank">
                    <LinkedinIcon />
                  </a>
                </div>
              </div>
              <div className="flex gap-2">
                <Image 
                  src={"/images/languages/united-states.png"} 
                  alt={""}
                  width={50}
                  height={50}
                  className="cursor-pointer"
                  onClick={() => {
                    setLanguage('en');
                    i18n.changeLanguage('en')
                  }}
                />
                <Image 
                  src={"/images/languages/brazil.png"} 
                  alt={""}
                  width={50}
                  height={50}
                  className="cursor-pointer"
                  onClick={() => {
                    setLanguage('ptbr');
                    i18n.changeLanguage('ptbr')
                  }}
                />
              </div>
            </>
          )}
          
        </>
      ) : (
        <>
          <div className="w-full">
            <div className="flex w-full justify-between">
              <h1 className="mx-5 font-stylish text-3xl font-bold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text">{"{Carlos | Teixeira}"}</h1>
              <div className="mx-5 my-[-5px]">
                <button onClick={handleOpenMenu}>
                  <HamburguerMenuIcon />
                </button>
              </div>
            </div>

            {menuIsOpen && (
              <div className="flex flex-col float-right bg-white bg-opacity-70 shadow-lg backdrop-filter rounded-l-lg border border-opacity-25 border-white absolute z-50 right-0">
                <Link to="tech-stack" smooth={true} duration={500}>
                  <button className="text-[#191919] mx-6 text-2xl font-semibold  mb-5 mt-5">{t("translation.navbar.techstack")}</button>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                  <button className="text-[#191919] mx-6 text-2xl font-semibold  mb-5 mt-5">{t("translation.navbar.projects")}</button>
                </Link>
                <Link to="contact" smooth={true} duration={500}>
                  <button className="text-[#191919] mx-6 text-2xl font-semibold  mb-5 mt-5">{t("translation.navbar.contacts")}</button>
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar