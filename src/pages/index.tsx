import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomeSlider from '@/components/HomeSlider'
import Categories from '@/components/Categories'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Digitron Ecom</title>
        <meta name="description" content="Digitron Ecom, single stop for all your digital needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <HomeSlider />
        <Categories/>
      </main>
    </>
  )
}
