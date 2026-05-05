import Image from "next/image";
import NavBar from  './Components/Header/NavBar.jsx';
import HeroSection from './Components/Sections/HeroSection.jsx'
import AboutSection from './Components/Sections/AboutSection.jsx'
import OurServices from './Components/Sections/OurServices.jsx'
import Footer from './Components/Footer/Footer.jsx'
export default function Home() {
  return (
    <>
    <NavBar/>
    <HeroSection/>
    <AboutSection/>
    <OurServices/>
    <Footer/>
    </>
  );
}
