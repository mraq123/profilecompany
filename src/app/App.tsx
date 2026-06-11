// @ts-ignore
import "../styles/fonts.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { Fleet } from "./components/Fleet";
import { Routes } from "./components/Routes";
import { Projects } from "./components/Projects";
import { News } from "./components/News";
import { Partners } from "./components/Partners";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B1829] overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <About />
        <Fleet />
        <Routes />
        <Projects />
        {/* <News /> */}
        {/* <Partners /> */}
        <Contact />
      </main>
      <Footer />

      {/* Back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-[#D4A843] hover:bg-[#E5BE6A] text-[#0B1829] rounded-full flex items-center justify-center shadow-lg transition-colors"
        title="Kembali ke atas"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}
