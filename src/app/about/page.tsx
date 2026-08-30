import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-matte-black pt-32">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-20 text-center max-w-4xl min-h-[60vh]">
        <h1 className="font-serif text-4xl md:text-6xl mb-6">About Us</h1>
        <div className="w-16 h-[1px] bg-champagne mx-auto mb-10"></div>
        <p className="text-warm-white/70 font-light leading-relaxed text-lg mb-8">
          Aura is a premier event management company dedicated to crafting extraordinary experiences. 
          Founded on the principle that every detail matters, we transform ideas into immersive realities.
        </p>
        <p className="text-warm-white/70 font-light leading-relaxed text-lg">
          Our team of creative directors, planners, and producers work tirelessly behind the scenes so 
          you can step into a moment that is flawlessly yours.
        </p>
      </div>
      <Footer />
    </main>
  );
}
