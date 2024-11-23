import Aos from "aos"
import { useEffect } from "react"

const GalleryCards = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="flex flex-col justify-center items-center w-full container mx-auto py-10 gap-4 px-4 md:px-20 mt-8">
            <h1 className="font-bold md:text-5xl text-4xl text-center md:text-left font-montserrat text-primary" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-secondary-1">Galeri</span> Kami</h1>

            <div className="p-5 md:p-10">
                <div className="gap-5 items-start lg:gap-8 columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8" data-aos='fade-up' data-aos-duration='1300'>
                    <img src="/src/assets/gallery/gallery-1.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-2.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-3.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-4.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-5.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-6.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-7.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-8.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-9.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-10.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-12.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-13.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-11.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-14.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-15.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-16.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-17.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-18.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-19.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-20.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-21.JPG" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-22.JPG" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-23.JPG" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-24.JPG" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-25.JPG" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-26.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-27.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                    <img src="/src/assets/gallery/gallery-28.jpg" alt="" className="rounded-lg hover:shadow-2xl ease-in duration-300" />
                </div>
            </div>
        </div>
    )
}

export default GalleryCards