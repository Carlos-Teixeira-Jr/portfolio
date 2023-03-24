import GithubIcon from "./icons/githubIcon"
import LinkedinIcon from "./icons/linkedInIcon"
import TwitterIcon from "./icons/twitterIcon"


const Navbar = () => {
  return (
    <div className="flex justify-between my-10 mx-[180px]">
      <h1 className="mx-5 font-stylish text-4xl font-bold text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text">{"{Carlos | Teixeira}"}</h1>
      <div className="flex justify-evenly w-2/6">
        <button className="text-[#CCCCCC] mx-6 text-lg">Home</button>
        <button className="text-[#CCCCCC] mx-6 text-lg">About</button>
        <button className="text-[#CCCCCC] mx-6 text-lg">TechStack</button>
        <button className="text-[#CCCCCC] mx-6 text-lg">Projects</button>
        <button className="text-[#CCCCCC] mx-6 text-lg">Contact</button>
      </div>
      <div className="flex">
        <div className="text-[#CCCCCC] mx-5">
          <GithubIcon/>
        </div>
        <div className="text-[#CCCCCC] mx-5">
          <TwitterIcon/>
        </div>
        <div className="text-[#CCCCCC] mx-5">
          <LinkedinIcon/>
        </div>
      </div>
    </div>
  )
}

export default Navbar