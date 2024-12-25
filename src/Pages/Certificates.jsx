import '../App.css';
import Navbar from '../components/Navbar';
import SideCommon from '../components/SideCommon';
import Connect from '../components/Connect';
import Certificate_hero from '../components/Certificate_hero';

function Certificates() {
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar is fixed on large devices */}
        <SideCommon/>
        <div className="w-full lg:ml-[280px] overflow-hidden"> {/* Add left margin to avoid overlap */}
          <Certificate_hero/>
          <Connect/>
        </div>
      </div>
    </>
  );
}

export default Certificates;
