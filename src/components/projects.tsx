import Image from "next/image"
import React from "react"
import GithubIconBetter from "./icons/githubIconReal"
import Link from "next/link"
import LinkIcon from "./icons/linkIcons"


const Projects: React.FC = () => {
  return (
    <div className="md:my-40 my-14">
      <h1 className="text-4xl font-bold leading-2 text-center my-5">Projects</h1>
      <p className="text-2xl font-normal leading-2 text-center m-5 mb-10">Some apps that I&apos;ve built so far</p>

      <div className="md:flex md:flex-wrap lg:flex-nowrap justify-center gap-5">
        <div className="mx-5 my-5 md:my-0 flex flex-col">
          <div className="h-[235px]">
            <Image 
              src={"/images/coffee-connoisseur.png "} 
              alt={""}
              width={375}
              height={260}
              className="rounded-t-[30px]"
            />
          </div>
          <div className="max-w-[375px] h-[307px] p-5 bg-[#363636] rounded-b-[30px]">
            <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">Coffee Connoisseur</h2>
            <p className="text-center mb-3 text-lg font-light leading-6">App de busca por cafeterias mais próximas do usuário por meio do consumo da API do Foursquare com integração à um banco de dados para avaliar, votar e favoritar as cafeterias.</p>
            <p className="text-center text-sm">Stack: Next.js, Javascript, CSS, React</p>
            <div className="lg:mt-12 mt-12">
              <div className="flex justify-center">
                <div className="flex mx-2">
                  <a 
                    href="https://github.com/Carlos-Teixeira-Jr/discover-coffee-stores2" 
                    className="flex" 
                    target="_blank"
                  >
                    <GithubIconBetter
                      width="25"
                      height="25"
                    />
                    <p className="text-center text-sm mx-2 my-auto hover:underline">View Code</p>
                  </a>
                </div>

                <div className="flex mx-2">
                  <a 
                    href="https://discover-coffee-stores2.vercel.app/" 
                    className="flex my-auto" 
                    target="_blank"
                  >
                    <LinkIcon
                      width="35"
                      height="35"
                      viewBox="0 130 960 960"
                      className="my-auto"
                    />
                    <p className="text-center text-sm mx-2 my-auto hover:underline">Live Preview</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 my-5 md:my-0 flex flex-col justify-center items-center">
          <div className="">
            <Image 
              src={"/images/netflix-clone.png"} 
              alt={""}
              width={375}
              height={260}
              className="rounded-t-[30px]"
            />
          </div>
          <div className="max-w-[375px] p-5 bg-[#363636] rounded-b-[30px]">
            <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">Netflix Clone</h2>
            <p className="text-center mb-3 text-lg font-light leading-6">Aplicação simples clonando algumas funcionalidades básicas do Netflex. Vídeos requisitados à API do YouTube, sistema de login sem senha, integração com um banco de dados online que permite favoritar vídeos.</p>
            <p className="text-center text-sm">Stack: Next.js, Javascript, CSS, React</p>
            <div className="mt-5">
              <div className="flex justify-center">
                <Link href={""} className="my-auto">
                  <div className="flex mx-2">
                    <GithubIconBetter
                      width="25"
                      height="25"
                    />
                    <p className="text-center text-sm mx-2 my-auto hover:underline">View Code</p>
                  </div>
                </Link>

                {/* <Link href={""}>
                  <div className="flex mx-2">
                    <LinkIcon
                      width="35"
                      height="35"
                      viewBox="0 130 960 960"
                      className="my-auto"
                    />
                    <p className="text-center text-sm mx-2 my-auto hover:underline">Live Preview</p>
                  </div>
                </Link> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-5 flex flex-col">
          <div className="h-[235px]">
            <Image 
              src={"/images/robofriends.png "} 
              alt={""}
              width={375}
              height={260}
              className="rounded-t-[30px] h-full"
            />
          </div>
          <div className="max-w-[375px] h-[307px] p-5 bg-[#363636] rounded-b-[30px]">
            <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">Robofriends</h2>
            <p className="text-center mb-3 text-lg font-light leading-6">Aplicação simples para exercitar as funcionalidades dos Hooks do React.</p>
            <p className="text-center text-sm">Stack: Javascript, CSS, React</p>
            <div className="mt-5 items-baseline">
              <div className="flex justify-center lg:mt-[118px] mt-[120px]">
                <div className="flex mx-2">
                  <a 
                    href="https://github.com/Carlos-Teixeira-Jr/robofriends" 
                    className="flex" 
                    target="_blank"
                  >
                    <GithubIconBetter
                      width="25"
                      height="25"
                    />
                    <p className="text-center text-sm mx-2 my-auto hover:underline">View Code</p>
                  </a>
                </div>

                <div className="flex mx-2">
                  <a 
                    href="https://carlos-teixeira-jr.github.io/robofriends/" 
                    className="flex my-auto" 
                    target="_blank"
                  >
                    <LinkIcon
                      width="35"
                      height="35"
                      viewBox="0 130 960 960"
                      className="my-auto"
                    />
                    <p className="text-center text-sm mx-2 my-auto hover:underline">Live Preview</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects