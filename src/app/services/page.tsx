import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-matte-black pt-32">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-20 min-h-[60vh]">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Our Services</h1>
          <div className="w-16 h-[1px] bg-champagne mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {[
            { title: "Event Planning", desc: "End-to-end management of your entire event, from venue selection to timeline creation." },
            { title: "Creative Direction", desc: "Developing a unique aesthetic, theme, and visual identity for your celebration." },
            { title: "Production & Technical", desc: "Expert handling of lighting, sound, staging, and special effects." },
            { title: "Guest Experience", desc: "Curating a seamless and memorable journey for every attendee." }
          ].map((service, idx) => (
            <div key={idx} className="bg-charcoal p-10 border border-white/5 hover:border-champagne/30 transition-colors">
              <h2 className="font-serif text-2xl text-champagne mb-4">{service.title}</h2>
              <p className="text-warm-white/70 font-light leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
