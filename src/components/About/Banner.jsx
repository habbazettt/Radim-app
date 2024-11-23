const Banner = () => {
    return (
        <div className="w-full about-banner">
            <div className="px-10 py-6 flex justify-center md:justify-between  items-center gap-12">
                <div className="max-w-[550px] ml-0 lg:ml-24 xl:ml-56">
                    <h1 className="font-bold lg:text-5xl text-3xl text-center md:text-left font-montserrat text-secondary-2" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-secondary-3">Tentang</span> Kami</h1>
                    <p className="font-extralight lg:text-xl mt-2 font-poppins text-secondary-3 text-center md:text-left" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'>
                        Kenali Gemilang Radim Utama, dan apa yang menjadi fokus utamanya dalam memberikan pelayanan terbaik bagi Anda.
                    </p>
                </div>
                <img src="/about-banner-pict.png" className="w-[500px] xl:w-[600px] -mr-10 hidden lg:block" alt="" />
            </div>
        </div>
    )
}

export default Banner