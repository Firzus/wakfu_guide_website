import Image from 'next/image'
import Link from 'next/link'

// Assets
import DefaultIllustration from '@public/images/defaultIllustration.jpeg'

const CardGuide = ({
    link,
    illustration,
    title,
    tags,
    description
}) => {
    const urlAPI = "https://wakfu-guide-api-cckfj.ondigitalocean.app"
    const tagArray = tags.split(", ").map(tag => tag.trim());

    return (
        <section className='bg-black-700 rounded-b break-inside-avoid'>
            <Link href={`/guides/` + link}>
                <Image
                    className='h-24 object-cover rounded-t'
                    src={urlAPI + illustration.data.attributes.url}
                    width={illustration.data.attributes.width}
                    height={illustration.data.attributes.height}
                    alt={illustration.data.attributes.alternativeText == null && illustration.data.attributes.name}
                />

                <main className='flex flex-col gap-2 py-4'>
                    <p className='px-4 text-white-100 font-semibold capitalize text-lg md:text-xl'>
                        {title}
                    </p>

                    <ul className="ml-4 flex gap-1 items-center overflow-x-scroll no-scrollbar">
                        {tagArray.map((tag, index) => (
                            <li key={index} className='bg-black-900 whitespace-nowrap rounded-full px-2 py-1 text-xs uppercase text-white-300'>
                                {tag}
                            </li>
                        ))}
                    </ul>

                    <p className='px-4 text-sm text-white-300'>
                        {description}
                    </p>
                </main>
            </Link >
        </section>
    )
}

CardGuide.defaultProps = {
    illustration: DefaultIllustration,
    title: "default title",
    tags: "tag first, tag second, tag third, tag fourth, tag fifh, tag sixth",
    description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica."
}

export default CardGuide