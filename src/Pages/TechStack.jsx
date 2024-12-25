import '../App.css';
import Connect from '../components/Connect';
import Navbar from '../components/Navbar';
import SideCommon from '../components/SideCommon';
import Tech_Stack from '../components/Tech_Stack';


function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        {/* Sidebar is fixed on large devices */}
        <SideCommon/>
        <div className="w-full lg:ml-[280px]"> {/* Add left margin to avoid overlap */}
         <Tech_Stack/>
         <Connect/>
        </div>
      </div>
    </>
  );
}

export default Home;
