import "@/styles/HomeHeader.css";
import { ProductBanner } from "@/components/molecules";
import { HomeHeader1, HomeHeader2, HomeHeader3, HomeHeader4 } from "@/assets";

export const HomeHeader = () => {
    return (
        <div className="home-header">
            <ProductBanner
                imgSrc={HomeHeader1}
                bannerText="Live Comfortably"
                containerClassName="item1"
            />
            <ProductBanner
                imgSrc={HomeHeader2}
                bannerText="Skincare"
                containerClassName="item2"
            />
            <ProductBanner
                imgSrc={HomeHeader3}
                bannerText="Kitchen"
            />
            <ProductBanner
                imgSrc={HomeHeader4}
                bannerText="Electronics"
            />
        </div>
    );
};
