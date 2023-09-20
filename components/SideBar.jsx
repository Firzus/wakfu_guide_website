import Link from 'next/link'
import Image from 'next/image'

// Data
import IconYoutube from '@public/icons/youtube.svg'
import IconTwitch from '@public/icons/twitch.svg'
import IconTwitter from '@public/icons/twitter.svg'
import IconHome from '@public/icons/home.svg'
import IconGuide from '@public/icons/guide.svg'
import IconDonjon from '@public/icons/donjon.svg'
import IconStuff from '@public/icons/stuff.svg'

const SideBar = ({ navbarRef, handleNavLinkClick }) => {
    return (
        <main ref={navbarRef} className='side-bar-pos w-64 bg-black-700 flex flex-col justify-between side-shadow'>
            <header className='flex flex-col items-center gap-8 pt-8'>
                <p className='subtitle_1'>
                    Wakfu Guide
                </p>

                <nav onClick={handleNavLinkClick} className='w-full flex flex-col'>
                    <Link href="/" className='flex items-center justify-end gap-10 py-4' >
                        <div className='flex items-center gap-4'>
                            <p className='navigation'>
                                accueil
                            </p>

                            <Image
                                src={IconHome}
                                alt='Icone Accueil'
                                width={16}
                                height={16}
                            />
                        </div>

                        <hr className='active-page' />
                    </Link>

                    <Link href="/guides" className='flex items-center justify-end gap-10 py-4'>
                        <div className='flex items-center gap-4'>
                            <p className='navigation'>
                                guides
                            </p>

                            <Image
                                src={IconGuide}
                                alt='Icone Guides'
                                width={16}
                                height={16}
                            />
                        </div>

                        <hr className='active-page' />
                    </Link>

                    <Link href="/donjons" className='flex items-center justify-end gap-10 py-4'>
                        <div className='flex items-center gap-4'>
                            <p className='navigation'>
                                donjons
                            </p>

                            <Image
                                src={IconDonjon}
                                alt='Icone Donjons'
                                width={16}
                                height={16}
                            />
                        </div>

                        <hr className='active-page' />
                    </Link>

                    <Link href="/stuffs" className='flex items-center justify-end gap-10 py-4'>
                        <div className='flex items-center gap-4'>
                            <p className='navigation'>
                                équipements
                            </p>

                            <Image
                                src={IconStuff}
                                alt='Icone Equipements'
                                width={16}
                                height={16}
                            />
                        </div>

                        <div className='active-page' />
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
                    <Link href="https://youtube.com/@Nozadah?si=0zH3JNQ-b6juCCiG">
                        <Image
                            src={IconYoutube}
                            alt='Lien Chaîne Youtube Nozadah'
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="https://www.twitch.tv/nozadah">
                        <Image
                            src={IconTwitch}
                            alt='Lien Chaîne Twitch Nozadah'
                            width={24}
                            height={24}
                        />
                    </Link>
                    <Link href="https://twitter.com/Nozadah">
                        <Image
                            src={IconTwitter}
                            alt='Lien Twitter Nozadah'
                            width={24}
                            height={24}
                        />
                    </Link>
                </div>
            </footer>
        </main>
    )
}

export default SideBar