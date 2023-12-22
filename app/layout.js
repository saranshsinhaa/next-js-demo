

import './globals.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';




export const Metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
}

export default function RootLayout({ 
  children,
 }
    ) {
  return (
    <html lang="en">
      <body >
        < Navbar />
        <main className="relative overflow-hidden">
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
