import Aos from "aos"
import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Banner from '../components/Service/Banner'
import ServiceDesc from "../components/Service/ServiceDesc"
import ServiceCards from "../components/Service/ServiceCards"
import Footer from "../components/Footer"

const Services = () => {

    useEffect(() => {
        Aos.init()
    })

    return (
        <>
            <Navbar />
            <div className="mt-20">
                <Banner />
                <ServiceDesc />
                <ServiceCards />
                <Footer />
            </div>
        </>
    )
}

export default Services