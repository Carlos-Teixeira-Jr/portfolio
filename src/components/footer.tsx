import { Element } from "react-scroll";
import GithubIcon from "./icons/githubIcon"
import LinkedinIcon from "./icons/linkedInIcon"
import MessageIcon from "./icons/messageIcon";
import { Link} from "react-scroll";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export interface IFooter {
  selectedLanguage: string,
}

const Footer: React.FC<IFooter> = ({selectedLanguage}) =>{

  const [language, setLanguage] = useState(selectedLanguage);
  const { t } = useTranslation();

  function handleClickHome() {
    // Quando o usuário clicar no botão, role de volta para o topo da página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="flex flex-col">
      <Element name="contact">
        <div className="lg:flex justify-center my-10 lg:mx-[180px]">
          <h1 className="mx-5 whitespace-nowrap font-stylish text-4xl font-bold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text flex justify-center">{"{Carlos | Teixeira}"}</h1>
          <div className="lg:flex my-auto">
            <p className="text-[#CCCCCC] whitespace-nowrap mx-6 flex justify-center text-lg my-5 lg:my-0">55 (53) 99166-4864</p>
            <p className="text-[#CCCCCC] mx-6 flex justify-center text-lg my-5 lg:my-0">teixeirahist1988@gmail.com</p>
          </div>
          <div className="flex justify-center my-5 lg:my-0">
            <div className="text-[#CCCCCC] mx-5">
              <a href="https://github.com/Carlos-Teixeira-Jr" target="_blank">
                <GithubIcon/>
              </a>
            </div>
            <div className="text-[#CCCCCC] mx-5">
              <a href="mailto:teixeirahist1988@gmail.com" target="_blank">
                <MessageIcon/>
              </a>
            </div>
            <div className="text-[#CCCCCC] mx-5">
              <a href="https://www.linkedin.com/in/carlos-teixeira-000b7b1a0/" target="_blank">
                <LinkedinIcon/>
              </a>
            </div>
          </div>
        </div>
        <hr className="border-[#CCCCCC] border-solid border-1 my-5 mb-20 flex justify-center mx-auto w-1/2"/>
        <div className="lg:flex lg:justify-evenly justify-around">
          <div className="md:flex justify-evenly lg:w-2/6 w-2/6 md:w-full mb-16 lg:ml-[180px]">
            <Link to="home" smooth={true} duration={500}>
              <button className="text-[#CCCCCC] mx-6 text-lg" onClick={handleClickHome}>{t("translation.footer.home")}</button>
            </Link>
            <Link to="about" smooth={true} duration={500}>
              <button className="text-[#CCCCCC] mx-6 text-lg" onClick={handleClickHome}>{t("translation.footer.about")}</button>
            </Link>
            <Link to="tech-stack" smooth={true} duration={500}>
              <button className="text-[#CCCCCC] mx-6 text-lg" onClick={handleClickHome}>{t("translation.navbar.techstack")}</button>
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-[#CCCCCC] mx-6 text-lg" onClick={handleClickHome}>{t("translation.navbar.projects")}</button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button className="text-[#CCCCCC] mx-6 text-lg" onClick={handleClickHome}>{t("translation.navbar.contacts")}</button>
            </Link>
          </div>
          <div className="flex justify-center md:just">
            <p className="flex">{t("translation.footer.builtBy")}<a className="text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text ml-1 text-xl font-semibold leading-6">Carlos Teixeira</a></p>
          </div>
        </div>
      </Element>
    </div>
    
  )
}

export default Footer