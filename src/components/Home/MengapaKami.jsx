import Aos from "aos"
import { useEffect } from "react"
import { GrConnect, GrUserWorker } from "react-icons/gr"
import { MdOutlineNotificationsActive } from "react-icons/md"

const MengapaKami = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="flex flex-col justify-center items-center gap-24 container mx-auto py-24 w-full mt-20 xl:mt-0">
            <h1 className="font-bold md:text-5xl text-4xl text-center md:text-left font-montserrat text-primary" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='200'><span className="text-secondary-1">Mengapa</span> Kami?</h1>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-12 px-7 sm:px-0">
                <div className="flex flex-col items-center text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">
                    <div className="flex justify-center items-center rounded-full bg-secondary-1 w-36 h-36">
                        <GrUserWorker className="text-secondary-3 w-14 h-16" />
                    </div>
                    <h1 className="font-bold text-2xl mt-4 text-primary">TENAGA KEAMANAN BERKUALITAS TINGGI</h1>
                    <p className="font-poppins font-light mt-2 max-w-[460px] xl:max-w-full">
                        Kami memiliki tim keamanan profesional yang terlatih dan berpengalaman. Setiap anggota tim kami menjalani proses seleksi ketat dan pelatihan berkelanjutan untuk memastikan mereka siap menjaga keamanan klien dengan efektif.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">
                    <div className="flex justify-center items-center rounded-full bg-secondary-1 w-36 h-36">
                        <GrConnect className="text-secondary-3 w-14 h-16" />
                    </div>
                    <h1 className="font-bold text-2xl mt-4 text-primary">KOLABORASI DENGAN INSTANSI RESMI</h1>
                    <p className="font-poppins font-light mt-2 max-w-[460px] xl:max-w-full">
                        Kami bekerja sama dengan instansi resmi, termasuk kepolisian dan lembaga terkait, untuk mengimplementasikan prosedur keamanan yang efektif dan responsif. Kolaborasi ini memastikan kami memiliki dukungan profesional yang diperlukan dalam menghadapi situasi darurat.
                    </p>
                </div>
                <div className="flex flex-col items-center text-center" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="800">
                    <div className="flex justify-center items-center rounded-full bg-secondary-1 w-36 h-36">
                        <MdOutlineNotificationsActive className="text-secondary-3 w-14 h-16" />
                    </div>
                    <h1 className="font-bold text-2xl mt-4 text-primary">PELAYANAN PROAKTIF DAN RESPONSIF</h1>
                    <p className="font-poppins font-light mt-2 max-w-[460px] xl:max-w-full">
                        kami mengutamakan pelayanan proaktif dan responsif untuk kebutuhan klien. Kami menyediakan solusi keamanan yang preventif, memastikan potensi ancaman teridentifikasi dan ditangani sebelum menjadi masalah.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MengapaKami