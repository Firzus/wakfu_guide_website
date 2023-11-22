'use client'

import React, { useEffect, useState, useRef } from "react";

// Component
import CardDonjon from "@components/cards/CardDonjon";

export default function CardTranche({
    level,
    donjons,
    isDrop,
    onToggle
}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);
    const [isLargeScreen, setIsLargeScreen] = useState(false);

    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(null);

    useEffect(() => {
        const updateCardWidth = () => {
            if (cardRef.current) {
                setCardWidth(cardRef.current.offsetWidth);
            }
        };

        const handleResize = () => {
            updateCardWidth();

            const width = window.innerWidth;

            setVisibleCount(width >= 768 && width < 1024 ? 2 : 3);
            setIsLargeScreen(width >= 1024 ? true : false);
        };

        // Mise à jour initiale
        handleResize();

        // Mise à jour lors du redimensionnement de la fenêtre
        window.addEventListener('resize', handleResize);

        // Nettoyage
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleNext = () => {
        setCurrentIndex(prevIndex => Math.min(prevIndex + 1, donjons.length - visibleCount));
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex => Math.max(prevIndex - 1, 0));
    };

    return (
        <>
            <section
                ref={cardRef}
                onClick={onToggle}
                className='flex justify-between bg-black-700 rounded px-4 py-2 md:py-4 select-none'
            >
                <main className="flex flex-col gap-1">
                    <p className='leading-tight font-light text-xs lg:text-sm capitalize text-white-300'>
                        niveau
                    </p>

                    <p className='leading-tight font-semibold text-lg lg:text-xl text-white-200'>
                        {level}
                    </p>
                </main>

                <svg
                    className={`${!isDrop && "rotate-180"} stroke-white-200 stroke-2 w-8 h-8 fill-none`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                >
                    <path d="M9.33337 18.6667L16 12L22.6667 18.6667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </section>

            {isDrop && donjons.length > 0 &&
                <section className="md:col-span-3 flex flex-col md:flex-row gap-2 lg:gap-4">
                    <button onClick={handlePrev} className="rounded p-2 bg-black-900">
                        <svg
                            className="mx-auto stroke-white-300 stroke-2 w-8 h-8 fill-none md:-rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                        >
                            <path d="M9.33337 18.6667L16 12L22.6667 18.6667" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    <section className="grow overflow-hidden flex flex-col md:flex-row gap-2 lg:gap-4">
                        {donjons.slice(currentIndex, currentIndex + visibleCount).map((donjon, index) => (
                            <CardDonjon
                                link={donjon.attributes.slug}
                                key={index}
                                isLargeScreen={isLargeScreen}
                                sideCardWidth={(2 * cardWidth - 96) / 2 - 16}
                                midCardWidth={index == 1 ? cardWidth : null}
                                name={donjon.attributes.nom}
                                localisation={donjon.attributes.localisation}
                                imageBoss={donjon.attributes.imageBoss}
                                nameBoss={donjon.attributes.nomBoss}
                                level={donjon.attributes.niveau}
                            />
                        ))}
                    </section>

                    <button onClick={handleNext} className="rounded p-2 bg-black-900">
                        <svg
                            className="mx-auto stroke-white-300 stroke-2 w-8 h-8 fill-none md:-rotate-90"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                        >
                            <path d="M22.6666 13.3333L16 20L9.33329 13.3333" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </section >
            }
        </>
    )
}