import React from "react";
import Link from "next/link";

const TopBar = () => {
    return(
        <header id="header"
                className="text-white bg-orange-900 flex flex-row items-center justify-center lg:justify-around">
            <div className="flex flex-row items-center md:flex-row md:items-center p-5" id="logo">
                <span className="p-2"> Saving Lives </span>
                <a className="logo-border">
                    <img className="rounded-full" src="/assets/favicons/android-icon-48x48.png" alt="logo" />
                </a>
                <span className="p-2"> Saving Animals </span>
            </div>

            <button data-collapse-toggle="navbar-default" type="button"
                    className="p-2 right-4 sm:inline-flex sm:items-center p-2 lg:hidden focus:outline-none  text_4 "
                    aria-controls="navbar-default" aria-expanded="false" id="nav-button">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    ></path>
                </svg>
            </button>

            <nav className="">
                <div className="hidden w-full lg:block z-0" id="navbar">
                    <ul
                        className="w-[100vw] h-1/2 top-0 right-0 p-4 text-center space-y-8 lg:space-y-0 lg:space-x-3 lg:static lg:w-auto flex flex-col rounded-lg border border-gray-100 items-center lg:bg-transparent lg:border-0 lg:flex-row justify-center">
                        <li>
                            <Link href="/">
                                <a className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a
                                    className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">
                                    About Us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">
                                    Blogs
                                </a>
                            </Link>
                        </li>

                        <li>
                            <Link href="/donate">
                                <a className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">
                                    Donate Animals
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/support">
                                <a
                                    className="p-3 text-custom-heading flex font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">
                                    Support Us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/report-stray">
                                <a className="p-3 text-custom-heading font-bold hover:underline underline-offset-4 turn-red-hover navbar-item">
                                    SOS Report
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>
                                    <button
                                        className="inline-flex items-center bg-header-orange-light border-0 py-4 px-2 focus:outline-none text_4 font-bold rounded text-base mt-4 md:mt-0">
                                        Contact Us
                                        <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <a id="theme-toggle">
                                <img src="/assets/sun.svg" width="50px" id="switch" alt='theme'/>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default TopBar
