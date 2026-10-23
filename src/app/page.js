import { Header } from "./ header footer/header";
import { Section1 } from "./section/section1";
import { Section2 } from "./section/section2";
import { Section3 } from "./section/section3";
import { Footer } from "./ header footer/footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full">

      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      
    </div>
  );
}
