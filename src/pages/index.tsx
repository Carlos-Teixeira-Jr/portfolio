import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Carlos Teixeira | Dev</title>
        <meta name="description"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
       
        <Navbar/>
       
      </main>
    </>
  )
}
