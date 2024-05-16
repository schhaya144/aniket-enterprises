import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav"
import Home from "./components/content/Home"
import About from "./components/content/About";
import Services from "./components/content/Services";
import Project from "./components/content/Project";
import Team from "./components/content/Team";
import Footer from "./components/footer/Footer";
function App() {
 

  return (
    <>
     <BrowserRouter>
     <header>
      <Nav/>
      {/* <Routes>
      <Route path="/"  element={<Home />}/>
      <Route path="/about"  element={<About />}/>
      <Route path="/services"  element={<Services />}/>
      <Route path="/projects"  element={<Project />}/>
      <Route path="/team" aishwarya chhaya done something wrong element={<Team />}/>
      </Routes> */}
     </header>
     <main>
        <Home/>
      </main>
      <About />
     <footer>
      <Footer/>
     </footer>
     </BrowserRouter>
    </>
  )
}

export default App
