import { ProductItemType } from "@/shared";
import { Image, Text, Link } from "@/components/atoms";
import { useLocation } from "react-router-dom";

import "@/styles/ProductItemCard.css";
type Props = {
    item: ProductItemType;
    containerClassName?: string;
    style?: React.CSSProperties;
};

export const ProductItemCard = ({ item, containerClassName }: Props) => {
    const { pathname } = useLocation();

    return (
        <Link
            to={`/categories/product/${item.id}`}
            containerClassName={`product-item-card ${containerClassName}`}
        >
            <Image
                src={item.img}
                alt={item.description}
                height="80%"
            />
            <Text
                value={item.description}
                fontWeight={"light"}
                size="md"
            />
            <Text
                value={`$ ${item.price}`}
                fontWeight={900}
                size="md"
            />
        </Link>
    );
};
