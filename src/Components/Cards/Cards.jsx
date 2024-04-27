import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Cards = () => {
    const crafts = useLoaderData()
    return (
        <div>
            <h2 className=" text-3xl font-semibold mt-14 text-center">Properties</h2>
            <div className=" mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
				crafts.map((craft,idx) => <Card key={idx} card={craft}></Card>)
			}
            
            </div>
        </div>
    );
};

export default Cards;