import { useEffect } from "react"
import AboutUs from "../components/Home/AboutUs"
import Hero from "../components/Home/Hero"
import KontakKami from "../components/Home/KontakKami"
import MengapaKami from "../components/Home/MengapaKami"
import Mitra from "../components/Home/Mitra"
import Navbar from "../components/Navbar"
import Aos from "aos"
import Footer from "../components/Footer"

const Home = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <Mitra />
      <AboutUs />
      <MengapaKami />
      <KontakKami />
      <Footer />
    </>
  )
}

export default Home