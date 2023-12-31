import { ProductItemType } from "@/shared";
import React from "react";
import { Text, Button } from "@/components/atoms";
import { Counter } from "@/components/molecules";
import { useAppDisptch, addToCart } from "@/redux";
import "@/styles/ProductInfo.css";

type Props = {
    product: ProductItemType;
    showingNotification: () => void;
};

export const ProductInfo = ({ product, showingNotification }: Props) => {
    const dispatch = useAppDisptch();
    const [quantity, setQuantity] = React.useState(1);

    const handleAddingAnItemToCart = () => {
        dispatch(
            addToCart({
                id: product.id,
                img: product.img,
                price: product.price,
                description: product.description,
                quantity,
            })
        );
        showingNotification();
    };
    return (
        <div className="product-info">
            <Text
                value={product.specs}
                style={{ lineHeight: "2.5rem" }}
                size="md"
                fontWeight={"bold"}
            />
            <div className="quantity">
                <Text
                    value="Quantity"
                    size="lg"
                    fontWeight={600}
                />
                <Counter
                    count={quantity}
                    setCount={(value: number) => setQuantity(value)}
                />
                <Text
                    value={`$${product.price * quantity}`}
                    size="lg"
                    fontWeight={600}
                />
            </div>

            <div className="buttons">
                <Button
                    title="ADD TO CART"
                    buttonType="primary"
                    onClick={handleAddingAnItemToCart}
                />
                <Button
                    title="BUY NOW"
                    buttonType="danger"
                />
            </div>
        </div>
    );
};
