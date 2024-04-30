import { Helmet } from "react-helmet";
import { useLoaderData, useParams } from "react-router-dom";


const ViewDetails = () => {
    const details = useLoaderData();
    const {_id} = useParams();
    const craftDetails = details.find(item => item._id == _id);
    
    const {image,stock_status,processing_time,customization,rating,price,subcategory_name,item_name} = craftDetails;
    return (
        <section className=" dark:text-gray-800">
            <Helmet>
                <meta charSet="utf-8" />
                <title>{item_name}- Crafty Labs</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
	<div className="container p-5 flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-2xl sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 border-2 border-rose-300">
			<div className=" space-y-3">
                <h2 className=" text-3xl font-semibold text-right">{item_name}</h2>
                <p className=" text-right">{subcategory_name}</p>
                <p className=" bg-teal-300 text-right rounded-full p-2 text-xl font-semibold">Price: {price} </p>
                <p className="text-xl w-[220px] text-center bg-teal-300 rounded-full p-2 font-semibold">Rating: {rating}</p>
                <p className="text-xl  text-right bg-teal-300 rounded-full p-2 font-semibold">Customization: {customization}</p>
                <p className="text-xl w-[280px] bg-teal-300 rounded-full p-2 font-semibold">Processing Time: {processing_time}</p>
                <p className="text-xl  text-right  bg-teal-300 rounded-full p-2 font-semibold">Stock Status: {stock_status}</p>
            </div>
		</div>
		<div className="lg:w-1/2 xl:w-3/5 ">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
			</div>
		</div>
	</div>
</section>
    );
};

export default ViewDetails;