import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaEnvelope, FaPhone, FaX } from 'react-icons/fa6'

const HeadBar = () => {
  return (
    <header id="main-header" className="bg-gray-800 text-white fixed w-full top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4">
                <div className="flex items-center text-sm">
                    <FaPhone/> +237 6XX XXX XXX
                    <span className='mx-4'>
                        <FaEnvelope className='hidden h-4 w-4 lg:inline mr-2'/> XXXXXXXXXX@gmail.com
                    </span>
                </div>
                <button id="menu-toggle" className="md:hidden focus:outline-none z-50">
                    <svg id="menu-icon" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                    <svg id="close-icon" className="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <nav id="main-nav" className="fixed inset-y-0 right-0 transform translate-x-full md:relative md:translate-x-0 bg-gray-800 md:bg-transparent w-64 md:w-auto h-full md:h-auto overflow-y-auto md:overflow-visible transition-transform duration-300 ease-in-out md:transition-none">
                    <ul className="pt-16 md:pt-0 px-4 md:px-0 md:flex space-y-2 md:space-y-0 md:space-x-4">
                        <FaFacebook/>
                        <FaTwitter/>
                        <FaYoutube/>
                        <FaLinkedin/>
                        <FaInstagram/>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default HeadBar