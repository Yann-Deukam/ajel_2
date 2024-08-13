import About from "@/components/About";
import Actualite from "@/components/Actualite";
import Contact from "@/components/Contact";
import Filiale from "@/components/Filiale";
import Footer from "@/components/Footer";
import Galery from "@/components/Galery";
import HeadBar from "@/components/HeadBar";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Partner from "@/components/Partner";
import Team from "@/components/Team";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeadBar/>
      <Navbar/>
      <Hero/>
      <About/>
      <Filiale/>
      <Partner/>
      <Galery/>
      <Team/>
      <Contact/>
      <Actualite/>
      <Footer/>
    </>
  );
}
