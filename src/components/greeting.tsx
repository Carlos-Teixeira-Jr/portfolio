import Image from "next/image"
import { useEffect } from "react";
import { useTranslation } from "react-i18next"
import { Element } from "react-scroll"


const Greetings: React.FC = () => {

  const { t } = useTranslation();

  return (
    <Element name="about">
      <div className="flex justify-evenly lg:my-[90px] my-14">
        <div>
          {/* <p className="lg:text-6xl md:text-4xl font-extrabold leading-2">Hi, 👋</p> */}
          <p className="lg:text-6xl md:text-4xl font-extrabold leading-2">{t('translation.greetingHi')}</p>
          <p className="lg:text-6xl md:text-4xl font-extrabold leading-2">{t('translation.myNameIs')}</p>
          <p className="lg:text-6xl md:text-4xl font-extrabold leading-2 text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text">Carlos Teixeira</p>
          <p className="lg:text-6xl md:text-4xl font-extrabold leading-2">{t('translation.whatIDo1')}<br/>{t('translation.whatIDo2')}<br/>{t('translation.whatIDo3')}</p>
          <p className="lg:text-6xl md:text-4xl font-extrabold leading-2">{t('translation.NiceToMeetYou')}</p>
        </div>
        <div className="lg:w-[450px] md:w-[250px] w-[150px] h-[150px] lg:h-[450px] md:h-[250px] rounded-full bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] my-auto">
          <div className="lg:h-[400px] md:h-[220px] h-[125px] w-[125px] lg:w-[400px] md:w-[220px] rounded-full overflow-hidden lg:mt-[25px] md:mt-[15px] mt-[13px] mx-auto">
            <Image 
              src={"/images/profile_pic.jpg"} 
              alt={""}
              width={400}
              height={400}
              className="relative lg:top-[-80px] md:top-[-50px] top-[-25px]"
            />
          </div>
        </div>
      </div>
    </Element>
  )
}

export default Greetings