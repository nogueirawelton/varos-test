import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 md:px-8">
      <Header />
      <Hero />
      <Products />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
