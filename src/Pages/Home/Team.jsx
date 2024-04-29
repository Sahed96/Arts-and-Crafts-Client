

const Team = () => {
    return (
        <section className="py-6 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
    <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">Artist Team</p>
		<h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">The talented people behind the scenes</h1>
		<div className="flex flex-row flex-wrap-reverse justify-center">
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/0mw5Fs8/67f1624a8cf15e409a1b5aedd90d90d1.jpg" />
				<p className="text-xl font-semibold leading-tight">Kathy Butterly</p>
				<p className="dark:text-gray-600">Clay Sculpture Artist</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/nD7K62S/maine-john-portrait-1.jpg" />
				<p className="text-xl font-semibold leading-tight">John Maine</p>
				<p className="dark:text-gray-600">Stone Sculpture Artist</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/4RqLByM/Nikos-Floros.jpg" />
				<p className="text-xl font-semibold leading-tight">Nikos Floros</p>
				<p className="dark:text-gray-600">Metal Sculpture Artist</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/4WCDX7d/Wendell-Gilley.jpg" />
				<p className="text-xl font-semibold leading-tight">Wendell Gilley</p>
				<p className="dark:text-gray-600">Wood Carving Artist</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/kqr1J7r/awerbyp1.jpg" />
				<p className="text-xl font-semibold leading-tight">Andrew Werby</p>
				<p className="dark:text-gray-600">Natural Sculpture Artist</p>
			</div>
			<div className="flex flex-col justify-center m-8 text-center">
				<img alt="" className="self-center flex-shrink-0 w-32 h-32 mb-4 bg-center bg-cover rounded-full dark:bg-gray-500" src="https://i.ibb.co/DgqYpVt/Ran-HWANG.jpg" />
				<p className="text-xl font-semibold leading-tight">Ran Hwang</p>
				<p className="dark:text-gray-600">Beaded Artist</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default Team;