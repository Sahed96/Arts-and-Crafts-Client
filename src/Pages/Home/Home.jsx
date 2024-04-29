import Banner from "../../Components/Banner/Banner";
import Cards from "../../Components/Cards/Cards";
import Gallery from "./Gallery";
import Team from "./Team";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Cards/>
            <Gallery/>
            <Team/>
        </div>
    );
};

export default Home;