import Image from 'next/image'

// Components
import CardGuide from '@components/cards/CardGuide'
import SearchBar from '@components/SearchBar'

// Asset
import Arrow from '@public/icons/arrow.svg'

const localLinkGuides = "http://127.0.0.1:1337/api/guides?populate=*"
const localLinkTags = "http://127.0.0.1:1337/api/tags"

async function getGuides() {
    const response = await fetch(localLinkGuides);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}

async function getTags() {
    const response = await fetch(localLinkTags);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
}

export default async function Guides() {
    const { data: guides } = await getGuides();
    const { data: tags } = await getTags();
    // console.log(tags);

    return (
        <main className='container pt-8 pb-4 flex flex-col gap-4'>
            <nav className='flex items-center gap-1'>
                <p className='extra_small text-white-300'>
                    Accueil
                </p>

                <Image
                    src={Arrow}
                    alt='Arrow'
                    width={16}
                    height={16}
                />

                <p className='extra_small text-white-100'>
                    Guides
                </p>
            </nav>

            <header className='flex flex-col gap-2'>
                <h1 className='title text-white-100 capitalize'>
                    guides
                </h1>

                <p className='small text-white-200 w-3/4'>
                    Parcourez le Monde des Douze d’un claquement de doigt avec nos guides.
                </p>
            </header>

            {/* FILTERS */}

            {/* <section className='flex flex-col gap-2'>
                <div className='flex items-center gap-2'>

                    <section className='bg-green grow h-full rounded-full'>
                        rechercher
                    </section>

                    <TagsDropdown tags={tags} currentActiveTags={currentActiveTags} onTagChange={handleTagChange} />
                </div>

                <ul className='flex items-center gap-1 whitespace-nowrap overflow-x-scroll no-scrollbar'>
                    {currentActiveTags.map(tag => (
                        <li className='extra_small uppercase text-center text-white-300 bg-black-900 px-2 py-1 rounded-full' key={tag.id}>
                            {tag.attributes.label}
                        </li>
                    ))}
                </ul>
            </section> */}

            <hr className="separator" />

            <section className='grid gap-y-4'>
                {guides.map(guide => (
                    <CardGuide
                        key={guide.id}
                        link={/guides/ + guide.id}
                        image={{
                            src: guide.attributes.illustration.data.attributes.url,
                            alt: guide.attributes.illustration.data.attributes.alternativeText,
                            width: guide.attributes.illustration.data.attributes.width,
                            height: guide.attributes.illustration.data.attributes.height
                        }}
                        title={guide.attributes.titre}
                        description={guide.attributes.description}
                        tags={guide.attributes.tags.data.map(tag => tag.attributes.label)}
                    />
                ))}
            </section>

        </main>
    );
}