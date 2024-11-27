const ServiceCards = () => {
    return (
        <div className="w-full flex flex-col gap-16 py-8">
            {/* Card 1 */}
            <div className="flex flex-col md:flex-row gap-8 justify-start items-center p-6 md:p-0 ">
                <img src="/service-cards/service-1.png" alt="" className="max-w-full md:max-w-[50%] shadow-lg" data-aos="fade-right" data-aos-duration="1500" />
                <div className="flex flex-col max-w-full md:max-w-[46%]" data-aos="fade-right" data-aos-duration="1500">
                    <h1 className="font-semibold text-5xl font-montserrat text-primary">Keamanan untuk Acara dan Program</h1>
                    <div className="w-[40%] h-[3px] rounded-full bg-secondary-1 my-4" />
                    <p className="font-poppins font-light leading-7">
                        Kami mengucapkan terima kasih kepada para pelanggan dan mitra yang telah mempercayakan layanan kami. Kami merasa bangga dan puas dapat memastikan keamanan, kelancaran, dan kesuksesan dalam setiap acara, program, dan event yang telah diselenggarakan. Melalui berbagai upaya maksimal yang kami lakukan, seperti penguasaan lokasi, pengurusan semua persyaratan, menjalin hubungan baik dengan masyarakat, perangkat, dan aparat setempat, serta mengantisipasi segala potensi gangguan dan ancaman, kami berkomitmen untuk melakukan tindakan yang diperlukan demi keberhasilan acara. Pengalaman ini juga menjadi dasar bagi kami untuk terus mengevaluasi dan meningkatkan pelayanan kepada pelanggan.
                    </p>
                </div>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col-reverse md:flex-row gap-8 justify-end items-center p-6 md:p-0">
                <div className="flex flex-col max-w-full md:max-w-[46%]" data-aos="fade-right" data-aos-duration="1500">
                    <h1 className="font-semibold text-5xl font-montserrat text-primary">Pengawalan untuk VVIP, Uang, dan Barang Berharga</h1>
                    <div className="w-[40%] h-[3px] rounded-full bg-secondary-1 my-4" />
                    <p className="font-poppins font-light leading-7">
                        Kami sangat menghimbau agar tidak ada penyesalan di kemudian hari akibat kurangnya pengawalan keamanan, karena jika terjadi insiden, asuransi tidak akan memberikan ganti rugi. Pernyataan ini menegaskan betapa pentingnya keberadaan layanan keamanan dalam menjaga keselamatan dan kelancaran semua tugas serta urusan Anda. Kami secara rutin memperbarui informasi mengenai berbagai modus kejahatan, serta respons terhadap pencegahan dan antisipasi kejahatan. Dengan kemampuan dan peralatan bela diri yang kami miliki, kami dapat memastikan bahwa aset Anda terlindungi dari segala gangguan dan ancaman.
                    </p>
                </div>
                <img src="/service-cards/service-2.png" alt="" className="max-w-full md:max-w-[50%] shadow-lg" data-aos="fade-right" data-aos-duration="1500" />
            </div>

            {/* Card 3 */}
            <div className="flex flex-col md:flex-row gap-8 justify-start items-center">
                <img src="/service-cards/service-3.png" alt="" className="max-w-full md:max-w-[50%] shadow-lg" data-aos="fade-right" data-aos-duration="1500" />
                <div className="flex flex-col max-w-full md:max-w-[46%]" data-aos="fade-right" data-aos-duration="1500">
                    <h1 className="font-semibold text-5xl font-montserrat text-primary">Layanan Respon Darurat Keamanan</h1>
                    <div className="w-[40%] h-[3px] rounded-full bg-secondary-1 my-4" />
                    <p className="font-poppins font-light leading-7">
                        Jika rumah Bapak Ibu akan ditinggalkan kosong, Bapak/Ibu dalam situasi bahaya, atau terancam, kami hadir untuk membantu. Apakah Bapak/Ibu mengalami gangguan perjalanan atau menghadapi masalah? Kami selalu siap 24 jam untuk menyediakan rasa aman, nyaman, tenang, dan terlindung. Hubungi kami langsung atau bergabunglah sebagai anggota &quot;Gemilang Radim Utama Customer Membership&quot;. Kami akan selalu bersedia membantu Anda dalam situasi apa pun.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCards