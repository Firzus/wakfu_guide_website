// Component
import Breadcrumb from '@components/Breadcrumb'
import GridDonjon from '@components/GridDonjon';

async function getTranches() {
    const urlApi = "https://wakfu-guide-api-cckfj.ondigitalocean.app/api/tranches?populate=*";
    const res = await fetch(urlApi, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json()
}

async function getDonjons() {
    const urlApi = "https://wakfu-guide-api-cckfj.ondigitalocean.app/api/donjons?populate=*";
    const res = await fetch(urlApi, { cache: 'no-store' });

    if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return res.json()
}

export default async function Donjons() {
    const { data: tranches } = await getTranches()
    const { data: donjons } = await getDonjons()

    return (
        <section className='grow w-full flex flex-col gap-4 md:gap-8'>
            <Breadcrumb />

            <header className='w-3/4 md:w-1/2 xl:w-1/3'>
                <p className='text-3xl font-bold capitalize text-white-100'>
                    donjons
                </p>

                <p className='text-sm text-white-300'>
                    Tout ce dont vous avez besoin pour venir à bout de chaque donjon.
                </p>
            </header>

            <GridDonjon
                donjons={donjons}
                tranches={tranches}
            />
        </section>
    )
}