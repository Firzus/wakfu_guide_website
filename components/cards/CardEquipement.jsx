import Image from 'next/image'
import Link from 'next/link'

import Markdown from 'markdown-to-jsx'

// Assets
import DefaultTopEquipment from '@public/images/defaultTopEquipment.png'
import DefaultBotEquipment from '@public/images/defaultBotEquipment.png'

import AllClass from '@public/images/classes/allClass.png'
import ClasseFeca from '@public/images/classes/feca.jpg'
import ClasseOsamodas from '@public/images/classes/osamodas.jpg'
import ClasseEnutrof from '@public/images/classes/enutrof.jpg'
import ClasseSram from '@public/images/classes/sram.jpg'
import ClasseXelor from '@public/images/classes/xelor.jpg'
import ClasseEcaflip from '@public/images/classes/ecaflip.jpg'
import ClasseEniripsa from '@public/images/classes/eniripsa.jpg'
import ClasseIop from '@public/images/classes/iop.jpg'
import ClasseCra from '@public/images/classes/cra.jpg'
import ClasseSadida from '@public/images/classes/sadida.jpg'
import ClasseSacrieur from '@public/images/classes/sacrieur.jpg'
import ClassePandawa from '@public/images/classes/pandawa.jpg'
import ClasseRoublard from '@public/images/classes/roublard.jpg'
import ClasseZobal from '@public/images/classes/zobal.jpg'
import ClasseOuginak from '@public/images/classes/ouginak.jpg'
import ClasseSteamer from '@public/images/classes/steamer.jpg'
import ClasseEliotrope from '@public/images/classes/eliotrope.jpg'
import ClasseHuppermage from '@public/images/classes/huppermage.jpg'

const CardEquipement = ({
    name,
    tags = [],
    equipmentTop,
    equipmentBot,
    description,
    classes,
    lien,
}) => {
    const urlAPI = "https://wakfu-guide-api-cckfj.ondigitalocean.app"
    const tagArray = tags.split(", ").map(tag => tag.trim());
    const classImages = {
        toutes: AllClass,
        feca: ClasseFeca,
        osamodas: ClasseOsamodas,
        enutrof: ClasseEnutrof,
        sram: ClasseSram,
        xelor: ClasseXelor,
        ecaflip: ClasseEcaflip,
        eniripsa: ClasseEniripsa,
        iop: ClasseIop,
        cra: ClasseCra,
        sadida: ClasseSadida,
        sacrieur: ClasseSacrieur,
        pandawa: ClassePandawa,
        roublard: ClasseRoublard,
        zobal: ClasseZobal,
        ouginak: ClasseOuginak,
        steamer: ClasseSteamer,
        eliotrope: ClasseEliotrope,
        huppermage: ClasseHuppermage
    };

    return (
        <section className="flex flex-col gap-4 py-4 bg-black-700 rounded break-inside-avoid">
            <header className="flex flex-col gap-2 pl-4">
                <p className="text-white-100 capitalize">
                    {name}
                </p>

                <ul className="flex gap-1 items-center overflow-x-auto no-scrollbar">
                    {tagArray.map((tag, index) => (
                        <li key={index} className='bg-black-900 whitespace-nowrap rounded-full px-2 py-1 text-xs uppercase text-white-300'>
                            {tag}
                        </li>
                    ))}
                </ul>
            </header>

            <section className="flex flex-col gap-1 px-4">
                <Image
                    className='w-full'
                    src={urlAPI + equipmentTop.data.attributes.url}
                    width={equipmentTop.data.attributes.width}
                    height={equipmentTop.data.attributes.height}
                    alt={equipmentTop.data.attributes.alternativeText == null && equipmentTop.data.attributes.name}
                />

                <Image
                    className='w-full'
                    src={urlAPI + equipmentBot.data.attributes.url}
                    width={equipmentBot.data.attributes.width}
                    height={equipmentBot.data.attributes.height}
                    alt={equipmentBot.data.attributes.alternativeText == null && equipmentBot.data.attributes.name}
                />
            </section>

            <Markdown className='mx-4 pl-5 text-sm list-disc text-white-300'>{description}</Markdown>

            <footer className='px-4 flex justify-between gap-2'>
                <ul className='flex'>
                    {classes.data.map((classe, index) => (
                        <li key={index} className={`inline-block ${index > 0 && `-ml-3`} z-${classes.length - index}`}>
                            <Image
                                className='h-8 w-8 rounded-full'
                                src={classImages[classe.attributes.nom]}
                                alt={'Classe : ' + classe.attributes.nom}
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
    tags: "tag first, tag second, tag third, tag fourth, tag fifh, tag sixth",
    equipmentTop: DefaultTopEquipment,
    equipmentBot: DefaultBotEquipment,
    description: "<p>Voici un stuff <strong>vreuuuuuumant</strong> ... MDR.</p><p>Bon aller go retourner au travail.</p>",
    classes: { data: [{ attributes: { nom: "toutes" } }] },
    lien: 'https://www.zenithwakfu.com/builder',
}

export default CardEquipement