import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import Aos from "aos";


const Root = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div>
            <div className="max-w-[1440px] mx-auto">
            <Navbar/>
            <Outlet/>
            </div>
            <Footer/>
            <Toaster position="top-center" reverseOrder={true} />
        </div>
    );
};

export default Root;