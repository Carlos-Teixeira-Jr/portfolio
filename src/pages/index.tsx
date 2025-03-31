import Head from 'next/head'
import Navbar from '@/components/navbar'
import Greetings from '@/components/greeting'
import TechStack from '@/components/techStack'
import Projects from '@/components/projects'
import Footer from '@/components/footer'
import { useState } from 'react'
import Curriculum from '@/components/curriculum'

export default function Home() {

  const [language, setLanguage] = useState('');
  const [isCurriculum, setIsCurriculum] = useState(false);

  const handleLanguageChange = (language: string) => {
    setLanguage(language)
  };

  return (
    <>
      <Head>
        <title>Carlos Teixeira | Dev</title>
        <meta name="description"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-[1536px] mx-auto'>
        <Navbar 
          selectedLanguage={handleLanguageChange}
          handleShowCurriculum={(show: boolean) => setIsCurriculum(show)}
        />
        {isCurriculum ? (
          <main className='max-w-[1536px] mx-auto'>
            <Curriculum/>
          </main>
        ): (
          <main className='max-w-[1536px] mx-auto'>

            <Greetings />

            <TechStack
              selectedLanguage={language}
            />

            <Projects
              selectedLanguage={language}
            />
          </main>
        )}

        <Footer
          selectedLanguage={language}
        />
      </main>
    </>
  )
}
