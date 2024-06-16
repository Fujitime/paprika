import Navbar from "./components/Navbar";
import Header from "./components/LandingPage/Header";
import Feature from "./components/LandingPage/Feature";
import TextSection from "./components/LandingPage/TextSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Feature />
      <TextSection />
    </div>
  );
}