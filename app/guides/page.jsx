import React from 'react'

import Image from 'next/image'

// Components
import CardGuide from '@components/cards/CardGuide'
import SearchBar from '@components/SearchBar'

// Asset
import Arrow from '@public/icons/arrow.svg'

// - Test
import ImgTest from '@public/images/wakfu_server.jpeg'

const titleTest = "Title";
const imgSrc = ImgTest;
const imgAlt = "Alt Test"
const descriptionTest = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quae sit itaque.";
const tagsTest = ['TAG 1', 'TAG 2', 'TAG 3', 'TAG 4'];

async function getData() {
    const res = await fetch('localhost:1337/api/guides');
    // http://localhost:1337/api/guides?populate=*

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Guides() {
    const data = await getData();
    const task = data.data;

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
                    <SearchBar />
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

            <section>
                {task.map(task => (
                    <div key={task.id}>
                        <h2>{task.attributes.titre}</h2>
                    </div>
                ))}
            </section>
        </main>
    );
}