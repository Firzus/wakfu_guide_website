import Image from "next/image"
import Link from "next/link"

// Components
import Button from "@components/Button"

// Data
import Illustration from "@public/images/landingPage.png"

const Home = () => {
  const linkDiscoverdWakfu = "https://youtu.be/MOnP3z6TsPw?si=6GAJ1RvrxFpw4rtX";

  return (
    <section className="w-full flex flex-col xl:flex-row justify-between gap-4 md:gap-8 xl:gap-0">
      <header className="flex flex-col gap-4 xl:w-1/3">
        <div>
          <p className="font-bold capitalize text-3xl md:text-4xl text-white-100">
            wakfu guide
          </p>

          <p className="w-3/4 md:w-1/2 xl:w-full text-sm md:text-base font-light text-white-300">
            La référence en tutoriels, astuces et guides sur Wakfu et sa commauté.
          </p>
        </div>

        <Link className="w-fit" href={linkDiscoverdWakfu}>
          <Button
            label="découvrir"
            color="gradient"
          />
        </Link>
      </header>

      <picture className="w-3/4 xl:w-2/3 md:w-full grow relative ml-auto">
        <Image
          className="object-contain"
          src={Illustration}
          alt="Illustration"
          sizes="(max-width: 640px) 100vw, (max-width: 767px) 80vw, 90vw"
          fill
        />
      </picture>
    </section>
  )
}

export default Home