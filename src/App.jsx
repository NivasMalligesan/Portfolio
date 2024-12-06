import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar is fixed on large devices */}
        <Sidebar />
        <div className="w-full lg:ml-[280px]"> {/* Add left margin to avoid overlap */}
          <Hero />
          <Projects />
          <Skills />
        </div>
      </div>
    </>
  );
}

export default App;
