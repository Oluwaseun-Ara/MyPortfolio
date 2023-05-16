import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Services from "./components/Services";
import Project from "./components/Projects";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Contactpro from "./components/Contactpro";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 4000);
  }
  return (
    !loading && (
      <div>
        <Navbar />
        <Header />
        <Services />
        <Project />
        <Testimonials />
        <About />
        <Timeline />
        <Contactpro />
        <Footer />
      </div>
    )
  );
}

export default App;
