/* eslint-disable react/jsx-key */
import { Link, useLoaderData } from "react-router-dom";


const AllCrafts = () => {
    const allData = useLoaderData();


    return (
        <div className="overflow-x-auto mt-8">
            <div>
                
            </div>
            <h2 className="mb-4 text-3xl font-semibold leading-tight">All Arts & Crafts</h2>
  <table className="table ">
    {/* head */}
    <thead>
      <tr className=" text-lg">
        <th>SL</th>
        <th>Item Name</th>
        <th>SubCategory</th>
        <th>Rating</th>
        <th>Price</th>
        <th>Stock Status</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        allData.map((data,index) =>{
            const {item_name,price,rating,stock_status,subcategory_name,_id} =data;
            
            return(
                <tr className="bg-rose-50">
        <th>{index+1}</th>
        <td>{item_name}</td>
        <td>{subcategory_name}</td>
        <td>{rating}</td>
        <td>{price}</td>
        <td>{stock_status}</td>
        <td><Link to={`/details/${_id}`} className="btn bg-rose-400 hover:bg-red-500 hover:text-white">ViewDetails</Link></td>
      </tr>
            )
        })
      }
      
      
    </tbody>
  </table>
</div>
    );
};

export default AllCrafts;