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
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout