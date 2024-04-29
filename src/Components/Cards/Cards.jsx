import { useLoaderData } from "react-router-dom";
import Card from "./Card";


const Cards = () => {
    const crafts = useLoaderData()
    const newCraft = crafts.slice(0,6)
    return (
        <div>
            <h2 className=" text-5xl text-center font-bold mb-10 mt-14">Just For You</h2>
            <div className=" mt-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
				newCraft.map((craft) => <Card key={craft._id} card={craft}></Card>)
			}
            
            </div>
        </div>
    );
};

export default Cards;