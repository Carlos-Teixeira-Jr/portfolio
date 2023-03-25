import React, { useEffect, useState } from "react"
import HtmlIcon from "./icons/htmlIcon"
import CssIcon from "./icons/cssIcon"
import JavascriptIcon from "./icons/javascriptIcon"
import ReactIcon from "./icons/reactIcin"
import NextIcon from "./icons/nextIcon"
import TailwindIcon from "./icons/tailwindIcon"
import BootstrapIcon from "./icons/bootstrapIcon"
import GithubIconBetter from "./icons/githubIconReal"
import NodeIcon from "./icons/nodeIcon"
import MongoIcon from "./icons/mongoIcon"
import NestIcon from "./icons/nestIcon"
import VsCodeIcon from "./icons/vsCodeIcon"
import GitlabIcon from "./icons/gitlabIcon"
import MySqlIcon from "./icons/mySqlIcon"


const TechStack: React.FC = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 640);
    }

    handleResize(); // inicializa o estado com o tamanho da tela atual
    window.addEventListener("resize", handleResize); // adiciona um listener para quando a tela for redimensionada

    return () => {
      window.removeEventListener("resize", handleResize); // remove o listener quando o componente é desmontado
    };
  }, []);

  return (
    <div className="mt-20">
      <h1 className="text-4xl font-bold leading-2 text-center my-5">My Tech Stack</h1>
      <p className="md:text-2xl text-xl font-normal leading-2 text-center m-5">Technologies I&apos;ve working with recently</p>

      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="w-[120px] h-[120px]">
            <HtmlIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px] ">
            <CssIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <JavascriptIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <ReactIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <NextIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <TailwindIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <BootstrapIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8 mt-[50px]' : ''}`}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[120px] h-[120px]">
            <NodeIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <MongoIcon
              className={`mt-8 mx-auto flex ${isMobile ? 'w-8 mt-3' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <NestIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8 mt-4' : ''}`}
            />
          </div>
          {!isMobile && (
            <div className="w-[120px] h-[120px]">
              <VsCodeIcon
                className={`mt-8 mx-auto ${isMobile ? 'w-8' : ''}`}
              />
            </div>
          )}
          
          <div className="md:w-[120px] md:h-[120px]">
            <GitlabIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8 mt-2' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <MySqlIcon
              className={`mt-8 mx-auto ${isMobile ? 'w-8 mt-9' : ''}`}
            />
          </div>
          <div className="w-[120px] h-[120px]">
            <GithubIconBetter
              className={`mt-8 mx-auto ${isMobile ? 'w-8' : ''}`}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack