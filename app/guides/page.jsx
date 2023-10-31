import React from 'react';

// Component
import Breadcrumb from '@components/Breadcrumb'
import CardGuide from '@components/cards/CardGuide';

async function getGuides() {
    const urlApi = "https://wakfu-guide-api-cckfj.ondigitalocean.app/api/guides?populate=*";
    const res = await fetch(urlApi, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json()
}

export default async function Guides() {
    const { data: guides } = await getGuides()

    return (
        <section className='w-full grow flex flex-col gap-4'>
            <Breadcrumb />

            <header className='w-3/4'>
                <p className='text-3xl font-bold capitalize text-white-100'>
                    guides
                </p>

                <p className='text-sm text-white-300'>
                    Parcourez le Monde des Douze d’un claquement de doigt avec nos guides.
                </p>
            </header>

            <div className='w-bar' />

            <main className='space-y-4 columns-1 md:columns-2 xl:columns-3'>
                {guides.map((guide, index) => (
                    <CardGuide
                        key={index}
                        link={guide.attributes.slug}
                        illustration={guide.attributes.illustration}
                        title={guide.attributes.titre}
                        tags={guide.attributes.tags}
                        description={guide.attributes.description}
                    />
                ))}
            </main>
        </section >
    )
}