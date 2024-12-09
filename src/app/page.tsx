import Image from "next/image";
import Header from "./components/Navbar";
import Head from "./components/head";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <Head />
      <Header />
      <HeroSection />
    </main>
  );
}
