const Banner = () => {
    return (
        <div className="w-full service-banner">
            <div className="px-10 py-24 flex justify-center md:justify-between  items-center gap-12">
                <div className="max-w-[550px] ml-0 lg:ml-24 xl:ml-56">
                    <h1 className="font-bold lg:text-6xl text-3xl text-center md:text-left font-montserrat text-secondary-2" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-secondary-3">Layanan</span> Kami</h1>
                    <p className="font-extralight lg:text-xl mt-2 font-poppins text-secondary-3 text-center md:text-left" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='300'>
                        Dapatkan layanan terbaik kami yang fokus pada kepuasan pelanggan untuk menciptakan pengalaman yang memuaskan.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner