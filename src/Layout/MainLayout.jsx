import { Outlet } from "react-router-dom";
import Navbar from "../Pages/shared/Header/Navbar";
import Footer from "../Pages/shared/Footer/Footer";


const MainLayout = () => {
    return (
        <div className="font-googlePlay ">
            <div className="sticky top-0 z-10">
            <Navbar></Navbar>
            </div>
            <div className="min-h-screen">
            <Outlet></Outlet>
            </div>    
          <Footer></Footer>
        </div>
    );
};

export default MainLayout;