import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 md:px-8">
      <Header />
      <Hero />
      <Products />
    </main>
  );
}
