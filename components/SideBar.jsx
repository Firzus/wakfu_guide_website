import Link from 'next/link'
import Image from 'next/image'

import { usePathname } from 'next/navigation'

// Data
import IconYoutube from '@public/icons/youtube.svg'
import IconTwitch from '@public/icons/twitch.svg'
import IconTwitter from '@public/icons/twitter.svg'
import IconHome from '@public/icons/home.svg'
import IconGuide from '@public/icons/guide.svg'
import IconDonjon from '@public/icons/donjon.svg'
import IconEquipement from '@public/icons/stuff.svg'

const SideBar = ({ navbarRef, handleNavLinkClick }) => {
    const linkTwitter = "https://twitter.com/Nozadah";
    const linkTwitch = "https://www.twitch.tv/nozadah";
    const linkYoutube = "https://www.youtube.com/@Nozadah";

    const linkAccueil = "/";
    const linkGuides = "/guides"
    const linkDonjons = "/donjons"
    const linkEquipements = "/equipements"

    const pathname = usePathname()

    const isLinkActive = (path) => {
        return path === pathname;
    };

    return (
        <main className='2xl:hidden absolute w-full h-screen z-50 top-0 left-0 bg-black-900/75'>
            <section ref={navbarRef} className='ml-auto w-64 h-full bg-black-700 flex flex-col justify-between side-shadow'>
                <header className='flex flex-col items-center gap-8 pt-8'>
                    <p className='subtitle_1'>
                        Wakfu Guide
                    </p>

                    <nav onClick={handleNavLinkClick} className='w-full flex flex-col'>
                        <Link href={linkAccueil} className='flex items-center justify-end gap-4 py-4 mr-8' >
                            <p className='navigation'>
                                accueil
                            </p>

                            <Image
                                src={IconHome}
                                alt='Icone Accueil'
                                width={16}
                                height={16}
                            />

                            {isLinkActive(linkAccueil) && <div className='absolute right-0 w-1 h-4 bg-red' />}
                        </Link>

                        <Link href={linkGuides} className='flex items-center justify-end gap-4 py-4 mr-8'>
                            <p className='navigation'>
                                guides
                            </p>

                            <Image
                                src={IconGuide}
                                alt='Icone Guides'
                                width={16}
                                height={16}
                            />

                            {isLinkActive(linkGuides) && <div className='absolute right-0 w-1 h-4 bg-red' />}
                        </Link>

                        <Link href={linkDonjons} className='flex items-center justify-end gap-4 py-4 mr-8'>
                            <p className='navigation'>
                                donjons
                            </p>

                            <Image
                                src={IconDonjon}
                                alt='Icone Donjons'
                                width={16}
                                height={16}
                            />

                            {isLinkActive(linkDonjons) && <div className='absolute right-0 w-1 h-4 bg-red' />}
                        </Link>

                        <Link href={linkEquipements} className='flex items-center justify-end gap-4 py-4 mr-8'>
                            <p className='navigation'>
                                équipements
                            </p>

                            <Image
                                src={IconEquipement}
                                alt='Icone Equipements'
                                width={16}
                                height={16}
                            />

                            {isLinkActive(linkEquipements) && <div className='absolute right-0 w-1 h-4 bg-red' />}
                        </Link>
                    </nav>
                </header>

                <footer className='flex flex-col gap-4 px-8 py-4'>
                    <div className='flex flex-col gap-2 content-end'>
                        <p className='small text-white-300 text-end'>
                            Content : @Nozadah
                        </p>

                        <p className='small text-white-300 text-end'>
                            Design & Code : @Firzus
                        </p>
                    </div>

                    <div className='w-bar' />

                    <div className='flex items-center justify-between'>
                        <Link href={linkYoutube} target='_blank'>
                            <Image
                                src={IconYoutube}
                                alt='Lien Chaîne Youtube Nozadah'
                                width={24}
                                height={24}
                            />
                        </Link>

                        <Link href={linkTwitch} target='_blank'>
                            <Image
                                src={IconTwitch}
                                alt='Lien Chaîne Twitch Nozadah'
                                width={24}
                                height={24}
                            />
                        </Link>

                        <Link href={linkTwitter} target='_blank'>
                            <Image
                                src={IconTwitter}
                                alt='Lien Twitter Nozadah'
                                width={24}
                                height={24}
                            />
                        </Link>
                    </div>
                </footer>
            </section>
        </main>
    )
}

export default SideBar