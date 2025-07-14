import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Company from '@/components/Company';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';

export default function Home() {
  return (
    <>
      <Header />
      <ScrollProgress />
      <main>
        <Hero />
        <Products />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}