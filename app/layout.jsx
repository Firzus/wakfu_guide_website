import '@styles/globals.css'

import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Wakfu Guide',
  description: 'Default description',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body>
        <Navigation />
        <main className='container mx-auto px-3 tablet:px-8 laptop:px-0 laptop:w-[1140px] desktop:w-[1440px] laptop:bg-red desktop:bg-green'>
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout