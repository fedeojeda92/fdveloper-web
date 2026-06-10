import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import ChatbotBanner from "@/components/ChatbotBanner";
import Portfolio from "@/components/Portfolio";
import Proceso from "@/components/Proceso";
import Precios from "@/components/Precios";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicios />
        <ChatbotBanner />
        <Portfolio />
        <Proceso />
        <Precios />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
