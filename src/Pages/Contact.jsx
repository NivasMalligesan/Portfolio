import '../App.css';
import Navbar from '../components/Navbar';
import SideCommon from '../components/SideCommon';
import Testimonial from '../components/Testimonial';
import Connect_hero from '../components/Connect_hero';

function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar is fixed on large devices */}
        <SideCommon/>
        <div className="w-full lg:ml-[280px] overflow-hidden"> {/* Add left margin to avoid overlap */}
        <Connect_hero/>
          <Testimonial/>
        </div>
      </div>
    </>
  );
}

export default Home;
