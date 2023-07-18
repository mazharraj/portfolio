import Services from "./Components/Services";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-5000">
        <Header />
      </div>
      <div className="static">
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
    </>
  );
}

export default App;
