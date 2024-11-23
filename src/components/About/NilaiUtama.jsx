import { useEffect, useState } from "react"
import { GrUserWorker } from "react-icons/gr"
import { MdOutlineHandshake } from "react-icons/md"
import { TbSettingsCog } from "react-icons/tb"
import { VscWorkspaceTrusted } from "react-icons/vsc"
import ProfessionalModal from "./Modals/ProfessionalModal"
import KepercayaanModal from "./Modals/KepercayaanModal"
import PerbaikanModal from "./Modals/PerbaikanModal"
import IntegritasModal from "./Modals/IntegritasModal"
import Aos from "aos"


const NilaiUtama = () => {
    useEffect(() => {
        Aos.init()
    }, [])

    const [openModalProfessional, setOpenModalProfessional] = useState(false)
    const [openModalKepercayaan, setOpenModalKepercayaan] = useState(false)
    const [openModalPerbaikan, setOpenModalPerbaikan] = useState(false)
    const [openModalIntegritas, setOpenModalIntegritas] = useState(false)

    const handleModalProfessional = () => {
        setOpenModalProfessional(!openModalProfessional)
    }

    const handleModalKepercayaan = () => {
        setOpenModalKepercayaan(!openModalKepercayaan)
    }

    const handleModalPerbaikan = () => {
        setOpenModalPerbaikan(!openModalPerbaikan)
    }

    const handleModalIntegritas = () => {
        setOpenModalIntegritas(!openModalIntegritas)
    }

    return (
        <div className="flex flex-col justify-center items-center w-full container mx-auto py-10 gap-4 px-4 mt-20 md:mt-28">
            <h1 className="font-semibold text-5xl md:text-6xl text-center font-montserrat text-primary max-w-[860px]" data-aos='fade-right' data-aos-duration='1500' data-aos-delay='400'>Nilai Utama Perusahaan</h1>
            <p className="font-poppins font-light leading-8 text-center text-lg" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="600">Ada 4 Nilai Utama yang menjadikan kami terus bertumbuh hingga saat ini.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mt-6">
                {/* Professional */}
                <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleModalProfessional()} data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="600">
                    <div className="text-6xl text-primary p-12 border-4 border-secondary-1 rounded-full w-44 h-44 flex justify-center items-center hover:border-secondary-3 hover:bg-secondary-1 hover:text-secondary-3 transition-all duration-500">
                        <GrUserWorker />
                    </div>
                    <h1 className="mt-3 text-center text-3xl font-poppins">Professional</h1>
                </div>

                {/* Kepercayaan */}
                <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleModalKepercayaan()} data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="700">
                    <div className="text-6xl text-primary p-12 border-4 border-secondary-1 rounded-full w-44 h-44 flex justify-center items-center hover:border-secondary-3 hover:bg-secondary-1 hover:text-secondary-3 transition-all duration-500">
                        <MdOutlineHandshake />
                    </div>
                    <h1 className="mt-3 text-center text-3xl font-poppins">Kepercayaan</h1>
                </div>

                {/* Perbaikan */}
                <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleModalPerbaikan()} data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="800">
                    <div className="text-6xl text-primary p-12 border-4 border-secondary-1 rounded-full w-44 h-44 flex justify-center items-center hover:border-secondary-3 hover:bg-secondary-1 hover:text-secondary-3 transition-all duration-500">
                        <TbSettingsCog />
                    </div>
                    <h1 className="mt-3 text-center text-3xl font-poppins">Perbaikan</h1>
                </div>

                {/* Integritas */}
                <div className="flex flex-col justify-center items-center cursor-pointer" onClick={() => handleModalIntegritas()} data-aos="zoom-in-down" data-aos-duration="1500" data-aos-delay="900">
                    <div className="text-6xl text-primary p-12 border-4 border-secondary-1 rounded-full w-44 h-44 flex justify-center items-center hover:border-secondary-3 hover:bg-secondary-1 hover:text-secondary-3 transition-all duration-500">
                        <VscWorkspaceTrusted />
                    </div>
                    <h1 className="mt-3 text-center text-3xl font-poppins">Integritas</h1>
                </div>
            </div>
            <ProfessionalModal open={openModalProfessional} onClose={handleModalProfessional} />
            <KepercayaanModal open={openModalKepercayaan} onClose={handleModalKepercayaan} />
            <PerbaikanModal open={openModalPerbaikan} onClose={handleModalPerbaikan} />
            <IntegritasModal open={openModalIntegritas} onClose={handleModalIntegritas} />
        </div>
    )
}

export default NilaiUtama