import { useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import { RxDotFilled } from 'react-icons/rx'
import Aos from "aos"
import { useEffect } from "react"
import 'aos/dist/aos.css'
import { Link } from "react-router-dom"

const About = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    const slides = [
        {
            url: '/gallery/gallery-1.jpg'
        },
        {
            url: '/gallery/gallery-2.jpg'
        },
        {
            url: '/gallery/gallery-3.jpg'
        },
        {
            url: '/gallery/gallery-4.jpg'
        },
        {
            url: '/gallery/gallery-5.jpg'
        },
        {
            url: '/gallery/gallery-6.jpg'
        },
        {
            url: '/gallery/gallery-7.jpg'
        },
        {
            url: '/gallery/gallery-8.jpg'
        },
        {
            url: '/gallery/gallery-9.jpg'
        },
        {
            url: '/gallery/gallery-10.jpg'
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    return (
        <div className="flex flex-col-reverse xl:flex-row justify-center items-center gap-8 md:gap-40 container mx-auto w-full mt-10 xl:mt-0 h-full xl:py-24 px-8 sm:px-0">
            <div className="flex flex-col gap-3 max-w-[700px] xl:max-w-[650px]">
                <h1 className="font-bold md:text-5xl text-3xl text-center md:text-left font-montserrat text-primary" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-secondary-1">Tentang</span> Kami</h1>
                <p className="font-light lg:text-lg mt-1 font-poppins" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'>
                    Radim Group, didirikan pada tahun 2022, adalah penyedia jasa outsourcing handal yang fokus pada layanan keamanan, pengemudi, parkir, dan layanan lainnya. Kami menawarkan petugas keamanan profesional dan berlisensi, dengan komitmen tinggi terhadap kepuasan klien serta kepercayaan dan keamanan Anda.
                </p>
                <div className="mt-4" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='400'>
                    <Link className="primary-btn" to={"/about"}>Selengkapnya</Link>
                </div>
            </div>
            <div className="max-w-[700px] h-[220px] md:h-[500px] w-full mx-auto relative group shadow-2xl border border-black" data-aos='fade-down' data-aos-duration='1500'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-xl bg-cover bg-center object-contain duration-700">
                    {/* Left Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-1 md:p-2 bg-black/20 text-white cursor-pointer">
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                </div>
                <div className="flex top-4 justify-center py-2">
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-lg md:text-xl cursor-pointer">
                            <RxDotFilled />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About