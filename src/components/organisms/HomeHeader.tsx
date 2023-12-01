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
                category="furnitures"
            />

            <ProductBanner
                imgSrc={HomeHeader2}
                bannerText="Skincare"
                containerClassName="item2"
                category="skin care"
            />

            <ProductBanner
                imgSrc={HomeHeader3}
                bannerText="Kitchen"
                category="kitchen"
            />

            <ProductBanner
                imgSrc={HomeHeader4}
                bannerText="Electronics"
                category="electronics"
            />
        </div>
    );
};
