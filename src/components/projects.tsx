import Image from "next/image"
import React, { useEffect, useState } from "react"
import GithubIconBetter from "./icons/githubIconReal"
import Link from "next/link"
import LinkIcon from "./icons/linkIcons"
import { Element } from "react-scroll"
import { useTranslation } from "react-i18next"

export interface IProjects {
  selectedLanguage: string
}

const Projects: React.FC<IProjects> = ({selectedLanguage}) => {

  const [language, setLanguage] = useState(selectedLanguage);
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(selectedLanguage)
  }, [selectedLanguage])

  return (
    <div className="md:my-40 my-14">
      <Element name="projects">
        <h1 className="text-4xl font-bold leading-2 text-center my-5">{t('translation.projects.title')}</h1>
        <p className="text-2xl font-normal leading-2 text-center m-5 mb-10">{t('translation.projects.resume')}</p>

        <div className="md:flex md:flex-wrap lg:flex-wrap justify-center gap-5">
          <div className="mx-5 my-5 md:my-0 flex flex-col">
            <div className="h-[235px]">
              <Image 
                src={"/images/coffee-connoisseur.png"} 
                alt={""}
                width={375}
                height={260}
                className="rounded-t-[30px] h-full"
              />
            </div>
            <div className="max-w-[375px] lg:h-[307px] p-5 bg-[#363636] rounded-b-[30px]">
              <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">Coffee Connoisseur</h2>
              <p className="text-center mb-3 text-lg font-light leading-6">{t('translation.projects.coffeeConnoisseur')}</p>
              <p className="text-center text-sm">Stack: Next.js, Javascript, CSS, React</p>
              <div 
                className={`${
                  language === 'en' ?
                  'lg:mt-6 md:mt-12 mt-2' :
                  'lg:mt-3.5'
                }`}
              >
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
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.viewCode')}</p>
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
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.livePreview')}</p>
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
            <div className="max-w-[375px] lg:h-[307px] p-5 lg:mb-5 bg-[#363636] rounded-b-[30px]">
              <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">Netflix Clone</h2>
              <p className="text-center mb-3 text-lg font-light leading-6">{t('translation.projects.netflixClone')}</p>
              <p className="text-center text-sm">Stack: Next.js, Javascript, CSS, React</p>
              <div 
                className={`${
                  language === 'en' ?
                  'mt-5 lg:mt-8' :
                  'lg:mt-3'
                }`}
              >
                <div className="flex justify-center">
                  <Link href={""} className="my-auto">
                    <div className="flex mx-2">
                      <GithubIconBetter
                        width="25"
                        height="25"
                      />
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.viewCode')}</p>
                    </div>
                  </Link>

                  <Link href={""}>
                    <div className="flex mx-2">
                      <LinkIcon
                        width="35"
                        height="35"
                        viewBox="0 130 960 960"
                        className="my-auto"
                      />
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.livePreview')}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-5 flex flex-col mb-5">
            <div className="h-[235px]">
              <Image 
                src={"/images/robofriends.png"} 
                alt={""}
                width={375}
                height={260}
                className="rounded-t-[30px] h-full"
              />
            </div>
            <div className="max-w-[375px] h-[307px] p-5 bg-[#363636] rounded-b-[30px]">
              <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">Robofriends</h2>
              <p className="text-center mb-3 text-lg font-light leading-6">{t('translation.projects.roboFriends')}</p>
              <p className="text-center text-sm">Stack: Javascript, CSS, React</p>
              <div className="mt-5 items-baseline">
                <div 
                  className={`flex justify-center ${
                    language === 'en' ?
                    'lg:mt-[118px] md:mt-[120px] mt-[120px]' :
                    'lg:mt-[133px] md:mt-[120px] mt-[120px]'
                  }`}
                >
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
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.viewCode')}</p>
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
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.livePreview')}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-5 flex flex-col mb-5">
            <div className="h-[235px]">
              <Image 
                src={"/images/quotes-carroussel.png"} 
                alt={""}
                width={375}
                height={260}
                className="rounded-t-[30px] h-full"
              />
            </div>
            <div className="max-w-[375px] h-[307px] p-5 bg-[#363636] rounded-b-[30px]">
              <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">Quotes Carroussel</h2>
              <p className="text-center mb-3 text-lg font-light leading-6">{t('translation.projects.quotesCarroussel')}</p>
              <p className="text-center text-sm">Stack: Javascript, bootstrap.</p>
              <div className="mt-5 items-baseline">
                {/* <div className="flex justify-center lg:mt-[55px] md:mt-[55px] mt-[55px]"> */}
                <div 
                  className={`flex justify-center ${
                    language === 'en' ?
                    'lg:mt-[55px] md:mt-[55px] mt-[55px]' :
                    'lg:mt-[px] md:mt-[55px] mt-[55px]'
                  }`}
                >
                  <div className="flex mx-2">
                    <a 
                      href="https://github.com/Carlos-Teixeira-Jr/carrossel-de-citacoes" 
                      className="flex" 
                      target="_blank"
                    >
                      <GithubIconBetter
                        width="25"
                        height="25"
                      />
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.viewCode')}</p>
                    </a>
                  </div>

                  <div className="flex mx-2">
                    <a 
                      href="https://carrossel-de-citacoes-ekji.vercel.app/" 
                      className="flex my-auto" 
                      target="_blank"
                    >
                      <LinkIcon
                        width="35"
                        height="35"
                        viewBox="0 130 960 960"
                        className="my-auto"
                      />
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.livePreview')}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-5 flex flex-col">
            <div className="h-[235px]">
              <Image 
                src={"/images/airbns.png"} 
                alt={""}
                width={375}
                height={260}
                className="rounded-t-[30px] h-full"
              />
            </div>
            <div className="max-w-[375px] h-[307px] p-5 bg-[#363636] rounded-b-[30px]">
              <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">AirBnb Clone</h2>
              <p className="text-center mb-3 text-lg font-light leading-6">{t('translation.projects.airBnbClone')}</p>
              <p className="text-center text-sm">Stack: Javascript, Tailwind, Next.js, React</p>
              <div className="mt-5 items-baseline">
                <div 
                  className={`flex justify-center ${
                    language === 'en' ?
                    'lg:mt-[55px] md:mt-[50px] mt-[55px]' :
                    'lg:mt-[35px] md:mt-[50px] mt-[35px]'
                  }`}
                >
                  <div className="flex mx-2">
                    <a 
                      href="https://github.com/Carlos-Teixeira-Jr/airbnb-style-clone" 
                      className="flex" 
                      target="_blank"
                    >
                      <GithubIconBetter
                        width="25"
                        height="25"
                      />
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.viewCode')}</p>
                    </a>
                  </div>

                  <div className="flex mx-2">
                    <a 
                      href="https://airbnb-style-clone.vercel.app/" 
                      className="flex my-auto" 
                      target="_blank"
                    >
                      <LinkIcon
                        width="35"
                        height="35"
                        viewBox="0 130 960 960"
                        className="my-auto"
                      />
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.livePreview')}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-5 flex flex-col mt-5 lg:mt-0">
            <div className="h-[235px]">
              <Image 
                src={"/images/pokedex.png"} 
                alt={""}
                width={375}
                height={260}
                className="rounded-t-[30px] h-full"
              />
            </div>
            <div className="max-w-[375px] h-[307px] p-5 bg-[#363636] rounded-b-[30px]">
              <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">Pokedéx</h2>
              <p className="text-center mb-3 text-lg font-light leading-6">{t('translation.projects.pokedex')}</p>
              <p className="text-center text-sm">Stack: Javascript, Vue.js, Bulma</p>
              <div className="mt-5 items-baseline">
                {/* <div className="flex justify-center lg:mt-[102px] md:mt-[90px] mt-[75px]"> */}
                <div 
                  className={`flex justify-center ${
                    language === 'en' ?
                    'lg:mt-[102px] md:mt-[90px] mt-[100px]' :
                    'lg:mt-[102px] md:mt-[90px] mt-[75px]'
                  }`}
                >
                  <div className="flex mx-2">
                    <a 
                      href="https://github.com/Carlos-Teixeira-Jr/pokedex" 
                      className="flex" 
                      target="_blank"
                    >
                      <GithubIconBetter
                        width="25"
                        height="25"
                      />
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.viewCode')}</p>
                    </a>
                  </div>

                  <div className="flex mx-2">
                    <a 
                      href="https://pokedex-eight-lemon.vercel.app/" 
                      className="flex my-auto" 
                      target="_blank"
                    >
                      <LinkIcon
                        width="35"
                        height="35"
                        viewBox="0 130 960 960"
                        className="my-auto"
                      />
                      <p className="text-center text-sm mx-2 my-auto hover:underline">{t('translation.projects.livePreview')}</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>
    </div>
  )
}

export default Projects