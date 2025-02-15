import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="bg-black min-h-screen w-screen text-white font-delicious" >

      <Nav/>

      <Home/>

      <About/>

    </div>
  );
}

export default App;
