'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image";

import { useEffect } from 'react'

function Navbar() {
    const pathname = usePathname()

    useEffect(() => {
        var showLogoOnScroll = function () {
            var myID = document.getElementById("logo-in-navbar");

            var y = window.scrollY;
            if (y >= 60) {
                myID.style.display = "block";
            } else {
                myID.style.display = "none";
            }

        };

        window.addEventListener("scroll", showLogoOnScroll);

    }, [])



    var toggleNavbar = function () {
        var x = document.getElementById("navbar-multi-level");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };

    return (
        <>
            <nav className="fixed top-0 md:static w-full bg-background md:bg-transparent z-50">
                <div className="px-6 md:px-24 py-2 md:py-0 md:mt-10 flex flex-row place-content-between">
                    <Link href="/">
                        <img width={163} height={48} alto="pinklaura-logo" src="img/pinklaura_logo.svg" className="h-12" alt="PinkLaura Logo" />
                    </Link>

                    <button onClick={toggleNavbar} data-collapse-toggle="navbar-multi-level" type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm stroke-paragraph rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-multi-level" aria-expanded="false">

                        <span className="sr-only">Open main menu</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 5H21" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 12H21" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M3 19H21" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </nav>

            <nav className="fixed md:top-4 md:right-24 top-16 md:w-max w-full p-2 z-50">

                <div id="navbar-multi-level" className="hidden md:block ">

                    <ul className="flex items-center bg-white/50 border border-white backdrop-blur-lg text-lg drop-shadow-1 gap-2 text-center text-title stroke-title  transition-all flex-col rounded-lg p-4 md:flex-row md:rounded-full md:px-4 md:py-1.5 md:space-x-8">

                        {/* Home link */}
                        <li className="!m-0 md:hidden">
                            <Link href="/" className="block py-2 px-3 md:py-1 md:px-2 hover:text-primary_dark hover:drop-shadow-pink"
                                aria-current="page">
                                Home</Link>
                        </li>

                        {/* Projects link */}
                        <li className="!m-0">
                            <Link href="/#projects" className="block py-2 px-3 md:py-1 md:px-2 hover:text-primary_dark hover:drop-shadow-pink"
                                aria-current="page">
                                Projects</Link>
                        </li>

                        {/* Resume link */}
                        <li className="!m-0">
                            <Link href="#" className="block py-2 px-3 md:py-1 md:px-2 hover:text-primary_dark hover:drop-shadow-pink">
                                Resume</Link>
                        </li>

                        {/* About me link */}
                        <li className="!m-0">
                            <Link href="/#about-me"
                                className="inline-block py-2 px-3 md:py-1 md:px-2 hover:text-primary_dark hover:drop-shadow-pink">
                                About me</Link>
                        </li>

                        <div className="flex flex-row gap-3 !m-0">
                            {/* Icon Email */}
                            <li className="!m-0">
                                <Link href="mailto:laura_nesossi@protonmail.com" target="_blank" className="block py-1 px-0.5 hover:stroke-primary_dark hover:drop-shadow-pink">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 8.99976L12 12.4998L17 8.99976" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M2 16.9998V6.99976C2 5.89519 2.89543 4.99976 4 4.99976H20C21.1046 4.99976 22 5.89519 22 6.99976V16.9998C22 18.1044 21.1046 18.9998 20 18.9998H4C2.89543 18.9998 2 18.1044 2 16.9998Z" />
                                    </svg>

                                </Link>
                            </li>

                            {/* Icon Linkedin */}
                            <li className="!m-0">
                                <Link href="https://www.linkedin.com/in/laura-nesossi/" target="_blank" className="block py-1 px-0.5 hover:stroke-primary_dark hover:drop-shadow-pink">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21 8.00024V16.0002C21 18.7616 18.7614 21.0002 16 21.0002H8C5.23858 21.0002 3 18.7616 3 16.0002V8.00024C3 5.23882 5.23858 3.00024 8 3.00024H16C18.7614 3.00024 21 5.23882 21 8.00024Z"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 17.0002V13.5002V10.0002" strokeLinecap="round" strokeLinejoin="round" />
                                        <path
                                            d="M11 17.0002V13.7502M11 13.7502V10.0002M11 13.7502C11 10.0002 17 10.0002 17 13.7502V17.0002"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M7 7.01038L7.01 6.99927" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Link>
                            </li>

                            {/* Icon Dribdble */}
                            <li className="!m-0">
                                <Link href="https://dribbble.com/PinkLaura" target="_blank"
                                    className="block py-1 px-0.5 hover:stroke-primary_dark hover:drop-shadow-pink">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M16.6726 20.8435C15.5 14 12.5 8.00003 8.5 2.62964" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M2.06641 10.8406C5.99992 11 15.2828 10.5 19.1414 5" strokeLinecap="round"
                                            strokeLinejoin="round" />
                                        <path d="M21.9677 12.81C15.3438 10.8407 7.50002 14.0001 5.23145 19.3613"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </Link>
                            </li>

                            {/* Icon Telegram */}
                            <li className="!m-0">
                                <Link href="https://telegram.me/L_Lau" target="_blank"
                                    className="block py-1 px-0.5 hover:stroke-primary_dark hover:drop-shadow-pink">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229"
                                            strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>


                                </Link>
                            </li>
                        </div>

                        {/* Icon home */}
                        <li className="hidden md:opacity-100 opacity-0 !m-0 p-1.5 md:relative transition-all" id="logo-in-navbar">
                            <Link href="/"
                                className="absolute w-14 h-14 -left-1.5 -top-6 hover:stroke-primary_dark hover:drop-shadow-pink hover:rotate-12">
                                <img width={56} height={56} alt="laura-logo" src="img/pinklaura-logomark.svg" className="w-full" />
                            </Link>
                        </li>

                    </ul>
                </div>

            </nav>
        </>

    );
}

export default Navbar;