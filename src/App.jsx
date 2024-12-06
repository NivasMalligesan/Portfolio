import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar is visible only on large devices */}
        <Sidebar className="hidden lg:block lg:w-1/4" />
        <div className="w-full lg:ml-4 lg:w-3/4">
          <Hero />
          <Projects />
        </div>
      </div>
    </>
  );
}

export default App;
