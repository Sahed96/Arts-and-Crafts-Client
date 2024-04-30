import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";






const UpdateDetails = () => {


	const update = useLoaderData()

	const {item_name,image,price,rating,time,short_description,_id,subcategory_name,customization,stock_status} =update;
	
	const handleUpdateCraft = e =>{
        e.preventDefault();
        const form = e.target

        const item_name = form.item_name.value;
		const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const short_description = form.bio.value;
		const subcategory_name = form.subcategory_name.value;
		const customization = form.customization.value;
		const stock_status = form.stock_status.value;
       
        const updateCraft = {item_name,image,price,short_description,rating,time,subcategory_name,customization,stock_status}

        // console.log(newCraft);

        fetch(`https://art-and-craft-eight.vercel.app/${_id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updateCraft)
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.modifiedCount> 0)
            Swal.fire({
                title: 'Success!',
                text: 'Added Successfully',
                icon: 'success',
                confirmButtonText: 'OK'
              })
        })
    }

    return (
        <section className="p-6 dark:text-gray-900">
	<form onSubmit={handleUpdateCraft} className="container flex flex-col mx-auto space-y-12">
		
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-bold text-3xl">Update Details</p>
				
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="itemName" className="text-sm">Item name</label>
					<input id="itemName" defaultValue={item_name} name="item_name" type="text" placeholder="Item name" className="w-full p-2 rounded-md  border-2  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">subcategory</label>
					<select defaultValue={subcategory_name} className='w-full border-2 p-2 rounded-md' name="subcategory_name" id="subcategory">
						<option value="">select a category</option>
					<option value="ClaySculpture">Clay Sculpture</option>
					<option value="StoneSculpture">Stone Sculpture</option>
					<option value="MetalSculpture">Metal Sculpture</option>
					<option value="WoodCarving">Wood Carving</option>
					<option value="NaturalMaterialSculpture">Natural Material Sculpture</option>
					<option value="BeadedSculpture">Beaded Sculpture</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="price" className="text-sm">Price</label>
					<input id="price" defaultValue={price} name="price" type="text" placeholder="Price" className="w-full p-2 rounded-md border-2   " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="rating" className="text-sm">Rating</label>
					<input id="rating" defaultValue={rating} name="rating" type="text" placeholder="Rating" className="w-full border-2 p-2 rounded-md  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="time" className="text-sm">processing_time</label>
					<input id="time" defaultValue={time} name="time" type="text" placeholder="processing_time" className="w-full p-2 rounded-md border-2  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">customization</label>
					<select defaultValue={customization} className='w-full border-2 p-2 rounded-md' name="customization" id="customization">
						<option value="">Want any customization</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Stock Status</label>
					<select defaultValue={stock_status} className='w-full p-2 border-2 rounded-md' name="stock_status" id="stockStatus">
						<option value="">select Stock Status</option>
						<option value="InStock">In stock</option>
						<option value="MadeOrder">Made to Order</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="image" className="text-sm">image</label>
					<input id="image" defaultValue={image} name="image" type="text" placeholder="upload here" className="w-full p-2 rounded-md  border-2  " />
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">short description</label>
					<textarea defaultValue={short_description} id="bio" name="short_description" placeholder="" className="w-full rounded-md  border-2  "></textarea>
				</div>
				<div className="grid grid-cols-6 col-span-6">
                    <input type="submit" value='Update' className="btn col-span-full bg-rose-300"></input>
                </div>
			</div>
		</fieldset>
	</form>
</section>
    );
};

export default UpdateDetails;