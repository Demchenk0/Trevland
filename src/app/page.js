import Image from 'next/image'
import styles from './page.module.css'
import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import Location from '../components/Location/Location'

export default function Home() {
  return (
   <> 
    <Header />
    <main >
     <Hero/>
     <Location/>
    </main>
    </>
  )
}
