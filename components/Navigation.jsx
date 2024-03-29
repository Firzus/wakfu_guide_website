"use client";

import { useRef, useState } from 'react';
import { usePathname } from 'next/navigation'

import Link from 'next/link'
import Image from 'next/image'

// Components
import SideBar from '@components/SideBar';

// Fonctions
import useOutsideClick from '@utils/useOutsideClick'

// Data
import Logo from '@public/icons/logo.svg'
import IconDropdown from '@public/icons/dropdown.svg'
import IconTwitch from '@public/icons/twitch.svg'
import IconYoutube from '@public/icons/youtube.svg'
import IconTwitter from '@public/icons/twitter.svg'

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
            <Link href={linkHome}>
                <Image
                    className='mx-2 w-8 h-12 lg:mx-6 lg:w-12 lg:h-20'
                    src={Logo}
                    alt='Wakfu Guide Logo'
                />
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
                className='flex lg:hidden w-12 h-12'
            >
                <Image
                    className='mx-auto'
                    src={IconDropdown}
                    alt='Open Side Bar'
                    width={32}
                    height={32}
                />
            </div>

            <ul className='hidden lg:flex gap-8 pr-6'>
                <Link href={linkTwitter} target="_blank" className='hover:scale-125 transition duration-300 ease-in-out'>
                    <Image
                        className='w-8 h-8'
                        src={IconTwitter}
                        alt='Lien Twitter Nozadah'
                    />
                </Link>

                <Link href={linkTwitch} target="_blank" className='hover:scale-125 transition duration-300 ease-in-out'>
                    <Image
                        className='w-8 h-8'
                        src={IconTwitch}
                        alt='Lien Twitch Nozadah'
                    />
                </Link>

                <Link href={linkYoutube} target="_blank" className='hover:scale-125 transition duration-300 ease-in-out'>
                    <Image
                        className='w-8 h-8'
                        src={IconYoutube}
                        alt='Lien Youtube Nozadah'
                    />
                </Link>
            </ul>

            {isNavOpen && <SideBar navbarRef={navbarRef} handleNavLinkClick={() => { setNavOpen(false) }} />}
        </header>
    )
}

export default Navigation