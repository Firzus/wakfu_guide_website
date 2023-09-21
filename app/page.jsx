import Image from "next/image"
import Link from "next/link"

// Components
import Button from "@components/Button"

// Data
import Illustration from "@public/images/illustration.png"

const Home = () => {

  const linkDiscoverdWakfu = "https://youtu.be/MOnP3z6TsPw?si=6GAJ1RvrxFpw4rtX";

  return (
    <main className="container columns-4 pt-8 grow flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-4">
        <header className="flex flex-col gap-2 w-">
          <h1 className="title">
            Wakfu Guide
          </h1>

          <p className="small text-white-300">
            La référence en tutoriels, astuces et guides sur Wakfu et sa commauté.
          </p>
        </header>

        <Link href={linkDiscoverdWakfu} className="w-fit">
          <Button
            label="découvrir"
            color="gradient"
            size="sm"
          />
        </Link>
      </div>

      <Image
        src={Illustration}
        alt="Illustration"
        width={273}
        height={324}
        className="ml-auto"
      />
    </main>
  )
}

export default Home