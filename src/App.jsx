import Services from "./Components/Services";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="py-10"></div>
      <About />
      <div className="py-10"></div>
      <Services />
    </>
  );
}

export default App;
