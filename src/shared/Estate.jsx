import { useEffect, useState } from "react";
import { MdSell } from "react-icons/md";
import { MdMapsHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";

const Estate = () => {
const [estates,setEstates]=useState([])
const[currentPage,setCurrentPage]=useState(1)
const itemsPerPage=3;
const lastItem=currentPage*itemsPerPage;
const firstItem=lastItem-itemsPerPage;

useEffect(()=>{
    fetch('estate.json')
    .then(res=>res.json())
    .then(data=>setEstates(data.estates))
},[])
const currentItems=estates.slice(firstItem,lastItem)
const totalPages=Math.ceil(estates.length/itemsPerPage)
   // console.log(estates.length)
    return (
        <div >
            <div className="text-center  my-12">
                <h3 className="text-4xl font-bold text-sky-600">About Residential Estate </h3>
                <p className="text-xl font-bold text-sky-500 w-3/4 mx-auto mt-4">
                    Our <span className="text-sky-600">**professional residential estate**</span> offers a premium living experience designed for modern lifestyles. Featuring high-quality construction, elegant design, and well-planned layouts, each unit is built to provide comfort, privacy, and functionality. The estate includes 24/7 security, landscaped surroundings, and convenient access to essential services—perfect for professionals and families seeking a secure and peaceful environment.

                </p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                currentItems.map(estate=><Estates estate={estate}></Estates>)
            }
        </div>
     <div className="w-3/4 mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 font-bold my-4">
           <p className="text-xl text-primary border-primary border-2 rounded-xl px-4 py-2">Total Pages : {totalPages}</p>
         <span className="text-xl text-primary border-primary border-2 rounded-xl px-4 py-2">Current Page : {currentPage}</span>
        <button disabled={currentPage===1} className="bg-primary px-4 py-2 rounded-xl border-2 btn-secondary text-white" onClick={()=>setCurrentPage(currentPage-1)}>Previous Page</button>
       
          <button disabled={currentPage===totalPages}  className="bg-primary px-4 py-2 rounded-xl border-2 btn-secondary text-white"onClick={()=>setCurrentPage(currentPage+1)}>Next Page</button>
     </div>
        </div>
    );
};
 
const Estates=({estate})=>{
    const{id,image,estate_title,segment_name,description,status}=estate
    return(
        <div className="flex flex-col gap-4 p-4 rounded-xl border-2 border-sky-500">
        <div className="flex justify-between">
            <h2 className="text-2xl font-bold flex gap-3 items-center"><MdMapsHomeWork className="text-3xl text-sky-600"/>{segment_name}</h2>
            <h2 className="text-2xl font-bold flex gap-3 items-center"><MdSell className="text-3xl text-sky-600"/>{status}</h2>
        </div>
        <div className="flex flex-col gap-2">
           <img className="h-80 rounded-xl" src={image} alt="" />
           <h3 className="text-3xl font-bold text-sky-600">{estate_title}</h3>
           <p className="text-xl text-sky-500">{description}</p>
        </div>
      <Link to={`/estate/${id}`}>  <button  className="btn btn-primary mx-auto">Show Details</button></Link>

        </div>
    )
}
export default Estate;