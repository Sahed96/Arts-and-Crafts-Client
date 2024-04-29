import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";


const Root = () => {
    return (
        <div>
            <div className="max-w-[1440px] mx-auto">
            <Navbar/>
            <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;