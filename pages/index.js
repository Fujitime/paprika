import Header from "../components/Header";
import SectionService from "../components/SectionService";
import SectionOneHomePage from "../components/SectionHereHomePage";
import SectionTwoHomePage from "../components/SectionTwoHomePage";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionService />
      <SectionOneHomePage />
      <SectionTwoHomePage />
    </div>
  );
}
