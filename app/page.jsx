import Image from "next/image"
import Link from "next/link"

// Components
import Button from "@components/Button"

// Data
import Illustration from "@public/images/illustration.png"

const Home = () => {

  const linkDiscoverdWakfu = "https://youtu.be/MOnP3z6TsPw?si=6GAJ1RvrxFpw4rtX";

  return (
    <section className="grow flex flex-col justify-between gap-4 pb-4">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl text-white-100 capitalize font-bold">
            wakfu guide
          </h1>

          <p className="text-sm text-white-300 w-3/4">
            La référence en tutoriels, astuces et guides sur Wakfu et sa commauté.
          </p>
        </header>

        <Link href={linkDiscoverdWakfu} className="w-fit">
          <Button
            label="découvrir"
            color="gradient"
          />
        </Link>
      </div>

      <div className="w-3/4 grow relative ml-auto">
        <Image
          className="object-contain"
          src={Illustration}
          alt="Illustration"
          fill
        />
      </div>

    </section>
  )
}

export default Home