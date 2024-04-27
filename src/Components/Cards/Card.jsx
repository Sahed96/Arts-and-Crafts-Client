/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {item_name,price,rating,image,subcategory_name} = card;
    return (
        <div data-aos="zoom-in-up" className=" w-auto rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="p-4 relative">
        <img src={image} alt="" className="object-cover  object-center rounded-lg w-full h-60" />
        
    
        <p className=" absolute bottom-6 right-5 gap-1 flex px-3 py-2 rounded-full bg-[#13131880] items-center text-white shadow-xl">{rating}</p>
        </div>
	<div className="flex flex-col justify-between p-4 ">
		<div className=" flex justify-between items-center ">
			<h2 className="text-2xl font-semibold tracking-wide">{item_name}</h2>
			<p className="dark:text-orange-800 bg-white px-1 rounded-full font-semibold text-lg">{price}</p>
		</div>
        <div>{subcategory_name}</div>
        <div className="flex flex-wrap py-4 gap-2">
           
        </div>

		<Link type="button" className="flex items-center justify-center  mt-5 p-3 font-semibold tracking-wide rounded-md dark:bg-rose-300 hover:bg-rose-500 dark:text-gray-50">View Details</Link>
	</div>
</div>
    );
};

export default Card;