import '@styles/globals.css'
import Nav from '@components/Nav';
import { Poppins } from "next/font/google"

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Wakfu Guide',
  description: 'Default description',
}

const RootLayout = ({ children }) => {
  return (
    <html lang='fr'>
      <body className={poppins.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}

export default RootLayout