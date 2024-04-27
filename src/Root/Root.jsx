import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Root = () => {
    return (
        <div className=" max-w-[1440px] mx-auto">
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;