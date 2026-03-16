import Header from "./components/header/Header";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <section id="home" className="scroll-mt-20">
          <Home />
        </section>

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="services" className="scroll-mt-20">
          <Services />
        </section>

        <section id="portfolio" className="scroll-mt-20">
          <Portfolio />
        </section>

        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
