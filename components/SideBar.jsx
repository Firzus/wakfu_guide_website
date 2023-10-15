import Link from 'next/link'

import { usePathname } from 'next/navigation'

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
                    <p className='text-2xl text-white-100 font-bold'>
                        Wakfu Guide
                    </p>

                    <nav onClick={handleNavLinkClick} className='w-full flex flex-col'>
                        <Link href={linkAccueil} className='flex items-center justify-end gap-4 py-4 mr-8' >
                            <p className='text-white-200 uppercase tracking-wider'>
                                accueil
                            </p>

                            <svg className="w-4 h-4 fill-white-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
                                <path d="M6.66665 13.8333V9.83333H9.33331V13.8333H12.6666V8.5H14.6666L7.99998 2.5L1.33331 8.5H3.33331V13.8333H6.66665Z" />
                            </svg>

                            {isLinkActive(linkAccueil) && <div className='absolute right-0 w-1 h-4 bg-red' />}
                        </Link>

                        <Link href={linkGuides} className='flex items-center justify-end gap-4 py-4 mr-8'>
                            <p className='text-white-200 uppercase tracking-wider'>
                                guides
                            </p>

                            <svg className="w-4 h-4 fill-white-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
                                <path d="M13.3333 15.1666H4.33333C3.71449 15.1666 3.121 14.9208 2.68342 14.4832C2.24583 14.0456 2 13.4522 2 12.8333V3.83331C2 3.30288 2.21071 2.79417 2.58579 2.4191C2.96086 2.04403 3.46957 1.83331 4 1.83331H13.3333C13.5101 1.83331 13.6797 1.90355 13.8047 2.02858C13.9298 2.1536 14 2.32317 14 2.49998V14.5C14 14.6768 13.9298 14.8464 13.8047 14.9714C13.6797 15.0964 13.5101 15.1666 13.3333 15.1666ZM12.6667 13.8333V11.8333H4.33333C4.06812 11.8333 3.81376 11.9387 3.62623 12.1262C3.43869 12.3137 3.33333 12.5681 3.33333 12.8333C3.33333 13.0985 3.43869 13.3529 3.62623 13.5404C3.81376 13.728 4.06812 13.8333 4.33333 13.8333H12.6667Z" />
                            </svg>

                            {isLinkActive(linkGuides) && <div className='absolute right-0 w-1 h-4 bg-red' />}
                        </Link>

                        <Link href={linkDonjons} className='flex items-center justify-end gap-4 py-4 mr-8'>
                            <p className='text-white-200 uppercase tracking-wider'>
                                donjons
                            </p>

                            <svg className="w-4 h-4 fill-white-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
                                <path d="M4.69865 9.43733L7.05531 11.7947L6.11331 12.7373L7.05665 13.6807L6.11398 14.6233L4.46398 12.9733L2.57798 14.8593L1.63531 13.9167L3.52131 12.03L1.87131 10.3807L2.81398 9.438L3.75665 10.38L4.69865 9.43733ZM1.99998 2.5L4.36398 2.502L12.242 10.3807L13.1853 9.438L14.1286 10.3807L12.4786 12.0307L14.364 13.9167L13.4213 14.8593L11.5353 12.9733L9.88598 14.6233L8.94265 13.6807L9.88531 12.7373L2.00131 4.854L1.99998 2.5ZM11.638 2.5L14 2.502L14.0013 4.85067L11.2993 7.552L8.94198 5.19533L11.6373 2.5H11.638Z" />
                            </svg>

                            {isLinkActive(linkDonjons) && <div className='absolute right-0 w-1 h-4 bg-red' />}
                        </Link>

                        <Link href={linkEquipements} className='flex items-center justify-end gap-4 py-4 mr-8'>
                            <p className='text-white-200 uppercase tracking-wider'>
                                équipements
                            </p>

                            <svg className="w-4 h-4 fill-white-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17">
                                <path d="M8.00002 7.16665L5.33335 3.43331L6.40002 1.83331H9.60002L10.6667 3.43331L8.00002 7.16665ZM10.3334 5.03331L9.53335 6.16665C11 6.76665 12 8.16665 12 9.83331C12 10.8942 11.5786 11.9116 10.8284 12.6617C10.0783 13.4119 9.06089 13.8333 8.00002 13.8333C6.93915 13.8333 5.92174 13.4119 5.17159 12.6617C4.42145 11.9116 4.00002 10.8942 4.00002 9.83331C4.00002 8.16665 5.00002 6.76665 6.46669 6.16665L5.66669 5.03331C3.86669 5.89998 2.66669 7.69998 2.66669 9.83331C2.66669 11.2478 3.22859 12.6044 4.22878 13.6045C5.22898 14.6047 6.58553 15.1666 8.00002 15.1666C9.41451 15.1666 10.7711 14.6047 11.7713 13.6045C12.7715 12.6044 13.3334 11.2478 13.3334 9.83331C13.3334 7.69998 12.1334 5.89998 10.3334 5.03331Z" />
                            </svg>

                            {isLinkActive(linkEquipements) && <div className='absolute right-0 w-1 h-4 bg-red' />}
                        </Link>
                    </nav>
                </header>

                <footer className='flex flex-col gap-4 px-8 py-4'>
                    <div className='flex flex-col gap-2 content-end'>
                        <p className='text-xs text-white-300 text-end font-light'>
                            Content : @Nozadah
                        </p>

                        <p className='text-xs text-white-300 text-end font-light'>
                            Design & Code : @Firzus
                        </p>
                    </div>

                    <div className='w-bar' />

                    <div className='flex items-center justify-between'>
                        <Link href={linkYoutube} target='_blank'>
                            <svg className='w-6 h-6 fill-white-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M10 15L15.19 12L10 9V15ZM21.56 7.17C21.69 7.64 21.78 8.27 21.84 9.07C21.91 9.87 21.94 10.56 21.94 11.16L22 12C22 14.19 21.84 15.8 21.56 16.83C21.31 17.73 20.73 18.31 19.83 18.56C19.36 18.69 18.5 18.78 17.18 18.84C15.88 18.91 14.69 18.94 13.59 18.94L12 19C7.81 19 5.2 18.84 4.17 18.56C3.27 18.31 2.69 17.73 2.44 16.83C2.31 16.36 2.22 15.73 2.16 14.93C2.09 14.13 2.06 13.44 2.06 12.84L2 12C2 9.81 2.16 8.2 2.44 7.17C2.69 6.27 3.27 5.69 4.17 5.44C4.64 5.31 5.5 5.22 6.82 5.16C8.12 5.09 9.31 5.06 10.41 5.06L12 5C16.19 5 18.8 5.16 19.83 5.44C20.73 5.69 21.31 6.27 21.56 7.17Z" />
                            </svg>
                        </Link>

                        <Link href={linkTwitter} target='_blank'>
                            <svg className='w-6 h-6 fill-white-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.27998 9.09 5.10998 7.38 2.99998 4.79C2.62998 5.42 2.41998 6.16 2.41998 6.94C2.41998 8.43 3.16998 9.75 4.32998 10.5C3.61998 10.5 2.95998 10.3 2.37998 10V10.03C2.37998 12.11 3.85998 13.85 5.81998 14.24C5.19071 14.4122 4.53007 14.4362 3.88998 14.31C4.16158 15.1625 4.69351 15.9084 5.41099 16.4429C6.12847 16.9775 6.99543 17.2737 7.88998 17.29C6.37361 18.4904 4.49397 19.1393 2.55998 19.13C2.21998 19.13 1.87998 19.11 1.53998 19.07C3.43998 20.29 5.69998 21 8.11998 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" />
                            </svg>
                        </Link>

                        <Link href={linkTwitch} target='_blank'>
                            <svg className='w-6 h-6 fill-white-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M11.64 5.93H13.07V10.21H11.64M15.57 5.93H17V10.21H15.57M6.99999 2L3.42999 5.57V18.43H7.70999V22L11.29 18.43H14.14L20.57 12V2M19.14 11.29L16.29 14.14H13.43L10.93 16.64V14.14H7.70999V3.43H19.14V11.29Z" />
                            </svg>
                        </Link>
                    </div>
                </footer>
            </section>
        </main>
    )
}

export default SideBar