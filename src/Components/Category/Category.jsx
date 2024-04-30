import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const Category = () => {

    const [category , setCategory] =useState([])
    
    // console.log(categoryData);
    useEffect(()=>{
        fetch(`https://art-and-craft-eight.vercel.app/categoryCraft`)
        .then(res => res.json())
        .then(data => {
            setCategory(data);
        })
    },[])

    const newCategory = category.slice(0,6)
    

    return (
        <div>
            <h1 className=" mt-10 mb-6 text-4xl text-center font-bold">Our Categories</h1>
            <div className="grid justify-center w-full grid-cols-2 lg:grid-cols-6 gap-6">
            {
                newCategory.map((cData,idx) => 
                
                    <Link to={`/categoryCard`} key={idx} className=" w-full lg:w-[200px] h-64 rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<img src={cData.icon} alt="" className="object-cover object-center w-full rounded-md p-4 h-auto" />
	<div className="">	
	<h2 className="text-xl font-semibold items-center text-center">{cData.subcategory_name}</h2>
	</div>
            </Link>
            
                )
            }
</div>
        </div>
    );
};

export default Category;