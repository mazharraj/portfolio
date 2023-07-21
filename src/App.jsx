import Services from "./Components/Services";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-[50]">
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div className="py-4 md:py-6 lg:py-10"></div>
      <About />
      <div className="py-4 md:py-6 lg:py-10"></div>
      <Services />
      <div className="py-4 md:py-6 lg:py-10"></div>
      <Skill />
      <div className="py-4 md:py-6 lg:py-10"></div>
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
