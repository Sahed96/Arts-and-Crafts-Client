/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

import useAuth from "../../AuthProvider/useAuth";

import MyCard from "./MyCard";



const MyCraft = () => {

	const [myCraft , setMyCraft] = useState([])
	// console.log(myCraft);
	const {user} =useAuth() || {};

useEffect(()=>{
	fetch(`http://localhost:5000/myCraft/${user?.email}`)
	
	.then(res => res.json())
	.then(data => {
		setMyCraft(data)
		// console.log(data);
	})
},[user])


    return (
		<div>
            <h2 className=" text-5xl ml-72 font-semibold mb-8 mt-14">My Arts & Craft</h2>
            <div className=" mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {
				myCraft.map((currentCraft) => <MyCard key={currentCraft._id} card2={currentCraft}></MyCard>)
			}
            
            </div>
        </div>
		
	); 
};

export default MyCraft;