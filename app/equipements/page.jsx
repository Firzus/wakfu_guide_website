import React from 'react';

// Component
import Breadcrumb from '@components/Breadcrumb'
import CardEquipement from '@components/cards/CardEquipement'

async function getEquipments() {
    const urlApi = "https://wakfu-guide-api-cckfj.ondigitalocean.app/api/equipements?populate=*";
    const res = await fetch(urlApi, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json()
}

export default async function Equipment() {

    const { data: equipments } = await getEquipments()
    // console.log(equipments);

    return (
        <section className='w-full grow flex flex-col gap-4'>
            <Breadcrumb />

            <header className='w-3/4'>
                <p className='text-3xl font-bold capitalize text-white-100'>
                    équipements
                </p>

                <p className='text-sm text-white-300'>
                    Vous cherchez les équipements les plus optimisés ? Vous êtes au bon endroit !
                </p>
            </header>

            <div className='w-bar' />

            <main className='space-y-4 columns-1 md:columns-2 xl:columns-3'>
                {equipments.map((equipment, index) => (
                    <React.Fragment key={index} >
                        <CardEquipement
                            name={equipment.attributes.nom}
                            tags={equipment.attributes.tags}
                            equipmentTop={equipment.attributes.haut}
                            equipmentBot={equipment.attributes.bas}
                            description={equipment.attributes.description}
                            classes={equipment.attributes.classes}
                            lien={equipment.attributes.lien}
                        />
                    </React.Fragment>
                ))}
            </main>

        </section >
    )
}