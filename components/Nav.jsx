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
        <>
            <main className='flex justify-between items-center bg-black-900'>
                <Link href="/" className='flex w-12 h-12'>
                    <Image
                        src={Logo}
                        alt='Wakfu Guide Logo'
                        width={32}
                        height={48}
                        className='mx-auto'
                    />
                </Link>

                <div
                    onClick={() => { setNavOpen(!isNavOpen) }}
                    className='flex w-12 h-12'
                >
                    <Image
                        src={IconDropdown}
                        alt='Open Side Bar'
                        width={32}
                        height={32}
                        className='mx-auto'
                    />
                </div>
            </main>

            {isNavOpen &&
                <SideBar
                    navbarRef={navbarRef}
                    handleNavLinkClick={() => { setNavOpen(false) }}
                />
            }
        </>
    )
}

export default Nav