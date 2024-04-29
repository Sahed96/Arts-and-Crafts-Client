

const Gallery = () => {
    return (
        <section className="py-6 mt-10 dark:text-gray-900">
            <h1 className=" text-5xl  font-bold mb-10 text-center">Upcoming Collections Gallery</h1>
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://i.ibb.co/19Pdsx2/few-167267-1280.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />
		<img alt="" className="w-full h-full rounded-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/4WNhZKt/sculpture-4802916-1280.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/MCWwwHD/hands-sculpture-6981662-1280.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/GJDxDpJ/lion-671193-1280.jpg" />
		<img alt="" className="w-full h-full rounded-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/4YvrhfW/art-1699989-1280.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/XWK813F/mud-sculpture-630451-1280.jpg" />
		<img alt="" className="w-full h-full rounded-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/ygC2GQZ/sandburg-1639999-1280.jpg" />
		<img alt="" className="w-full h-full rounded-full shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/N6SQMgN/sculpture-8587884-1920.jpg" />
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co/QFvgrW8/horse-1160943-1280.jpg" />
		<img src="https://i.ibb.co/Tb0rW1Q/model-2193153-1280.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
    );
};

export default Gallery;