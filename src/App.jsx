import Navbar from "./components/Navbar";
import Highlight from "./components/Highlights";
import Hero from "./components/Hero";
import Model from "./components/Model"
import Footer from "./components/Footer";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
const App = () =>{

  return (

  <main> 
    <Navbar/>
    <Hero/>
    <Highlight/>  
    <Model/> 
    <Features/>
    <HowItWorks/>
    <Footer/>
  </main>
    
  )
}

export default App
