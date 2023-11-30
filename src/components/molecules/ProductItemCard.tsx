import { ProductItemType } from "@/shared";
import { Image, Text, Link } from "@/components/atoms";

import "@/styles/ProductItemCard.css";
type Props = {
    item: ProductItemType;
    containerClassName?: string;
    style?: React.CSSProperties;
};

export const ProductItemCard = ({ item, style, containerClassName }: Props) => {
    return (
        <Link to={`product/${item.id}`}>
            <div
                className={`product-item-card ${containerClassName}`}
                style={style}
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
            </div>
        </Link>
    );
};
