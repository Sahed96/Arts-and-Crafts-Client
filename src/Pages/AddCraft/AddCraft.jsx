import Swal from 'sweetalert2'

const AddCraft = () => {
    const handleAddCraft = e =>{
        e.preventDefault();
        const form = e.target

        const itemName = form.itemName.value;
        const userName = form.userName.value;
        const email = form.email.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const time = form.time.value;
        const bio = form.bio.value;
       
        const newCraft = {itemName,userName,email,price,rating,time,bio}

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
            console.log(data);
            if(data.insertedId)
            Swal.fire({
                title: 'Success!',
                text: 'Added Successfully',
                icon: 'success',
                confirmButtonText: 'X'
              })
        })
    }
    return (
        <section className="p-6 dark:text-gray-900">
	<form onSubmit={handleAddCraft} className="container flex flex-col mx-auto space-y-12">
		
		<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
			<div className="space-y-2 col-span-full lg:col-span-1">
				<p className="font-medium">Profile</p>
				<p className="text-xs">Adipisci fuga autem eum!</p>
			</div>
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="itemName" className="text-sm">Item name</label>
					<input id="itemName" name="itemName" type="text" placeholder="Item name" className="w-full p-2 rounded-md    " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">subcategory</label>
					<input id="website" name="" type="text" placeholder="subcategory" className="w-full border-2 p-2 rounded-md  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">Username</label>
					<input id="username" name="userName" type="text" placeholder="Username" className="w-full p-2 rounded-md   " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="email" className="text-sm">Email</label>
					<input id="email" name="email" type="text" placeholder="Email" className="w-full p-2 rounded-md    " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="price" className="text-sm">Price</label>
					<input id="price" name="price" type="text" placeholder="Price" className="w-full p-2 rounded-md    " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="rating" className="text-sm">Rating</label>
					<input id="rating" name="rating" type="text" placeholder="Rating" className="w-full border-2 p-2 rounded-md  " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="time" className="text-sm">processing_time</label>
					<input id="time" name="time" type="text" placeholder="processing_time" className="w-full p-2 rounded-md   " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="website" className="text-sm">customization</label>
					<input id="website" type="text" placeholder="customization" className="w-full p-2 rounded-md    " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="username" className="text-sm">stockStatus</label>
					<input id="username" type="text" placeholder="stockStatus" className="w-full p-2 rounded-md   " />
				</div>
				<div className="col-span-full sm:col-span-3">
					<label htmlFor="image" className="text-sm">image</label>
					<input id="image" name="image" type="text" placeholder="upload here" className="w-full p-2 rounded-md    " />
				</div>
				<div className="col-span-full">
					<label htmlFor="bio" className="text-sm">short description</label>
					<textarea id="bio" name="bio" placeholder="" className="w-full rounded-md    "></textarea>
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