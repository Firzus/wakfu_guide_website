'use client'

import { usePathname } from 'next/navigation'

const Breadcrumb = () => {
    const pathname = usePathname()
    const segments = pathname.split('/').filter(segment => segment !== '')

    function deslugify(str) {
        return str.replace(/-/g, ' ')
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }

    return (
        <ul className='flex items-center gap-1 text-xs md:text-sm font-light capitalize'>
            <li className={`${segments.length == 0 && "hidden"} flex items-center gap-1`}>
                <p className='text-white-300'>
                    accueil
                </p>

                <svg className='w-4 h-4 stroke-white-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M6.66663 4.66667L9.99996 8L6.66663 11.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </li>

            {segments.map((segment, index) => (
                <li key={index} className='flex items-center gap-1' >
                    {index > 0 &&
                        <svg key={index} className='w-4 h-4 stroke-white-300' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                            <path d="M6.66663 4.66667L9.99996 8L6.66663 11.3333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    }

                    <p className={`${segments.length === index + 1 ? "text-white-100" : "text-white-300"}`}>
                        {deslugify(segment)}
                    </p>
                </li>
            ))}
        </ul>
    )
}

export default Breadcrumb