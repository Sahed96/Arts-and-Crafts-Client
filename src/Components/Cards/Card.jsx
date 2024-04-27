/* eslint-disable react/prop-types */

import { IoIosPricetags } from "react-icons/io";
import { Link } from "react-router-dom";


const Card = ({card}) => {
    const {item_name,price,image,subcategory_name,_id} = card;
    return (
        <div data-aos="zoom-in-up" className=" w-auto rounded-md shadow-md dark:bg-rose-50 dark:text-gray-800">
	<div className="p-4 ">
        <img src={image} alt="" className="object-cover  object-center rounded-lg w-full h-60" />
        </div>
	<div className="flex flex-col justify-between p-4 ">
		<div className=" flex justify-between items-center ">
			<h2 className="text-3xl font-semibold tracking-wide">{item_name}</h2>
			<p className="dark:text-orange-600 bg-white px-1  flex items-center gap-2 rounded-full font-semibold text-2xl"><IoIosPricetags />{price}</p>
		</div>
        <div>{subcategory_name}</div>

		<Link to={`/details/${_id}`} type="button" className=" flex items-center justify-center mt-5 p-3 text-lg font-semibold tracking-wide rounded-md dark:bg-rose-400 hover:bg-rose-500 dark:text-gray-50">View Details</Link>
	</div>
</div>
    );
};

export default Card;