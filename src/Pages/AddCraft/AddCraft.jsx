import Swal from 'sweetalert2'

const AddCraft = () => {
    const handleAddCraft = e =>{
        e.preventDefault();
        const form = e.target

        const item_name = form.item_name.value;
		const image = form.image.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const bio = form.bio.value;
		const subcategory_name = form.subcategory_name.value;
		const customization = form.customization.value;
		const stockStatus = form.stockStatus.value;
       
        const newCraft = {item_name,image,userName,email,price,rating,time,bio,subcategory_name,customization,stockStatus}

        // console.log(newCraft);

        fetch('http://localhost:5000/addCraft',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data => {
            
            if(data.insertedId)
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
	<form onSubmit={handleAddCraft} className="container flex flex-col mx-auto space-y-12">
		
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-bold text-3xl">Add Craft List Here</p>
				
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="itemName" className="text-sm">Item name</label>
					<input id="itemName" name="item_name" type="text" placeholder="Item name" className="w-full p-2 rounded-md  border-2  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">subcategory</label>
					<select className='w-full border-2 p-2 rounded-md' name="subcategory_name" id="subcategory">
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
					<label htmlFor="username" className="text-sm">Username</label>
					<input id="username" name="userName" type="text" placeholder="Username" className="w-full p-2 rounded-md border-2  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" name="email" type="text" placeholder="Email" className="w-full p-2 rounded-md  border-2  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="price" className="text-sm">Price</label>
					<input id="price" name="price" type="text" placeholder="Price" className="w-full p-2 rounded-md border-2   " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="rating" className="text-sm">Rating</label>
					<input id="rating" name="rating" type="text" placeholder="Rating" className="w-full border-2 p-2 rounded-md  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="time" className="text-sm">processing_time</label>
					<input id="time" name="time" type="text" placeholder="processing_time" className="w-full p-2 rounded-md border-2  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">customization</label>
					<select className='w-full border-2 p-2 rounded-md' name="customization" id="customization">
						<option value="">Want any customization</option>
						<option value="yes">Yes</option>
						<option value="no">No</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Stock Status</label>
					<select className='w-full p-2 border-2 rounded-md' name="stockStatus" id="stockStatus">
						<option value="">select Stock Status</option>
						<option value="InStock">In stock</option>
						<option value="MadeOrder">Made to Order</option>
					</select>
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="image" className="text-sm">image</label>
					<input id="image" name="image" type="text" placeholder="upload here" className="w-full p-2 rounded-md  border-2  " />
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">short description</label>
					<textarea id="bio" name="bio" placeholder="" className="w-full rounded-md  border-2  "></textarea>
				</div>
				<div className="grid grid-cols-6 col-span-6">
                    <input type="submit" value='Add Now' className="btn col-span-full bg-rose-300"></input>
                </div>
			</div>
		</fieldset>
	</form>
</section>
    );
};

export default AddCraft;