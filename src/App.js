import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Patents from "./components/patents";
import Projects from "./components/projects";
import Recognition from "./components/Recognition";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <About />
        <Experience />
        <Patents />
        <Projects />
        <Skills />
        <Education />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
