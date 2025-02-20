import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Skills from "./components/Skills";


function App() {
  return (
    <div className="bg-black min-h-screen w-screen text-white font-delicious" >

      <Nav/>

      <Home/>

      <About/>

      <Skills/>

      <Projects/>

      <Contact/>

      <Footer/>

    </div>
  );
}

export default App;
