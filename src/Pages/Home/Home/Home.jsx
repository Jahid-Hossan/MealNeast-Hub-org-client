import { Helmet } from "react-helmet";
import Accordion from "../../../component/Accordion";
import BannerHome from "../../../component/BannerHome";
import SectionOne from "../../../component/SectionOne";
import Category from "../Category/Category/Category";
import MemberShip from "../MemberShip/MemberShip";
import Contact from "../../../component/Contact";
import Testimonials from "../../../component/Testimonials";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>MealNest | Home</title>
            </Helmet>
            <BannerHome />
            <div className="container mx-auto ">
                <Category></Category>
                <MemberShip></MemberShip>
                <SectionOne></SectionOne>
                <Testimonials></Testimonials>
                <Accordion></Accordion>
                <Contact></Contact>

            </div>
        </>
    );
};

export default Home;