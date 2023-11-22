import Image from "next/image";
import Markdown from 'markdown-to-jsx'

// Component
import Breadcrumb from "@components/Breadcrumb";

export async function generateStaticParams() {
    const guides = await fetch('https://wakfu-guide-api-cckfj.ondigitalocean.app/api/guides').then((res) => res.json())

    return guides.data.map((guide) => ({
        slug: guide.slug,
    }))
}

async function getGuide(slug) {
    const res = await fetch(`https://wakfu-guide-api-cckfj.ondigitalocean.app/api/guides?filters[slug]=${slug}&populate=*`, { cache: 'no-store' });
    const data = await res.json();
    return data.data[0];
}

export default async function DonjonId({ params }) {
    const guide = await getGuide(params.slug);
    const urlAPI = "https://wakfu-guide-api-cckfj.ondigitalocean.app"

    return (
        <section>
            EquipmentId
        </section>
    );
}