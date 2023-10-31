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

export default async function Page({ params }) {
    const guide = await getGuide(params.slug);
    const urlAPI = "https://wakfu-guide-api-cckfj.ondigitalocean.app"

    return (
        <section className="w-full grow flex flex-col gap-4">
            <Breadcrumb />

            <h1 className="text-white-100 text-xl font-semibold">
                {guide.attributes.titre}
            </h1>

            <p className="text-white-300">
                {guide.attributes.description}
            </p>

            <Image
                className="w-full rounded"
                src={urlAPI + guide.attributes.illustration.data.attributes.url}
                alt={guide.attributes.illustration.data.attributes.alternativeText == null && guide.attributes.illustration.data.attributes.name}
                width={guide.attributes.illustration.data.attributes.width}
                height={guide.attributes.illustration.data.attributes.height}
            />

            <Markdown className='contenu-blog'>{guide.attributes.contenu}</Markdown>

        </section>
    );
}