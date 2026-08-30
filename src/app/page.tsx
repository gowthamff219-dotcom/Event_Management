import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* About Section */}
      <section className="py-32 px-6 md:px-12 container mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            We Turn Ideas Into <br/>
            <span className="text-gradient">Experiences</span>
          </h2>
          <p className="text-warm-white/70 font-light leading-relaxed mb-6">
            From the initial concept to the flawless execution, we handle every detail. 
            Our expertise spans event planning, creative direction, venue coordination, 
            décor, entertainment, and guest experience.
          </p>
          <div className="grid grid-cols-3 gap-6 mt-12 border-t border-white/10 pt-8">
            <div>
              <p className="font-serif text-3xl text-champagne mb-1">100+</p>
              <p className="text-xs uppercase tracking-widest text-warm-white/50">Events Created</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-champagne mb-1">50+</p>
              <p className="text-xs uppercase tracking-widest text-warm-white/50">Happy Clients</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-champagne mb-1">5+</p>
              <p className="text-xs uppercase tracking-widest text-warm-white/50">Years Exp</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 relative h-[600px]">
          <div className="absolute inset-0 bg-charcoal rounded-sm overflow-hidden">
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop" alt="Elegant Event" className="w-full h-full object-cover opacity-80" />
            <div className="absolute inset-0 border border-white/10 m-4"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-charcoal">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl mb-4">What We Do</h2>
            <div className="w-24 h-[1px] bg-champagne mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Weddings", desc: "Beautifully planned celebrations designed around the couple.", img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070&auto=format&fit=crop" },
              { title: "Corporate Events", desc: "Professional conferences, launches, and corporate experiences.", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" },
              { title: "Private Celebrations", desc: "Birthdays, anniversaries, and unforgettable personal parties.", img: "https://images.unsplash.com/photo-1530103862676-de3c9de59f9e?q=80&w=2070&auto=format&fit=crop" },
              { title: "Concerts & Entertainment", desc: "Live performances and entertainment experiences.", img: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop" },
              { title: "Destination Events", desc: "Complete event planning for celebrations at unique destinations.", img: "https://images.unsplash.com/photo-1523594833246-8178873752e5?q=80&w=2070&auto=format&fit=crop" },
              { title: "Event Production", desc: "Lighting, sound, stage design, and technical production.", img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop" }
            ].map((service, idx) => (
              <div key={idx} className="group relative h-96 overflow-hidden bg-matte-black cursor-pointer">
                <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-matte-black/90 via-matte-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500">
                  <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                  <p className="text-warm-white/70 font-light text-sm mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">{service.desc}</p>
                  <div className="w-12 h-[1px] bg-champagne group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Break */}
      <section className="relative py-40 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1469371670807-013ccf25f16a?q=80&w=2070&auto=format&fit=crop" alt="Cinematic Event" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-matte-black/70"></div>
        </div>
        <div className="relative z-10 px-6 max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl mb-6 uppercase tracking-widest">Every Detail Matters.</h2>
          <p className="text-warm-white/80 font-light text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            From the first idea to the final moment, we make every part of your event feel extraordinary.
          </p>
          <Link href="/booking" className="border border-champagne text-champagne px-10 py-4 uppercase tracking-widest text-sm hover:bg-champagne hover:text-matte-black transition-all">
            Let's Create Something
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Our Process</h2>
            <p className="text-warm-white/70 font-light mb-12">A seamless journey from imagination to reality.</p>
          </div>
          <div className="space-y-12">
            {[
              { num: "01", title: "DISCOVER", desc: "We understand your vision, expectations and event goals." },
              { num: "02", title: "DESIGN", desc: "We create the concept, aesthetic and experience." },
              { num: "03", title: "PRODUCE", desc: "Our team coordinates every detail and brings the plan to life." },
              { num: "04", title: "CELEBRATE", desc: "You enjoy the moment while we handle everything behind the scenes." }
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-8 group">
                <div className="font-serif text-3xl text-champagne/50 group-hover:text-champagne transition-colors">{step.num}</div>
                <div>
                  <h3 className="text-xl tracking-widest uppercase mb-2">{step.title}</h3>
                  <p className="text-warm-white/60 font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-charcoal text-center px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">Let's Create Your Next <br/>Unforgettable Event</h2>
          <p className="text-warm-white/70 font-light mb-12">Tell us about your event and let's bring your vision to life.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/booking" className="bg-champagne text-matte-black px-10 py-4 uppercase tracking-widest text-sm hover:bg-champagne-light transition-colors">
              Start Planning
            </Link>
            <Link href="/contact" className="border border-warm-white text-warm-white px-10 py-4 uppercase tracking-widest text-sm hover:bg-warm-white hover:text-matte-black transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
