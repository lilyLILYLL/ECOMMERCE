import { Image, Text } from "@/components/atoms";
import { NavLink } from "react-router-dom";
import "@/styles/ProductBanner.css";
type Props = {
    imgSrc: string;
    bannerText: string;
    containerClassName?: string;
    category: string;
};
export const ProductBanner = (props: Props) => {
    return (
        <div className={`product-banner ${props.containerClassName}`}>
            <NavLink to={`/categories/${props.category}`}>
                <Image
                    src={props.imgSrc}
                    alt={props.bannerText}
                    className="banner-image"
                />
                <Text
                    value={props.bannerText}
                    color="white"
                    fontWeight={600}
                    size="xl"
                    textClassName="banner-text"
                />
            </NavLink>
        </div>
    );
};
