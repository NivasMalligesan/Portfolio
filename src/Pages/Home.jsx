import '../App.css';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import SideCommon from '../components/SideCommon';
import Testimonial from '../components/Testimonial';

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar is fixed on large devices */}
        <SideCommon/>
        <div className="w-full lg:ml-[280px]"> {/* Add left margin to avoid overlap */}
          <Hero />
          <Projects />
          <Skills />
          <Testimonial/>
        </div>
      </div>
    </>
  );
}

export default Home;