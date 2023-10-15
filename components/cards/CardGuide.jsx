import Image from 'next/image'

// Assets
import DefaultIllustration from '@public/images/defaultIllustration.jpeg'

const CardGuide = ({
    illustration,
    title,
    tags,
    description
}) => {
    return (
        <section className='bg-black-700 rounded-b'>
            <Image
                className='h-24 object-cover rounded-t'
                src={illustration}
                alt=''
            />

            <main className='flex flex-col gap-2 py-4'>
                <p className='px-4 text-white-100 font-semibold capitalize text-lg md:text-xl'>
                    {title}
                </p>

                <ul className="ml-4 flex gap-1 items-center overflow-x-scroll no-scrollbar">
                    {tags.map(tag => (
                        <li key={tag} className='bg-black-900 whitespace-nowrap rounded-full px-2 py-1 text-xs uppercase text-white-300'>
                            {tag}
                        </li>
                    ))}
                </ul>

                <p className='px-4 text-sm text-white-300'>
                    {description}
                </p>
            </main>
        </section>
    )
}

CardGuide.defaultProps = {
    illustration: DefaultIllustration,
    title: "default title",
    tags: ['tag first', 'tag second', 'tag third', 'tag fourth', 'tag fifh', 'tag sixth'],
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
}

export default CardGuide