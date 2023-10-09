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
      <body className='flex flex-col bg-black-800 min-h-screen'>
        <Navigation />
        <main className='flex flex-col grow container mx-auto px-3'>
          {/* {children} */}

          {/* Test value */}
          <div className='w-full grow bg-green' />

          <Footer />
        </main>
      </body>
    </html>
  )
}

export default RootLayout