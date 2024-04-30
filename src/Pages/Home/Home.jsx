import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import Category from "../../Components/Category/Category";
import Gallery from "./Gallery";
import Team from "./Team";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
            <Cards/>
            <Gallery/>
            <Team/>
        </div>
    );
};

export default Home;