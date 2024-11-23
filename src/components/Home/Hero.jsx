import { Link } from "react-router-dom"

const Hero = () => {
    return (
        <div className="py-24 lg:container mx-auto h-full xl:h-screen relative w-screen">
            <div className="flex flex-col-reverse xl:flex-row justify-between items-center w-full">
                <div className="flex flex-col gap-4 max-w-full md:max-w-[600px] xl:max-w-[800px] mx-auto px-8 sm:px-0">
                    <h1 className="text-5xl font-montserrat font-semibold text-center xl:text-left md:heading text-primary" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'>Gemilang Radim Utama Security Service</h1>
                    <p className="font-poppins font-light leading-8 text-center xl:text-left" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='400'>Perusahaan penyedia jasa keamanan berlisensi dan profesional. Kami mengkhususkan diri dalam memberikan layanan petugas keamanan berkualitas tinggi, dengan fokus utama pada kepuasan klien. Kepercayaan dan keamanan Anda adalah prioritas kami.</p>
                    <div className="flex gap-4 justify-start mx-auto xl:mx-0">
                        <Link className="primary-btn" to="/about" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='600'>Explore</Link>
                        <Link className="secondary-btn" to="/contact" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='800'>Contact Us</Link>
                    </div>
                    <div className="flex justify-start mx-auto xl:mx-0 items-center gap-4 md:gap-12 font-poppins from-primary mt-14">
                        <div className="relative" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='1000'>
                            <h1 className="text-4xl">2+</h1>
                            <p className="font-light">Years of operations</p>
                            <img src="/noda.png" alt="" className="absolute -top-3 -left-7 z-[-1]" />
                        </div>
                        <div className="relative" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='1200'>
                            <h1 className="text-4xl">30+</h1>
                            <p className="font-light">Happy clients</p>
                            <img src="/noda.png" alt="" className="absolute -top-3 -left-7 z-[-1]" />
                        </div>
                        <div className="relative" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='1400'>
                            <h1 className="text-4xl">200+</h1>
                            <p className="font-light">Employees</p>
                            <img src="/noda.png" alt="" className="absolute -top-3 -left-7 z-[-1]" />
                        </div>
                    </div>
                </div>
                <img src="/hero.png" alt="" className="w-[300px] md:w-[400px] lg:w-[500px] mx-auto" data-aos='fade-right' data-aos-duration='1500' data-aos-delay="200" />
            </div>
            <img src="/hero-pattern.png" alt="" className="absolute bottom-1 w-80 z-[-1]" />
        </div>
    )
}

export default Hero