import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

// Components
import CardGuide from '@components/cards/CardGuide'

// Asset
import Arrow from '@public/icons/arrow.svg'

// - test
import ImgTest from '@public/images/wakfu_server.jpeg'

const titleTest = "Title";
const imgSrc = ImgTest;
const imgAlt = "Alt Test"
const descriptionTest = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae sit itaque.";
const tagsTest = ['TAG 1', 'TAG 2', 'TAG 3', 'TAG 4'];

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

            <section className='grid gap-y-4'>

                <CardGuide
                    link="/"
                    image={{
                        src: imgSrc,
                        alt: imgAlt
                    }}
                    title={titleTest}
                    description={descriptionTest}
                    tags={tagsTest}
                />

                <CardGuide
                    link="/"
                    image={{
                        src: imgSrc,
                        alt: imgAlt
                    }}
                    title={titleTest}
                    description={descriptionTest}
                    tags={tagsTest}
                />

                <CardGuide
                    link="/"
                    image={{
                        src: imgSrc,
                        alt: imgAlt
                    }}
                    title={titleTest}
                    description={descriptionTest}
                    tags={tagsTest}
                />

            </section>
        </main>
    )
}

export default Guides