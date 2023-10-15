import Image from 'next/image'

// Asset
import DefaultBossImage from '@public/images/defaultBoss.png'

const CardDonjon = ({
    expend,
    name,
    localisation,
    imageBoss,
    nameBoss,
    level
}) => {

    return (
        <section className={`flex flex-col gap-2 p-2 rounded bg-black-900 ${expend ? "md:gap-4 p-4" : ""}`} >
            <header className={`capitalize text-white-100 md:text-lg md:font-semibold ${expend ? 'text-xl font-semibold md:hidden' : ''}`}>
                {name}
            </header>
            <main className='flex gap-4'>
                <figure className={`h-fit p-2 rounded-full bg-black-700 ${expend ? "md:p-4" : ""}`}>
                    <Image
                        className={`w-10 h-10 ${expend ? "md:w-24 md:h-24" : ""}`}
                        src={imageBoss}
                    />
                </figure>

                <ul className='flex flex-col justify-between'>
                    <p className={`hidden capitalize leading-none text-white-100 ${expend ? "md:block md:text-3xl md:font-bold md:pb-1" : ""}`}>
                        {name}
                    </p>

                    <li className='flex items-center gap-2'>
                        <svg className={`fill-white-300 w-4 h-4 ${expend ? "md:w-6 md:h-6" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M14.5 9.5L12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5ZM12 13.7C11.1 13.7 10.3 13 10.3 12C10.3 11.1 11 10.3 12 10.3C12.9 10.3 13.7 11 13.7 12C13.7 12.9 12.9 13.7 12 13.7Z" />
                        </svg>

                        <span className={`text-xs font-light leading-none uppercase text-white-300 ${expend ? "text-base" : ""}`}>
                            {localisation}
                        </span>
                    </li>

                    <li className='flex items-center gap-2'>
                        <svg className={`fill-white-300 w-4 h-4 ${expend ? "md:w-6 md:h-6" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M10.5967 1.13381L10.4063 2.7524L11.9385 3.95362L13.0518 1.60846C12.2012 1.17993 11.3984 1.15312 10.5967 1.13381ZM7.81642 2.86373C6.67979 3.00107 5.80314 3.6089 5.05665 4.44866H5.05806L9.57714 7.38276L7.81642 2.86373ZM14.1035 4.16015L14.978 8.16796L10.7081 7.04882L12.6094 10.9658L6.01904 6.77638C5.83314 7.0049 5.65811 7.24373 5.49311 7.49263C4.14339 9.53006 3.52192 12.2319 3.48193 14.8389C5.36265 15.7589 6.47457 16.7204 6.95218 17.7246C7.38142 18.6269 7.20882 19.5555 6.65486 20.2676C7.83676 21.3636 9.87226 22.0315 11.959 22.0649C14.0596 22.0986 16.1765 21.4986 17.5195 20.247C17.2367 19.9218 17.0315 19.5745 16.9336 19.1953C16.8024 18.6867 16.889 18.138 17.1768 17.6353C17.7279 16.6724 18.9414 15.7948 20.9297 14.8373C20.8884 12.3687 20.2802 9.67002 18.9375 7.59956C17.8406 5.90807 16.2868 4.62712 14.1035 4.1601V4.16015ZM8.51228 12.0747C9.81306 12.0747 10.8677 13.1294 10.8677 14.4302C10.8677 15.731 9.81306 16.7856 8.51228 16.7856C7.2114 16.7856 6.15681 15.731 6.15681 14.4302C6.15681 13.1294 7.2114 12.0747 8.51228 12.0747ZM15.5186 12.0747C16.8194 12.0747 17.8741 13.1294 17.8741 14.4302C17.8741 15.731 16.8194 16.7856 15.5186 16.7856C14.2178 16.7856 13.1631 15.731 13.1631 14.4302C13.1631 13.1294 14.2178 12.0747 15.5186 12.0747ZM12.0147 16.1118C12.6587 17.4714 13.1702 18.8316 13.4238 20.1914C12.7312 20.7958 11.4898 20.8835 10.6055 20.1914C10.9484 18.8316 11.3611 17.4714 12.0147 16.1118Z" />
                        </svg>

                        <span className={`text-xs font-light leading-none capitalize text-white-300 ${expend ? "text-base" : ""}`}>
                            {nameBoss}
                        </span>
                    </li>

                    <li className='flex items-center gap-2'>
                        <svg className={`fill-white-300 w-4 h-4 ${expend ? "md:w-6 md:h-6" : ""}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5.25 3C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21C5.84674 21 6.41903 20.7629 6.84099 20.341C7.26295 19.919 7.5 19.3467 7.5 18.75V5.25C7.5 4.65326 7.26295 4.08097 6.84099 3.65901C6.41903 3.23705 5.84674 3 5.25 3ZM11.25 7.5C10.6533 7.5 10.081 7.73705 9.65901 8.15901C9.23705 8.58097 9 9.15326 9 9.75V18.75C9 19.3467 9.23705 19.919 9.65901 20.341C10.081 20.7629 10.6533 21 11.25 21C11.8467 21 12.419 20.7629 12.841 20.341C13.2629 19.919 13.5 19.3467 13.5 18.75V9.75C13.5 9.15326 13.2629 8.58097 12.841 8.15901C12.419 7.73705 11.8467 7.5 11.25 7.5ZM17.25 12C16.6533 12 16.081 12.2371 15.659 12.659C15.2371 13.081 15 13.6533 15 14.25V18.75C15 19.3467 15.2371 19.919 15.659 20.341C16.081 20.7629 16.6533 21 17.25 21C17.8467 21 18.419 20.7629 18.841 20.341C19.2629 19.919 19.5 19.3467 19.5 18.75V14.25C19.5 13.6533 19.2629 13.081 18.841 12.659C18.419 12.2371 17.8467 12 17.25 12Z" />
                        </svg>

                        <span className={`text-xs font-light leading-none capitalize text-white-300 ${expend ? "text-base" : ""}`}>
                            {'niveau ' + level}
                        </span>
                    </li>
                </ul>
            </main>
        </section >
    )
}

CardDonjon.defaultProps = {
    expend: false,
    name: 'default name',
    localisation: 'default localisation',
    imageBoss: DefaultBossImage,
    nameBoss: 'default boss',
    level: '0'
}

export default CardDonjon