import { MouseEvent, useEffect, useState } from "react";
import GithubIcon from "./icons/githubIcon"
import LinkedinIcon from "./icons/linkedInIcon"
import TwitterIcon from "./icons/twitterIcon"
import HamburguerMenuIcon from "./icons/hamburguerMenuIcon";


const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [menuIsOpen, setMenusIsOpen] = useState(false);

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

  function handleClickTechStack() {
    // Quando o usuário clicar no botão, role de volta para o topo da página
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  }

  function handleClickProjects() {
    // Quando o usuário clicar no botão, role de volta para o topo da página
    window.scrollTo({
      top: 1300,
      behavior: "smooth",
    });
  }

  function handleClickContacts() {
    // Quando o usuário clicar no botão, role de volta para o topo da página
    window.scrollTo({
      top: 5000,
      behavior: "smooth",
    });
  }

  return (
    <div className="lg:flex md:justify-between my-5 lg:my-10 lg:mx-[180px]">
      {!isMobile ? (
        <>
          <h1 className="mx-5 font-stylish text-4xl font-bold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text">{"{Carlos | Teixeira}"}</h1>
          <div className="flex justify-evenly lg:w-2/6 sm:my-3 lg:my-0">
            <button className="text-[#CCCCCC] mx-6 text-lg mb-5" onClick={handleClickTechStack}>TechStack</button>
            <button className="text-[#CCCCCC] mx-6 text-lg mb-5" onClick={handleClickProjects}>Projects</button>
            <button className="text-[#CCCCCC] mx-6 text-lg mb-5" onClick={handleClickContacts}>Contact</button>
          </div>
          {!isTablet && (
            <div className="flex">
              <div className="text-[#CCCCCC] mx-5">
                <GithubIcon />
              </div>
              <div className="text-[#CCCCCC] mx-5">
                <TwitterIcon />
              </div>
              <div className="text-[#CCCCCC] mx-5">
                <LinkedinIcon />
              </div>
            </div>
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
              <div className="flex flex-col float-right bg-white bg-opacity-25 shadow-lg backdrop-filter rounded-lg border border-opacity-25 border-white">
                <button className="text-[#CCCCCC] mx-6 text-2xl mb-5">Home</button>
                <button className="text-[#CCCCCC] mx-6 text-2xl  mb-5">About</button>
                <button className="text-[#CCCCCC] mx-6 text-2xl  mb-5">TechStack</button>
                <button className="text-[#CCCCCC] mx-6 text-2xl  mb-5">Projects</button>
                <button className="text-[#CCCCCC] mx-6 text-2xl  mb-5">Contact</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}

export default Navbar