import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Master = () => {

  return (
    <div className="min-h-screen w-full bg-gradient-to-bl from-[#ffe4e6]  to-[#ccfbf1] p-4  backdrop-blur-md">
      <div className="sticky top-0 left-0 z-50"><Navbar/></div>
      {/* Main Content */}
      <main className="pt-20">
        <div className="container mx-auto p-4">
          <Outlet />
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default Master;
