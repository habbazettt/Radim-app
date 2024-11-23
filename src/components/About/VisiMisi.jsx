import { BiTargetLock } from "react-icons/bi"
import { IoTelescope } from "react-icons/io5"

const VisiMisi = () => {

    return (
        <div className="flex flex-col justify-center items-center w-full container mx-auto py-10 gap-4 px-4 mt-12 md:mt-24">
            <h1 className="font-semibold text-5xl md:text-6xl text-center font-montserrat text-primary max-w-[860px]" data-aos='fade-down' data-aos-duration='1500' data-aos-delay='400'>Visi & Misi Gemilang Radim Utama</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-10">
                {/* VISI */}
                <div className="flex flex-col gap-4 justify-center items-center max-w-[500px] border-4 border-secondary-1 rounded-3xl p-10 relative" data-aos='fade-down' data-aos-duration='1500' data-aos-delay='600'>
                    <h1 className="font-bold text-4xl text-center font-montserrat text-primary mt-4">Visi</h1>
                    <p className="font-poppins font-light leading-8 text-center text-lg">
                        Menjadi jasa layanan
                        outsourcing keamanan
                        terdepan
                        di Indonesia yang dikenal dengan
                        profesionalisme, integritas, dan
                        keandalannya
                        dalam memberikan perlindungan optimal bagi mitra.
                    </p>
                    <div className="text-5xl bg-white text-primary border-2 border-primary rounded-full p-5 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <BiTargetLock />
                    </div>
                </div>

                {/* MISI */}
                <div className="flex flex-col gap-4 justify-center items-center max-w-[500px] border-4 border-secondary-1 rounded-3xl p-10 relative" data-aos='fade-down' data-aos-duration='1500' data-aos-delay='600'>
                    <h1 className="font-bold text-4xl text-center font-montserrat text-primary mt-4">Misi</h1>
                    <p className="font-poppins font-light leading-8 text-center">
                        Memberikan solusi keamanan terintegrasi yang disesuaikan dengan kebutuhan unik setiap klien, memastikan keamanan dan kenyamanan melalui personel profesional yang responsif, secara proaktif mengidentifikasi dan memitigasi potensi risiko keamanan, serta berinovasi dan beradaptasi dengan perkembangan teknologi keamanan terkini.
                    </p>
                    <div className="text-5xl bg-white text-primary border-2 border-primary rounded-full p-5 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <IoTelescope />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisiMisi