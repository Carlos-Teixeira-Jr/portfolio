import React from "react"
import HtmlIcon from "./icons/htmlIcon"
import CssIcon from "./icons/cssIcon"
import JavascriptIcon from "./icons/javascriptIcon"


const TechStack: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold leading-2 text-center my-5">My Tech Stack</h1>
      <p className="text-2xl font-normal leading-2 text-center m-5">Technologies I&apos;ve working with recently</p>

      <div className="flex justify-center">
        <div className="w-[120px] h-[120px]">
          <HtmlIcon/>
        </div>
        <div className="w-[120px] h-[120px]">
          <CssIcon
            className="mt-8"
          />
        </div>
        <div className="w-[120px] h-[120px]">
          <JavascriptIcon
            className="mt-8"
          />
        </div>
      </div>

      
    </div>
  )
}

export default TechStack