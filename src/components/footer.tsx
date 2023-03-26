import GithubIcon from "./icons/githubIcon"
import LinkedinIcon from "./icons/linkedInIcon"
import TwitterIcon from "./icons/twitterIcon"


const Footer = () =>{

  function handleClickHome() {
    // Quando o usuário clicar no botão, role de volta para o topo da página
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function handleClickAbout() {
    // Quando o usuário clicar no botão, role de volta para o topo da página
    window.scrollTo({
      top: 100,
      behavior: "smooth",
    });
  }

  function handleClickTechStack() {
    // Quando o usuário clicar no botão, role de volta para o topo da página
    window.scrollTo({
      top: 650,
      behavior: "smooth",
    });
  }

  function handleClickProjects() {
    // Quando o usuário clicar no botão, role de volta para o topo da página
    window.scrollTo({
      top: 1250,
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
    <div className="flex flex-col">
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
            <TwitterIcon/>
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
          <button className="text-[#CCCCCC] mx-6 text-lg" onClick={handleClickHome}>Home</button>
          <button className="text-[#CCCCCC] mx-6 text-lg" onClick={handleClickAbout}>About</button>
          <button className="text-[#CCCCCC] mx-6 text-lg" onClick={handleClickTechStack}>TechStack</button>
          <button className="text-[#CCCCCC] mx-6 text-lg" onClick={handleClickProjects}>Projects</button>
          <button className="text-[#CCCCCC] mx-6 text-lg">Contact</button>
        </div>
        <div className="flex justify-center md:just">
          <p className="flex">Built by <a className="text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text ml-1 text-xl font-semibold leading-6">Carlos Teixeira</a></p>
        </div>
      </div>
    </div>
    
  )
}

export default Footer