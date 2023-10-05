"use client";

import { useRef, useState } from 'react';

import Link from 'next/link'
import Image from 'next/image'

// Components
import SideBar from '@components/SideBar';

// Fonctions
import useOutsideClick from '@utils/useOutsideClick'

// Data
import Logo from '@public/icons/logo.svg'
import IconDropdown from '@public/icons/dropdown.svg'

const Nav = () => {
    const [isNavOpen, setNavOpen] = useState(false);
    const navbarRef = useRef(null);

    useOutsideClick(navbarRef, () => {
        if (isNavOpen) {
            setNavOpen(false);
        }
    });

    return (
        <main className='flex justify-between items-center bg-black-900'>
            <Link href="/">
                <Image
                    className='mx-2 xl:mx-6 w-8 xl:w-12 h-12 xl:h-20'
                    src={Logo}
                    alt='Wakfu Guide Logo'
                />
            </Link>

            <div
                onClick={() => { setNavOpen(!isNavOpen) }}
                className='flex w-12 h-12'
            >
                <Image
                    className='mx-auto'
                    src={IconDropdown}
                    alt='Open Side Bar'
                    width={32}
                    height={32}
                />
            </div>

            {isNavOpen &&
                <>
                    <div className='side-bar-pos bg-black-900 w-full opacity-60' />

                    <SideBar
                        navbarRef={navbarRef}
                        handleNavLinkClick={() => { setNavOpen(false) }}
                    />
                </>
            }

        </main>
    )
}

export default Nav