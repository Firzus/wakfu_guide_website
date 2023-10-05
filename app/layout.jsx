import '@styles/globals.css'

import Nav from '@components/Nav';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Wakfu Guide',
  description: 'Default description',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout