/* eslint-disable react/prop-types */
import { GrUserWorker } from "react-icons/gr"

const ProfessionalModal = ({ open, onClose }) => {
    return (
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-primary/70" : "invisible"}`}
        >
            <div className="w-[600px] mx-auto p-8">
                <div
                    className={`bg-white rounded-xl shadow p-6 transition-all ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col justify-center items-center">
                        <div className="text-6xl text-primary p-12 border-4 border-secondary-1 rounded-full w-44 h-44 flex justify-center items-center">
                            <GrUserWorker />
                        </div>
                        <h1 className="mt-3 text-center text-4xl font-poppins">Professional</h1>
                        <p className="font-poppins font-light leading-8 text-center text-lg mt-2">
                            Kami berkomitmen untuk menjaga kinerja yang profesional dan berkualitas, memastikan kepercayaan masa depan serta meningkatkan rasa percaya diri di Gemilang Radim Utama. Kami selalu mematuhi standar profesional tertinggi dalam setiap aspek layanan kami.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfessionalModal