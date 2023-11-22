'use client'

import { useState } from "react";

// Component
import CardTranche from "@components/cards/CardTranche";

export default function GridDonjon({
    donjons,
    tranches
}) {
    const [openTrancheIndex, setOpenTrancheIndex] = useState(0);

    const toggleTranche = (index) => {
        if (openTrancheIndex === index) {
            setOpenTrancheIndex(null);
        } else {
            setOpenTrancheIndex(index);
        }
    };

    const filter = (intervalle) => {
        const [minLevel, maxLevel] = intervalle.split(' - ').map(Number);
        return donjons.filter(donjon => {
            const niveau = donjon.attributes.niveau;
            return niveau >= minLevel && niveau <= maxLevel;
        });
    };

    return (
        <main className='grid md:grid-flow-row-dense grid-cols-1 md:grid-cols-3 gap-2 md:gap-4'>
            {tranches.map((tranche, index) => {
                return (
                    <CardTranche
                        key={index}
                        level={tranche.attributes.intervalle}
                        donjons={filter(tranche.attributes.intervalle)}
                        isDrop={openTrancheIndex === index}
                        onToggle={() => toggleTranche(index)}
                    />
                );
            })}
        </main >
    )
}