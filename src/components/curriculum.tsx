import Image from "next/image"
import LinkedinIcon from "./icons/linkedInIcon"
import GithubIcon from "./icons/githubIcon"
import Link from "next/link";

const Curriculum = () => {

  const experiences = [
    {
      key: 'locale',
      title: 'Desenvolvedor Web Fullstack',
      company: 'LOCALE IMÒVEIS',
      date: 'Nov 2022 - atual',
      description: 'Estágio remunerado desenvolvendo do zero o front e backend de um site de anúncios de imóveis com Next js, Nest js e MongoDB.'
    },
    {
      key: 'JBR',
      title: 'Desenvolvedor Web Fullstack',
      company: 'JBR - UFCG',
      date: 'Mai 2023 - atual',
      description: 'Estágio remunerado em equipe de migração e desenvolvimento fullstack de uma aplicação em produção com o objetivo de automatizar processos laboratoriais da área de engenharia civil.'
    },
    {
      key: 'painter',
      title: 'Pintor predial e domiciliar',
      company: 'Autônomo',
      date: 'Mar 2022 - Nov 2022',
      description: 'Trabalho autônomo em equipe de pintura predial e domiciliar envolvendo planejamento, orçamento, compras e manutenção.'
    },
    {
      key: 'multiserv',
      title: 'Zelador',
      company: 'Morada do Parque',
      date: 'Mar 2021 - Fev 2022',
      description: 'Limpeza e manutenção de instalações e equipamentos industriais em planta de grande porte.'
    },
    {
      key: 'janitor',
      title: 'Auxiliar de Serviços Gerais',
      company: 'Multiserv',
      date: 'Fev 2020 - Mar 2021',
      description: 'Limpeza e manutenção das instalações prediais e domiciliares de condomínio de médio porte.'
    },
    {
      key: 'sales',
      title: 'Vendedor',
      company: 'SÉCULO 21 ELETRÔNICOS',
      date: 'Mai 2018 - Dez 2020',
      description: 'Venda e propsecção de clientes em loja de eletrônicos em shopping center.'
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

            <h2 className="text-sm">DESENVOLVEDOR FULLSTACK</h2>
            <hr/>
          </div>
          <h3 className="text-2xl">Contato:</h3>
          <div className="my-2">
            <p>teixeirahist1988@gmail.com</p>
            <p>+55 53 99177 5245</p>
            <p>Rio Grande do Sul, Brasil</p>
          </div>
          <div className="my-2 flex justify-around">
            <Link href="https://www.linkedin.com/in/carlos-teixeira-000b7b1a0/" target="_blank">
              <LinkedinIcon/>
            </Link>
            <Link href="https://github.com/Carlos-Teixeira-Jr" target="_blank">
              <GithubIcon/>
            </Link>
            
          </div>
          <h3 className="text-2xl">Interesses</h3>
          <div className="my-2">
            <ul className="list-disc list-inside text-sm">
              <li className="mb-2 font-extrabold">Transição de carreira</li>
              <p className="mb-4">Busco uma colocação mais concisa no mercado de trabalho.</p>
              <li className="mb-2 font-extrabold">Oportunidade de inserção</li>
              <p className="mb-4">Estou a procura de vagas como Junior ou trainees.</p>
              <li className="mb-2 font-extrabold">Aprender e me especializar.</li>
              <p className="mb-4">Busco oportunidades práticas para me desenvolver como especiapsta em alguma tecnologia prioritária para a empresa.</p>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full px-2 md:px-20">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r text-transparent from-[#13B0F5] to-[#E70FAA] bg-clip-text text-center md:text-left">CARLOS TEIXEIRA</h1>
        <h2 className="text-center md:text-left">Desenvolvedor Web Fullstack</h2>
        <hr/>
        <h3 className="my-5 text-2xl text-center md:text-left">Experiencia:</h3>
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

        <h3 className="my-5 text-2xl text-center md:text-left">Educação:</h3>
        <li className="mb-2 font-extrabold">Graduação em análise e desenvolvimento de sistemas</li>
        <div className="flex gap-10">
          <p className="font-bold">UNICESUMAR</p>
          <p>Jan 2022 - Mai 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Curriculum