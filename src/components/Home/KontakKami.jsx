import Aos from "aos"
import { useEffect } from "react"
import { CgMail } from "react-icons/cg"
import { FaArrowRight, FaInstagram } from "react-icons/fa"
import { FiPhone } from "react-icons/fi"
import { LuFacebook } from "react-icons/lu"
import { Link } from "react-router-dom"

const KontakKami = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center gap-10 container mx-auto h-full w-full mt-10 pb-10">
            <h1 className="font-bold md:text-5xl text-4xl text-center md:text-left font-montserrat text-primary" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-secondary-1">Temukan</span> Kami</h1>
            <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-center">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.975008644545!2d107.7356755112828!3d-7.012221968659569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68c11f3b8b9899%3A0x4708c31f41069a3b!2sPT%20Gemilang%20Radim%20Utama%20(Radim%20Group)!5e0!3m2!1sen!2sid!4v1730813102083!5m2!1sen!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-2xl shadow-2xl w-[350px] md:w-[500px]"
                    data-aos='fade-right' data-aos-duration='1500' data-aos-delay='400'
                />
                <div className="flex flex-col gap-8">
                    {/* Email */}
                    <div className="flex items-center gap-3" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='600'>
                        <div className="flex justify-center items-center rounded-md bg-secondary-1 w-12 h-12">
                            <CgMail className="text-secondary-3 w-8 h-8" />
                        </div>
                        <h1>gemilangradimutama@gmail.com</h1>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='800'>
                        <div className="flex justify-center items-center rounded-md bg-secondary-1 w-12 h-12">
                            <FiPhone className="text-secondary-3 w-7 h-7" />
                        </div>
                        <h1>+62 858-6449-0690</h1>
                    </div>

                    {/* Instagram */}
                    <div className="flex items-center gap-3" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='1000'>
                        <div className="flex justify-center items-center rounded-md bg-secondary-1 w-12 h-12">
                            <FaInstagram className="text-secondary-3 w-7 h-7" />
                        </div>
                        <h1>gemilangradimutama</h1>
                    </div>

                    {/* Facebook */}
                    <div className="flex items-center gap-3" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='1200'>
                        <div className="flex justify-center items-center rounded-md bg-secondary-1 w-12 h-12">
                            <LuFacebook className="text-secondary-3 w-7 h-7" />
                        </div>
                        <h1>Gemilang Radim Utama</h1>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 max-w-[650px] xl:max-w-full mx-auto text-center xl:text-left" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='600'>
                <h1 className="font-bold text-3xl font-montserrat text-primary">PT. Gemilang Radim Utama</h1>
                <p className="font-poppins font-light text-lg max-w-4xl">Jl. Simpang Solokan Jeruk Ranca Kusamba No.52, Bojongemas, Kec. Solokanjeruk, Kabupaten Bandung, Jawa Barat 40376</p>
                <div className="flex justify-center xl:justify-start">
                    <Link
                        to={'https://maps.app.goo.gl/7xjKV69Mxcm4sz1V6'}
                        target="_blank"
                        className="secondary-btn flex justify-center items-center gap-3.5"
                    >
                        Lihat Peta
                        <FaArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default KontakKami