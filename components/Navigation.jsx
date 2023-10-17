"use client";

import Link from 'next/link'

import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation'

// Components
import SideBar from '@components/SideBar';

// Fonctions
import useOutsideClick from '@utils/useOutsideClick'

const Navigation = () => {
    const linkTwitter = "https://twitter.com/Nozadah";
    const linkTwitch = "https://www.twitch.tv/nozadah";
    const linkYoutube = "https://www.youtube.com/@Nozadah";

    const linkHome = "/";
    const linkGuides = "/guides";
    const linkDonjons = "/donjons";
    const linkEquipements = "/equipements";

    const [isNavOpen, setNavOpen] = useState(false);
    const navbarRef = useRef(null);

    useOutsideClick(navbarRef, () => {
        if (isNavOpen) {
            setNavOpen(false);
        }
    });

    const pathname = usePathname()
    const isLinkActive = (path) => {
        return path === pathname;
    };

    return (
        <header className='flex justify-between items-center bg-black-900'>
            <Link className='flex w-12 h-12 md:w-20 md:h-20 xl:w-24 xl:h-24' href={linkHome}>
                <svg className='my-auto mx-2 md:mx-3 xl:mx-6 w-8 md:w-14 xl:w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 42">
                    <path d="M5.62637 30.0045L8.84982 21.8186L12.7766 31.934L21.2747 7.3763H27.956L15.2967 41.3478H9.72894L5.62637 30.0045Z" fill="#682047" />
                    <path d="M26.7253 41.3478H32.9377L48 0.652161H40.381L29.4799 30.4138L25.4945 18.4857L22.4469 27.1394L26.7253 41.3478Z" fill="#065956" />
                    <path d="M0 12.8726H5.62637L2.75458 21.8186L0 12.8726Z" fill="#682047" />
                </svg>
            </Link>

            <li className='hidden ml-24 mr-auto gap-12 lg:flex'>
                <Link href={linkHome} className='relative uppercase text-white-200'>
                    <p>accueil</p>

                    {isLinkActive(linkHome) && <span className='block h-1 mt-1 bg-red' />}
                </Link>

                <Link href={linkGuides} className='relative uppercase text-white-200'>
                    <p>guides</p>

                    {isLinkActive(linkGuides) && <span className='block h-1 mt-1 bg-red' />}
                </Link>

                <Link href={linkDonjons} className='relative uppercase text-white-200'>
                    <p>donjons</p>

                    {isLinkActive(linkDonjons) && <span className='block h-1 mt-1 bg-red' />}
                </Link>

                <Link href={linkEquipements} className='relative uppercase text-white-200'>
                    <p>équipements</p>

                    {isLinkActive(linkEquipements) && <span className='block h-1 mt-1 bg-red' />}
                </Link>
            </li>

            <div
                onClick={() => { setNavOpen(!isNavOpen) }}
                className='flex lg:hidden w-12 h-12 md:w-20 md:h-20'
            >
                <svg className='m-auto w-8 h-8 md:w-14 md:h-14 stroke-white-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M5 8H27M5 16H27M5 24H27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            <ul className='hidden lg:flex gap-8 pr-6'>
                <Link href={linkTwitter} target="_blank" className='hover:scale-125 transition duration-300 ease-in-out'>
                    <svg className='w-8 h-8 fill-white-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                        <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.27998 9.09 5.10998 7.38 2.99998 4.79C2.62998 5.42 2.41998 6.16 2.41998 6.94C2.41998 8.43 3.16998 9.75 4.32998 10.5C3.61998 10.5 2.95998 10.3 2.37998 10V10.03C2.37998 12.11 3.85998 13.85 5.81998 14.24C5.19071 14.4122 4.53007 14.4362 3.88998 14.31C4.16158 15.1625 4.69351 15.9084 5.41099 16.4429C6.12847 16.9775 6.99543 17.2737 7.88998 17.29C6.37361 18.4904 4.49397 19.1393 2.55998 19.13C2.21998 19.13 1.87998 19.11 1.53998 19.07C3.43998 20.29 5.69998 21 8.11998 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
                    </svg>
                </Link>

                <Link href={linkTwitch} target="_blank" className='hover:scale-125 transition duration-300 ease-in-out'>
                    <svg className='w-8 h-8 fill-white-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M6.99999 2L3.42999 5.57V18.43H7.70999V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.70999V3.43H19.14V11.29Z" />
                    </svg>
                </Link>

                <Link href={linkYoutube} target="_blank" className='hover:scale-125 transition duration-300 ease-in-out'>
                    <svg className='w-8 h-8 fill-white-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" />
                    </svg>
                </Link>
            </ul>

            {isNavOpen && <SideBar navbarRef={navbarRef} handleNavLinkClick={() => { setNavOpen(false) }} />}
        </header>
    )
}

export default Navigation