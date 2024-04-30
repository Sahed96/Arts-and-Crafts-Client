/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";

import useAuth from "../../AuthProvider/useAuth";

import MyCard from "./MyCard";



const MyCraft = () => {

	const [myCraft , setMyCraft] = useState([])
	// console.log(myCraft);
	const {user} =useAuth() || {};

useEffect(()=>{
	fetch(`https://art-and-craft-eight.vercel.app/${user?.email}`)
	
	.then(res => res.json())
	.then(data => {
		setMyCraft(data)
		// console.log(data);
	})
},[user])


    return (
		<div>
			<div>
				
			</div>
            <h2 className=" text-5xl text-center font-semibold mb-8 mt-14">My Arts & Craft</h2>
			<div className=" text-right p-6">
			<div className="col-span-full text-lg font-bold sm:col-span-3">
					<select className='w-32 border-2 p-2 rounded-md' name="customization" id="customization">
						<option value="">customize by</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
			</div>
            <div className=" mt-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
            {
				myCraft.map((currentCraft) => <MyCard key={currentCraft._id} card2={currentCraft}></MyCard>)
			}
            
            </div>
        </div>
		
	); 
};

export default MyCraft;