import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

// Data

// Asset
import Arrow from '@public/icons/arrow.svg'
// - test
import ImgTest from '@public/images/wakfu_server.jpeg'

const Guides = () => {
    return (
        <main className='container pt-8 pb-4 flex flex-col gap-4'>
            <nav className='flex items-center gap-1'>
                <p className='extra_small text-white-300'>
                    Accueil
                </p>

                <Image
                    src={Arrow}
                    alt='Arrow'
                    width={16}
                    height={16}
                />

                <p className='extra_small text-white-100'>
                    Guides
                </p>
            </nav>

            <header className='flex flex-col gap-2'>
                <h1 className='title text-white-100 capitalize'>
                    guides
                </h1>

                <p className='small text-white-200 w-3/4'>
                    Parcourez le Monde des Douze d’un claquement de doigt avec nos guides.
                </p>
            </header>

            <section className='flex flex-col gap-2'>
                <div className='flex items-center w-full h-8 bg-black-900'>

                </div>

                <ul className='flex items-center gap-1 whitespace-nowrap overflow-x-scroll no-scrollbar'>
                    <li className='extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                        HAVRE-MONDE
                    </li>

                    <li className='extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                        pvm
                    </li>

                    <li className='extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                        pvp
                    </li>
                </ul>
            </section>

            <div className='bg-white-100 opacity-20 h-[1px]' />

            <section className='grid gap-2'>

                <Link href="/" className='bg-black-700 flex flex-col w-full sm:w-1/2 rounded overflow-hidden'>
                    <Image
                        src={ImgTest}
                        alt='Img Test'
                        className='object-cover h-24'
                    />

                    <main className='flex flex-col pl-4 py-4 gap-y-4'>
                        <h2 className='pr-4 subtitle_2 text-white-100'>
                            Lizard
                        </h2>

                        <ul className='flex items-center whitespace-nowrap gap-1 overflow-x-scroll no-scrollbar'>
                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>

                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>

                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>

                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>
                        </ul>

                        <p className='pr-4 extra_small text-white-200'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica.
                        </p>
                    </main>
                </Link>

                <Link href="/" className='bg-black-700 flex flex-col w-full sm:w-1/2 rounded overflow-hidden'>
                    <Image
                        src={ImgTest}
                        alt='Img Test'
                        className='object-cover h-24'
                    />

                    <main className='flex flex-col pl-4 py-4 gap-y-4'>
                        <h2 className='pr-4 subtitle_2 text-white-100'>
                            Lizard
                        </h2>

                        <ul className='flex items-center whitespace-nowrap gap-1 overflow-x-scroll no-scrollbar'>
                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>

                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>

                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>

                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>
                        </ul>

                        <p className='pr-4 extra_small text-white-200'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica.
                        </p>
                    </main>
                </Link>

                <Link href="/" className='bg-black-700 flex flex-col w-full sm:w-1/2 rounded overflow-hidden'>
                    <Image
                        src={ImgTest}
                        alt='Img Test'
                        className='object-cover h-24'
                    />

                    <main className='flex flex-col pl-4 py-4 gap-y-4'>
                        <h2 className='pr-4 subtitle_2 text-white-100'>
                            Lizard
                        </h2>

                        <ul className='flex items-center whitespace-nowrap gap-1 overflow-x-scroll no-scrollbar'>
                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>

                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>

                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>

                            <li className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                                HAVRE-MONDE
                            </li>
                        </ul>

                        <p className='pr-4 extra_small text-white-200'>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica.
                        </p>
                    </main>
                </Link>

            </section>
        </main>
    )
}

export default Guides