import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-gray-50">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center">
                <img src="https://mcqmate.com/public/images/logos/60x60.png" alt="logo" className="h-8 w-8" />
                <span className="ml-2 text-xl font-extrabold tracking-wide text-gray-800">AJEL Corporation</span>
            </a>
            <div className="mt-6 lg:max-w-xl">
                <p className="text-sm text-gray-800">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis mi, faucibus dignissim lorem
                    id, imperdiet interdum mauris. Vestibulum ultrices sed libero non porta. Vivamus malesuada urna eu
                    nibh malesuada, non finibus massa laoreet. Nunc nisi velit, feugiat a semper quis, pulvinar id
                    libero. Vivamus mi diam, consectetur non orci ut, tincidunt pretium justo. In vehicula porta
                    molestie. Suspendisse potenti. 
                    </p>
            </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
            <p className="text-base font-bold tracking-wide text-gray-900">Nos filiales</p>
            <a href="#">Page 1</a>
            <a href="#">Page 2</a>
            <a href="#">Page 3</a>
            <p className="text-base font-bold tracking-wide text-gray-900">Nos partenaires</p>
            <a href="#">Partenaire 1</a>
            <a href="#">Partenaire 2</a>
            <a href="#">Partenaire 3</a>
        </div>

        <div>
            <p className="text-base font-bold tracking-wide text-gray-900">RETROUVEZ-NOUS SUR</p>
            <div className="flex items-center gap-1 px-2 py-10">
                <FaFacebook className='m-3 cursor-pointer'/>
                <FaTwitter className='m-3 cursor-pointer'/>
                <FaYoutube className='m-3 cursor-pointer'/>
                <FaLinkedin className='m-3 cursor-pointer'/>
                <FaInstagram className='m-3 cursor-pointer'/>
                </div>
            <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a href="#" title="send email">admin@company.com</a>
            </div>
        </div>

    </div>

    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Copyright 2024 Company. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a href="#"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                    &amp; Cookies Policy
                </a>
            </li>
            <li>
                <a href="#"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Disclaimer
                </a>
            </li>
        </ul>
    </div>

</footer>
  )
}

export default Footer