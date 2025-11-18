import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/projects";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/footer";
import WorkEx from "./components/Experience";
import Patents from "./components/patents";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <WorkEx />
      <Patents />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <SocialLinks />
    </div>
  );
}

export default App;
