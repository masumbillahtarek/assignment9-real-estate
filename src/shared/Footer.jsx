import { PiBuildingApartmentFill } from "react-icons/pi";


const Footer = () => {
    return (
 <div>
     <footer className="footer bg-base-300 text-base-content  grid grid-cols-1 px-40 py-10 md:flex justify-around md:p-12">
  <aside>
   <div className="flex flex-col gap-2 items-center mt-4">
     <PiBuildingApartmentFill className="text-5xl mb-4 text-secondary"/>
       <a className="btn btn-ghost text-3xl font-bold text-primary">SB Residential <br /> Estate LTD</a>
   </div>
  </aside>
  <nav>
    <h6 className="footer-title text-black">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title text-black">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by SB Residential Estate LTD</p>
  </aside>
</footer>
 </div>
    );
};

export default Footer;