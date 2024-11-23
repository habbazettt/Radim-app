const Banner = () => {
    return (
        <div className="w-full gallery-banner">
            <div className="px-10 py-6 flex justify-center md:justify-between  items-center gap-12">
                <div className="max-w-[550px] ml-0 lg:ml-24 xl:ml-56">
                    <h1 className="font-bold lg:text-5xl text-3xl text-center md:text-left font-montserrat text-primary" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-secondary-3">Galeri</span> Kami</h1>
                    <p className="font-extralight lg:text-xl mt-2 font-poppins text-secondary-3 text-center md:text-left" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'>
                        Ketahui lebih dalam tentang aktivitas dan prestasi kami dalam industri layanan keamanan untuk memahami kemampuan dan dedikasi tim kami.
                    </p>
                </div>
                <img src="/gallery-banner-pict.png" className="w-[500px] xl:w-[600px] -mr-10 hidden lg:block" alt="" />
            </div>
        </div>
    )
}

export default Banner