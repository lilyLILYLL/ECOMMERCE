import "@/styles/HomePage.css";

import { HomeHeader, ProductList, AdvertisedBanner } from "@/components/organisms";
import { items } from "@/shared";
import { Text } from "@/components/atoms";
import { Banner1, Banner2 } from "@/assets";

export const HomePage = () => {
    return (
        <div className="home">
            {/* HOME HEADER */}
            <HomeHeader />

            {/* PROUD PRODUCTS*/}
            <div>
                <Text
                    value="Products we are proud of"
                    size="lg"
                    fontWeight={700}
                />
                <ProductList
                    items={items.slice(0, 8)}
                    listType="grid"
                />
            </div>

            {/* ADVERTISE BANNER*/}

            <AdvertisedBanner
                title="Creative harmonious living"
                description="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
                img={Banner1}
            />

            {/* TRENDING PRODUCTS*/}
            <div>
                <Text
                    value="Trending Now"
                    size="lg"
                    fontWeight={700}
                />
                <ProductList
                    items={items}
                    listType="horizontal"
                />
            </div>

            <AdvertisedBanner
                title="Comfortable & Elegante Living"
                description="RAOUF Products are all made to standard sizes so that you can mix and match them freely."
                img={Banner2}
                reverse
            />
        </div>
    );
};
