/* eslint-disable react/prop-types */

import { RiDeleteBin2Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCard = ({card2}) => {

  const {item_name,image,_id,price,rating,stock_status,customization} = card2;

    const handleDelete = (_id) =>{
      // console.log(_id);
		Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   
            fetch(`http://localhost:5000/addCraft/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0)
                Swal.fire({
                        title: "Deleted!",
                        text: "Your product has been deleted.",
                        icon: "success"
                      });
            })
            }
          });
	}
    
    return (
        <div className="card card-side bg-rose-100">
        <figure className="pl-3 "><img className="w-[300px] rounded-xl" src={image} alt="img"/></figure>
        <div className=" flex justify-between w-full p-4">
          <div className=" space-y-4">
          <h2 className="card-title font-semibold text-3xl">{item_name}</h2>
          <p className=" text-base"><a className=" font-semibold text-lg mr-2">Price:</a>{price}</p>
          <p className=" text-base"><a className=" font-semibold text-lg mr-2">Rating:</a> {rating}</p>
          <p className=" text-base"><a className=" font-semibold text-lg mr-2">Stock:</a>{stock_status}</p>
          <p className=" text-base"><a className=" font-semibold text-lg mr-2">Customizable:</a>{customization}</p>
          </div>
          <div className="card-actions justify-end">
          <div className="join join-vertical mt-4 gap-24">
                
                 <Link to={`/update/${_id}`} className="btn rounded-full text-xl bg-green-300"><RxUpdate /></Link>
                 <button onClick={()=>handleDelete(_id)} className="btn rounded-full text-lg bg-red-500"><RiDeleteBin2Line /></button>
            </div>
            </div>
          </div>
        </div>
      
    );
};

export default MyCard;