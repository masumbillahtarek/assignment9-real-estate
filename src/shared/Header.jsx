import { PiBuildingApartmentFill } from "react-icons/pi";

const Header = () => {
    return (
       <div className=" md:flex gap-2 items-center  my-6">
          <PiBuildingApartmentFill className="text-5xl block mx-auto md:hidden"/>
            <a className="btn btn-ghost text-3xl font-bold block mx-auto md:hidden">Residential Estate</a>
        </div>
    );
};

export default Header;