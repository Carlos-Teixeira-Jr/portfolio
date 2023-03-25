import Image from "next/image"


const Greetings: React.FC = () => {
  return (
    <div className="flex justify-evenly my-[150px]">
      <div>
        <p className="text-6xl font-extrabold leading-2">Hi, 👋</p>
        <p className="text-6xl font-extrabold leading-2">My name is</p>
        <p className="text-6xl font-extrabold leading-2 text-transparent bg-gradient-to-r from-[#13B0F5] to-[#E70FAA] bg-clip-text">Carlos Teixeira</p>
        <p className="text-6xl font-extrabold leading-2">I&apos;m a fullstack <br/> javascript web developer</p>
        <p className="text-6xl font-extrabold leading-2">Nice to meet you!</p>
      </div>
      <div className="w-[450px] h-[450px] rounded-full bg-gradient-to-r from-[#13B0F5] to-[#E70FAA]">
        <div className="h-[400px] w-[400px] rounded-full overflow-hidden mt-[25px] mx-auto">
          <Image 
            src={"/images/profile_pic.jpg"} 
            alt={""}
            width={400}
            height={400}
            className="relative top-[-80px]"
          />
        </div>
      </div>
      
    </div>
  )
}

export default Greetings