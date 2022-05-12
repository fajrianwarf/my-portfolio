import About from './components/About';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
