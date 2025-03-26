import Navbar from '@/components/Navbar';
import ImageSlider from '@/components/ImageSlider';
import Footer from '@/components/Footer';
import HomeCardsSection from '@/components/HomeClubDetail';


export default function Home() {
  return (
    <>
      <Navbar />
      <ImageSlider />
      <HomeCardsSection />
      <Footer />
      </>
  );
}