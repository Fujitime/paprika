import Navbar from "./components/Navbar";
import Header from "./components/LandingPage/Header";
import Feature from "./components/LandingPage/Feature";
import TextSection from "./components/LandingPage/TextSection";
import PaprikaTypes from "./components/LandingPage/PaprikaTypes";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <TextSection />
      <PaprikaTypes />
      <Footer />
    </div>
  );
}