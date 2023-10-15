import Image from 'next/image'
import Link from 'next/link'

// Assets
import DefaultTopEquipment from '@public/images/defaultTopEquipment.png'
import DefaultBotEquipment from '@public/images/defaultBotEquipment.png'
import DefaultClasse from '@public/images/defaultClasse.png'

const CardEquipement = ({
    name,
    tags = [],
    description,
    equipmentTop,
    equipmentBot,
    classes = [],
    lien,
}) => {
    return (
        <section className="flex flex-col gap-4 py-4 bg-black-700 overflow-hidden rounded">
            <header className="flex flex-col gap-2 pl-4">
                <p className="text-white-100 capitalize">
                    {name}
                </p>

                <ul className="flex gap-1 items-center overflow-x-scroll no-scrollbar">
                    {tags.map(tag => (
                        <li key={tag} className='bg-black-900 whitespace-nowrap rounded-full px-2 py-1 text-xs uppercase text-white-300'>
                            {tag}
                        </li>
                    ))}
                </ul>
            </header>

            <section className='px-4 text-sm text-white-300' dangerouslySetInnerHTML={{ __html: description }} />

            <section className="flex flex-col gap-1 px-4">
                <Image
                    className='w-full'
                    src={equipmentTop}
                    alt=''
                />

                <Image
                    className='w-full'
                    src={equipmentBot}
                    alt=''
                />
            </section>

            <footer className='px-4 flex justify-between gap-2'>
                <ul className='flex'>
                    {classes.map((classe, index) => (
                        <li key={index} className={`inline-block ${index > 0 && `-ml-3`} z-${classes.length - index}`}>
                            <Image
                                className='h-8 w-8 rounded-full'
                                src={classe}
                                alt=''
                            />
                        </li>
                    ))}
                </ul>

                <Link className='flex gap-1 items-end' href={lien} target='_blank'>
                    <p className='text-sm font-light whitespace-nowrap leading-none uppercase text-white-300'>
                        lien builder
                    </p>

                    <svg className='fill-white-300 h-4 w-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path d="M6.66667 4V5.33333H3.33333V12.6667H10.6667V9.33333H12V13.3333C12 13.5101 11.9298 13.6797 11.8047 13.8047C11.6797 13.9298 11.5101 14 11.3333 14H2.66667C2.48986 14 2.32029 13.9298 2.19526 13.8047C2.07024 13.6797 2 13.5101 2 13.3333V4.66667C2 4.48986 2.07024 4.32029 2.19526 4.19526C2.32029 4.07024 2.48986 4 2.66667 4H6.66667ZM14 2V8L11.4707 5.47133L7.47133 9.47133L6.52867 8.52867L10.528 4.52867L8 2H14Z" />
                    </svg>
                </Link>
            </footer>
        </section >
    )
}

CardEquipement.defaultProps = {
    name: "default name",
    tags: ['tag first', 'tag second', 'tag third', 'tag fourth', 'tag fifh', 'tag sixth'],
    description: "<p>Voici un stuff <strong>vreuuuuuumant</strong> ... MDR.</p><p>Bon aller go retourner au travail.</p>",
    equipmentTop: DefaultTopEquipment,
    equipmentBot: DefaultBotEquipment,
    classes: [DefaultClasse, DefaultClasse, DefaultClasse],
    lien: 'https://www.zenithwakfu.com/builder',
}

export default CardEquipement