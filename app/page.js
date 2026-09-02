import ImageWithLoader from "@/utils/CustomImage/CustomImage";
import FeaturedWork from "./components/FeaturedWork";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import WorkProcess from "./components/WorkProcess";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Services />
      <About />
      <WorkProcess />
      <CTA />
      <Footer />
      {/*
  <div style={{ width: "100%", height: "auto", padding: "80px 64px" }}>
    <ImageWithLoader
      src="/projects/grupo-esbego/Esbego-01.jpg"
      alt="grupo"
      width={1200}
      height={800}
    />
  </div>
  */}
    </main>
  );
}
