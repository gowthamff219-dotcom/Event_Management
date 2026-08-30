import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function EventsPage() {
  const events = [
    { title: "Royal Gala", type: "Corporate", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" },
    { title: "Summer Solstice", type: "Wedding", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" },
    { title: "Tech Summit", type: "Conference", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop" },
    { title: "Midnight Soiree", type: "Private Party", img: "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?q=80&w=2070&auto=format&fit=crop" },
  ];

  return (
    <main className="min-h-screen bg-matte-black pt-32">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-6xl mb-6">Our Portfolio</h1>
          <div className="w-16 h-[1px] bg-champagne mx-auto mb-6"></div>
          <p className="text-warm-white/70 font-light">Explore some of our most memorable creations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((evt, idx) => (
            <div key={idx} className="group relative h-[500px] overflow-hidden cursor-pointer">
              <img src={evt.img} alt={evt.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-transparent to-transparent opacity-80"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-xs uppercase tracking-widest text-champagne mb-2">{evt.type}</p>
                <h3 className="font-serif text-3xl">{evt.title}</h3>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <Link href="/booking" className="border border-champagne text-champagne px-10 py-4 uppercase tracking-widest text-sm hover:bg-champagne hover:text-matte-black transition-all">
            Plan Your Event
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}
