const MitraCards = () => {
    return (
        <div className="flex flex-col justify-center items-center w-full container mx-auto py-10 gap-4 px-4 mt-20 md:mt-28">
            <h1 className="font-semibold text-5xl md:text-6xl text-center font-montserrat text-primary max-w-[860px]" data-aos='fade-down' data-aos-duration='1500'>Mitra Kami</h1>
            <p className="font-poppins font-light leading-8 text-center text-lg" data-aos='fade-down' data-aos-duration='1500' data-aos-delay='200'>Hanya dalam waktu <span className="font-semibold">2 tahun</span> kami telah bermitra lebih dari <span className="font-semibold">30+ clients</span> dengan jumlah personel <span className="font-semibold">lebih dari 200 orang</span></p>
            <div className="flex flex-wrap justify-center items-center gap-10" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='400'>
                <img src="/mitra/sucaber.png" alt="sucaber" className="w-[360px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/matic.png" alt="matic" className="w-[200px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/dewytex.png" alt="dewytex" className="w-[300px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/bakery.png" alt="bakery" className="w-[200px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/aaj.png" alt="aaj" className="w-[200px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/novatex.png" alt="novatex" className="w-[350px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/id.png" alt="" className="w-[160px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/bcp.png" alt="bcp" className="w-[200px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/msra.png" alt="msra" className="w-[300px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/sharon.png" alt="sharon" className="w-[300px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/stl.png" alt="stl" className="w-[200px] hover:saturate-0 duration-300 ease-in-out" />
                <img src="/mitra/ilike.png" alt="ilike" className="w-[200px] hover:saturate-0 duration-300 ease-in-out" />
            </div>
        </div>
    )
}

export default MitraCards