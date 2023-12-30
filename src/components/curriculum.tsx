import Image from "next/image"
import LinkedinIcon from "./icons/linkedInIcon"
import GithubIcon from "./icons/githubIcon"
import Link from "next/link";
import { Element } from "react-scroll";
import { t } from "i18next";

const Curriculum = () => {

  const experiences = [
    {
      key: 'locale',
      title: t("translation.resume.title"),
      company: 'LOCALE IMÒVEIS',
      date: `Nov 2022 - ${t("translation.resume.current")}`,
      description: t("translation.resume.locale")
    },
    {
      key: 'JBR',
      title: t("translation.resume.title"),
      company: 'JBR - UFCG',
      date: `Mai 2023 - ${t("translation.resume.current")}`,
      description: t("translation.resume.jbr")
    },
    {
      key: 'painter',
      title: t("translation.resume.painter"),
      company: 'Autônomo',
      date: 'Mar 2022 - Nov 2022',
      description: t("translation.resume.painter-desc")
    },
    {
      key: 'janitor',
      title: t("translation.resume.janitor"),
      company: 'Morada do Parque',
      date: 'Mar 2021 - Fev 2022',
      description: t("translation.resume.janitor-desc")
    },
    {
      key: 'multiserv',
      title: t("translation.resume.general-services"),
      company: 'Multiserv',
      date: 'Fev 2020 - Mar 2021',
      description: t("translation.resume.general-services-desc")
    },
    {
      key: 'sales',
      title: t("translation.resume.seller"),
      company: 'SÉCULO 21 ELETRÔNICOS',
      date: 'Mai 2018 - Dez 2020',
      description: t("translation.resume.seller-desc")
    },
  ];

  return (
    <div className="flex flex-col md:flex-row px-2 md:px-10 justify-between"> 
      <div className="md:w-1/2 h-fit pb-5 rounded-t-full rounded-b-full bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
        <div className="flex flex-col w-[90%] rounded-full overflow-hidden bg-black mt-5 mx-auto my-auto p-10 md:p-12">
          <div className="my-10">
            <hr/>
            <h1 className="text-3xl flex">
              Carlos
              <span className="font-extrabold bg-gradient-to-r text-transparent from-[#13B0F5] to-[#E70FAA] bg-clip-text">Teixeira</span>
            </h1>

            <h2 className="text-sm">{t("translation.resume.title")}</h2>
            <hr/>
          </div>
          <h3 className="text-2xl">{t('translation.resume.contact')}</h3>
          <div className="my-2">
            <p>teixeirahist1988@gmail.com</p>
            <p>+55 53 99177 5245</p>
            <p>Rio Grande do Sul, {t('translation.resume.nation')}</p>
          </div>
          <div className="my-2 flex justify-around">
            <Link href="https://www.linkedin.com/in/carlos-teixeira-000b7b1a0/" target="_blank">
              <LinkedinIcon/>
            </Link>
            <Link href="https://github.com/Carlos-Teixeira-Jr" target="_blank">
              <GithubIcon/>
            </Link>
            
          </div>
          <h3 className="text-2xl">{t('translation.resume.interested')}</h3>
          <div className="my-2">
            <ul className="list-disc list-inside text-sm">
              <li className="mb-2 font-extrabold">{t('translation.resume.carreer-transition')}</li>
              <p className="mb-4">{t('translation.resume.carreer-transition-desc')}</p>
              <li className="mb-2 font-extrabold">{t('translation.resume.insertion-oportunity')}</li>
              <p className="mb-4">{t('translation.resume.insertion-oportunity-desc')}</p>
              <li className="mb-2 font-extrabold">{t('translation.resume.learn-specialize')}</li>
              <p className="mb-4">{t('translation.resume.learn-specialize-desc')}</p>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full px-2 md:px-20">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r text-transparent from-[#13B0F5] to-[#E70FAA] bg-clip-text text-center md:text-left">CARLOS TEIXEIRA</h1>
        <h2 className="text-center md:text-left">{t("translation.resume.title")}</h2>
        <hr/>
        <h3 className="my-5 text-2xl text-center md:text-left">{t("translation.resume.experience")}</h3>
        <ul className="list-disc list-inside">
          {experiences.map((exp) => (
            <div key={exp.key} className="my-8">
              <li className="mb-2 font-extrabold">{exp.title}:</li>
              <div className="flex gap-10">
                <p className="font-bold">{exp.company}</p>
                <p>{exp.date}</p>
              </div><p>{exp.description}</p>
            </div>
          ))}
        </ul>
        <hr/>

        <h3 className="my-5 text-2xl text-center md:text-left">{t("translation.resume.education")}:</h3>
        <li className="mb-2 font-extrabold">{t("translation.resume.education-desc")}</li>
        <div className="flex gap-10">
          <p className="font-bold">UNICESUMAR</p>
          <p>Jan 2022 - Mai 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Curriculum