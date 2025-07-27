import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";



const Root = () => {
    return (
<div>
            <div className="mx-24 my-12">
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
         <Footer></Footer>
</div>
    );
};

export default Root;