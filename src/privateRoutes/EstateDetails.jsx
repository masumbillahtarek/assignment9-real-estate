import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { MdSell } from "react-icons/md";
import { MdMapsHomeWork } from "react-icons/md";
const EstateDetails = () => {
    const estates=useLoaderData()
    const allEstate=estates.estates
    const {id}=useParams()
    const makeInt=parseInt(id)
    const estate=allEstate.find(estate=>estate.id===makeInt)

    console.log(estate,id)
    const{estate_title,image,segment_name,description,price,status,area,location,bedrooms,year_built,bathrooms}=estate
    const[a,b,c,d]=estate.facilities
    return (
         <div className="flex flex-col gap-4 p-4 rounded-xl border-2 border-sky-500 my-12">
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold flex gap-3 items-center"><MdMapsHomeWork className="text-3xl text-sky-600"/>{segment_name}</h2>
                    <h2 className="text-2xl font-bold flex gap-3 items-center"><MdSell className="text-3xl text-sky-600"/>{status}</h2>
                </div>
                <div className="flex flex-col gap-2">
                   <img className="h-80 rounded-xl" src={image} alt="" />
                   <h3 className="text-3xl font-bold text-sky-600">{estate_title}</h3>
                   <p className="text-xl text-sky-500">{description}</p>
                </div>
                <div className="flex  justify-between items-center text-xl text-sky-600">
                    <h2>Price : {price}</h2>
                    <h2>Location : {location}</h2>
                    <h2>Built Year : {year_built}</h2>
                </div>
                  <div className="flex  justify-between items-center text-xl text-sky-700">
                  <h3>Area : {area}</h3>
                  <h3>Number of Bedroom : {bedrooms}</h3>
                  <h3>Number of Bathroom : {bathrooms}</h3>
                  </div>
                  <div className="flex  justify-between items-center text-xl text-sky-600">
                    <h2>Facilities :</h2>
                    <h2>{a}</h2>
                    <h2>{b}</h2>
                    <h2>{c}</h2>
                    <h2>{d}</h2>
                  </div>
                </div>
    );
};

export default EstateDetails;