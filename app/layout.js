import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'Travel',
  description: 'Travel UI/UX App for Camping',
};

export default function RootLayout({
  children,
}) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
