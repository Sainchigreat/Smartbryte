import Header from "./components/Header";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import WhySmartBryte from "./components/WhySmartBryte";
import Programmes from "./components/Programmes";
import Gains from "./components/Gains";
import Testimonials from "./components/Testimonials";
import Faqs from "./components/Faqs";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[100] rounded-full bg-violet px-5 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="scroll-mt-24">
        <Hero />
        <Introduction />
        <WhySmartBryte />
        <Programmes />
        <Gains />
        <Testimonials />
        <Faqs />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
