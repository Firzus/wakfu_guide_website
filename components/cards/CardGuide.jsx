import Image from 'next/image'
import Link from 'next/link'

// Dev Only
const localImg = "http://127.0.0.1:1337"

const CardGuide = ({
    link,
    title,
    description,
    tags = [],
    image: {
        src,
        alt,
        width,
        height
    }
}) => {
    return (
        <Link href={link} className='bg-black-700 flex flex-col w-full sm:w-1/2 rounded overflow-hidden'>
            <Image
                className='object-cover h-24 w-full'
                src={localImg + src}
                alt={alt}
                width={width}
                height={height}
            />

            <main className='flex flex-col pl-4 py-4 gap-2'>
                <h2 className='pr-4 subtitle_2 text-white-100'>
                    {title}
                </h2>

                <ul className='flex items-center whitespace-nowrap gap-1 overflow-x-scroll no-scrollbar'>
                    {tags.map(tag => (
                        <li key={tag} className='snap-center extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full'>
                            {tag}
                        </li>
                    ))}
                </ul>

                <p className='pr-4 extra_small text-white-200'>
                    {description}
                </p>
            </main>
        </Link>
    )
}

export default CardGuide