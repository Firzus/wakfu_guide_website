import '@styles/globals.css'

import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

// TEST
import CardEquipement from '@components/cards/CardEquipement';

export const metadata = {
  title: 'Wakfu Guide',
  description: 'Default description',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body className='flex flex-col bg-black-800 min-h-screen'>
        <Navigation />

        <main className='grow container mx-auto pt-8 px-3 md:px-8 lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1440px]'>
          {/* {children} */}

          {/* TEST */}
          <section className='grid gap-4 md:grid-cols-2'>
            <CardEquipement />
            <CardEquipement />
            <CardEquipement />
            <CardEquipement />
            <CardEquipement />
            <CardEquipement />
          </section>
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout