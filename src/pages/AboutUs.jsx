import Aos from "aos"
import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Banner from "../components/About/Banner"
import AboutDesc from "../components/About/AboutDesc"
import VisiMisi from "../components/About/VisiMisi"
import NilaiUtama from "../components/About/NilaiUtama"
import Keunggulan from "../components/About/Keunggulan"
import Footer from "../components/Footer"
import MitraCards from "../components/About/MitraCards"

const AboutUs = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <>
            <Navbar />
            <div className="mt-20 w-screen">
                <Banner />
                <AboutDesc />
                <VisiMisi />
                <NilaiUtama />
                <Keunggulan />
                <MitraCards />
                <Footer />
            </div>
        </>
    )
}

export default AboutUs