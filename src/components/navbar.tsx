import GithubIcon from "./icons/githubIcon"
import TwitterIcon from "./icons/twitterIcon"


const Navbar = () => {
  return (
    <div className="flex justify-between my-10 mx-5">
      <div className="text-[#CCCCCC] mx-5">Logo</div>
      <div>
        <button className="text-[#CCCCCC] mx-5">Home</button>
        <button className="text-[#CCCCCC] mx-5">About</button>
        <button className="text-[#CCCCCC] mx-5">Tech Stack</button>
        <button className="text-[#CCCCCC] mx-5">Projects</button>
        <button className="text-[#CCCCCC] mx-5">Contact</button>
      </div>
      <div className="flex">
        <div className="text-[#CCCCCC] mx-5">
          <GithubIcon/>
        </div>
        <div className="text-[#CCCCCC] mx-5">
          <TwitterIcon/>
        </div>
        <div className="text-[#CCCCCC] mx-5">LinkedIn</div>
      </div>
    </div>
  )
}

export default Navbar