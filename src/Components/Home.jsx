import { useEffect } from "react";
import BrandList from "./BrandList";
import Carousel from "./Carousel";
import Category from "./Category";
import Deals from "./Deals";
import DebitCard from "./DebitCard";
import DiscountList from "./DiscountList";
import FooterLinks from "./FooterLinks";
import HelpSection from "./HelpSection";
import StoreList from "./StoreList";
import TodayDeals from "./TodayDeals";

const Home=()=>{
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return <><Carousel/>
    <Category/>
    <Deals/>
    <BrandList/>
    <DiscountList/>
    <TodayDeals/>
    <DebitCard/>
    <StoreList/>
    <HelpSection/>
    <hr className="mx-8 my-5 xs-mx:mx-3 border-gray-400"/> 
    <FooterLinks/></>
}
export default Home;