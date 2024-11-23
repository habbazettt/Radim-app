import Aos from "aos"
import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Banner from "../components/Gallery/Banner"
import GalleryCards from "../components/Gallery/GalleryCards"
import Footer from "../components/Footer"

const Gallery = () => {

    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div>
            <Navbar />
            <div className="mt-20">
                <Banner />
                <GalleryCards />
                <Footer />
            </div>
        </div>
    )
}

export default Gallery