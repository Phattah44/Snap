import Image from 'next/image';
import Hero from './Components/Hero/Hero';
import Products from './Components/Products/Products';
import Discovery from './Components/Discovery/Discovery';
import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <Hero />
        <Discovery />
        <Products />
      </div>
      <Footer />
    </div>
  );
}
