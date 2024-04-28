import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData();
    const {_id} = useParams();
    const craftDetails = details.find(item => item._id == _id);
    
    const {image,stock_status,processing_time,customization,rating,price,subcategory_name,item_name} = craftDetails;
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-5 flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-2xl sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-rose-100 ">
			<div>
                <h2 className=" text-3xl font-semibold text-right">{item_name}</h2>
                <p className=" text-right">{subcategory_name}</p>
            </div>
		</div>
		<div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
			</div>
		</div>
	</div>
</section>
    );
};

export default ViewDetails;