import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Header from "../shared/Header";



const Root = () => {
    return (
<div>
            <div className="mx-12 md:mx-24 my-12">
                <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
         <Footer></Footer>
</div>
    );
};

export default Root;