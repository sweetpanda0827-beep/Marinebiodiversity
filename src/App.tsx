import { useState } from 'react';
import { Waves, Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import DataSources from './components/DataSources';
import UseCases from './components/UseCases';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Waves className="h-8 w-8 text-teal-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                OceanMind AI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('features')} className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
                Platform
              </button>
              <button onClick={() => scrollToSection('data-sources')} className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
                Data Sources
              </button>
              <button onClick={() => scrollToSection('use-cases')} className="text-slate-700 hover:text-teal-600 transition-colors font-medium">
                Use Cases
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 font-medium">
                Contact
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-slate-700"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left text-slate-700 hover:text-teal-600 transition-colors font-medium py-2">
                About
              </button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left text-slate-700 hover:text-teal-600 transition-colors font-medium py-2">
                Platform
              </button>
              <button onClick={() => scrollToSection('data-sources')} className="block w-full text-left text-slate-700 hover:text-teal-600 transition-colors font-medium py-2">
                Data Sources
              </button>
              <button onClick={() => scrollToSection('use-cases')} className="block w-full text-left text-slate-700 hover:text-teal-600 transition-colors font-medium py-2">
                Use Cases
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-2 rounded-full font-medium">
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <Hero scrollToSection={scrollToSection} />
      <About />
      <Features />
      <DataSources />
      <UseCases />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
