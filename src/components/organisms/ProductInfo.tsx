import { ProductItemType } from "@/shared";
import React from "react";
import { Text, Button } from "@/components/atoms";
import { Counter } from "@/components/molecules";
import "@/styles/ProductInfo.css";
type Props = {
    product: ProductItemType;
};

export const ProductInfo = ({ product }: Props) => {
    const [quantity, setQuantity] = React.useState(1);
    return (
        <div className="product-info">
            <Text
                value={product.specs}
                style={{ lineHeight: "2rem" }}
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
                />
                <Button
                    title="BUY NOW"
                    buttonType="danger"
                />
            </div>
        </div>
    );
};
