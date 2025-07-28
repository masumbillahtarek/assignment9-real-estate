import { useContext } from "react";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Navbar = () => {
  const{user,logOut}=useContext(AuthContext)
    const navLink=<>
       <li><NavLink to="/">Home</NavLink></li>
       {!user&& <>
       <li><NavLink to="/login">Login</NavLink></li>
         <li><NavLink to="/register">Register</NavLink></li></>}
    </>
    console.log(user)
    const handlelogOut=()=>{
      logOut()
      .then(() => {
  console.log('Sign-out successful.')
}).catch((error) => {
console.log(error)
});
    }
    return (
       <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navLink}
      </ul>
    </div>
  <div className=" flex gap-2 items-center ">
    <PiBuildingApartmentFill className="text-5xl hidden md:block"/>
      <a className="btn btn-ghost text-3xl font-bold hidden md:block">Residential Estate</a>
  </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?<>
      <img className="w-10 h-10 rounded-full mr-4" src={user?.photoURL} title={user?.email} alt="" /> 
      <button onClick={handlelogOut} className="btn btn-secondary">Log Out</button>
      </>:<Link className="btn btn-secondary" to="/login">Login</Link>
    }
    
  </div>
</div>
    );
};

export default Navbar;