import { MdDeleteForever } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";


const MyCraft = () => {

	// const handleDelete =

    return (
		<section className=" grid grid-cols-2 gap-5">
	<div className="hero h-[400px] bg-rose-100 rounded-xl">
		<div className="hero-content flex-col lg:flex-row">
		<img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
		<div className=" flex justify-between">
			<div>
			<h1 className="text-5xl font-bold">Box Office News!</h1>
			<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
			</div>
			<div className=" space-y-6">
			<button className="btn text-2xl bg-green-400 rounded-full"><RxUpdate /></button>
			<button className="btn text-2xl bg-red-500 rounded-full"><MdDeleteForever /></button>
			</div>
		</div>
		</div>
	</div>
	<div className="hero h-[400px] bg-rose-100 rounded-xl">
		<div className="hero-content flex-col lg:flex-row">
		<img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl" />
		<div>
			<h1 className="text-5xl font-bold">Box Office News!</h1>
			<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
			<button className="btn btn-primary">Get Started</button>
		</div>
		</div>
	</div>
		</section>
    );
};

export default MyCraft;