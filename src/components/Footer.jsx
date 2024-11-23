import { CgMail } from "react-icons/cg"
import { FaInstagram } from "react-icons/fa"
import { FiPhone } from "react-icons/fi"
import { LuFacebook } from "react-icons/lu"
import { Link } from 'react-router-dom'

const navLinks = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "About Us",
        link: "/about",
    },
    {
        title: "Our Services",
        link: "/services",
    },
    {
        title: "Gallery",
        link: "/gallery",
    },
    {
        title: "Contact",
        link: "/contact",
    }
]

const Footer = () => {
    return (
        <div className='bg-primary pt-10'>
            <div className='max-w-[1300px] mx-auto py-12 px-4 grid grid-cols-1 my-auto lg:grid-cols-3 gap-10 text-white justify-between'>
                <div className='gap-5'>
                    <img
                        src='/footer-logo.png'
                    />

                    <p className='py-3 font-extralight font-poppins'>
                        Perusahaan Jasa Keamanan Profesional yang menyediakan layanan petugas keamanan berkualitas tinggi dengan fokus pada kepuasan klien. Kepercayaan dan keamanan Anda adalah prioritas kami.
                    </p>
                </div>

                <div className='ml-0 xl:ml-20 mb-10'>
                    <h6 className='font-medium text-3xl mb-2'>Menu</h6>
                    <ul>
                        {navLinks.map((link, index) => (
                            <a key={index} className='text-white block px-3 py-2 pl-0 rounded-md text-base'><Link to={link.link}>{link.title}</Link></a>
                        ))}
                    </ul>
                </div>

                <div className=' flex flex-col gap-5 -mt-6 items-center'>
                    <img
                        src='/Logo.png'
                        width={200}
                    />

                    <h1 className='text-center clear-left text-xl font-poppins text-secondary-3'>
                        PT. Gemilang Radim Utama Kab. Bandung, Jawa Barat
                    </h1>
                    <div className='flex flex-col items-start'>
                        <div className='flex justify-between md:w-[75%] cursor-pointer gap-7'>
                            <div className='p-3 bg-secondary-1 border-secondary-3 border hover:bg-transparent hover:border-secondary-3 duration-300 ease-in rounded-lg'>
                                <a href='https://www.instagram.com/mahadtahfidz.uinbdg_/'><CgMail size={26} /></a>
                            </div>
                            <div className='p-3 bg-secondary-1 border-secondary-3 border hover:bg-transparent hover:border-secondary-3 duration-300 ease-in rounded-lg'>
                                <a href='https://www.instagram.com/mahadtahfidz.uinbdg_/'><FiPhone size={26} /></a>
                            </div>
                            <div className='p-3 bg-secondary-1 border-secondary-3 border hover:bg-transparent hover:border-secondary-3 duration-300 ease-in rounded-lg'>
                                <a href='https://www.instagram.com/mahadtahfidz.uinbdg_/'><FaInstagram size={26} /></a>
                            </div>
                            <div className='p-3 bg-secondary-1 border-secondary-3 border hover:bg-transparent hover:border-secondary-3 duration-300 ease-in rounded-lg'>
                                <a href='https://www.instagram.com/mahadtahfidz.uinbdg_/'><LuFacebook size={26} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-5 flex flex-col md:flex-row justify-between text-center text-sm gap-2 font-extralight px-0 md:px-7 py-3 font-poppins bg-secondary-1 text-white'>
                <h1>Copyright 2024, All Right Reserved</h1>
                <h1>PT. Gemilang Radim Utama</h1>
            </div>

        </div >
    )
}

export default Footer