import React from "react";
import "@/styles/SideShoppingCart.css";
import { IconX } from "@tabler/icons-react";
import { Text, Button, Image } from "@/components/atoms";
import { EmptyCart } from "@/assets";
import { useAppSelector } from "@/redux";
import { AddedItemInfo } from "../organisms";

type Props = {
    isOpen: boolean;
    toggleCart: () => void;
};

export const SideShoppingCart = (props: Props) => {
    const { items, totalPrice } = useAppSelector((state) => state.cartSlice);

    console.log();

    // Handle toggle cart side bar
    const handleToggleCarSideBar = React.useCallback(() => {
        props.toggleCart();
    }, []);

    return (
        <div className={`${props.isOpen ? "overlay-page" : ""}`}>
            <div
                onClick={handleToggleCarSideBar}
                className="overlay"
            />
            <div className={`cart-sidebar ${props.isOpen ? "" : "hidden"}`}>
                {/* SIDE BAR HEADER */}
                <div className="header">
                    <Text
                        value={`Your Shopping Cart ( ${items.length} )`}
                        size="md"
                        fontWeight={700}
                    />
                    <IconX
                        onClick={handleToggleCarSideBar}
                        className="close-icon"
                        size={25}
                    />
                </div>

                {/* NON-EMPTY CART */}
                {!!items.length && (
                    <div className="non-empty-cart">
                        <div className="item-list">
                            {items.map((item, index) => (
                                <AddedItemInfo
                                    item={item}
                                    key={index}
                                />
                            ))}
                        </div>
                        <div className="cart-summary">
                            <div className="sub-total">
                                <Text
                                    value="Subtotal"
                                    size="md"
                                    fontWeight={700}
                                />
                                <Text
                                    value={`$${totalPrice.toFixed(2).toLocaleString()}`}
                                    size="md"
                                    fontWeight={700}
                                />
                            </div>

                            <Button
                                title="Go to Checkout"
                                buttonType="danger"
                            />
                        </div>
                    </div>
                )}

                {/* EMPTY CART */}
                {!items.length && (
                    <div className="empty-cart">
                        <Image
                            src={EmptyCart}
                            alt={"emptycart"}
                        />
                        <Text
                            value="Your cart is empty"
                            size="md"
                            fontWeight={600}
                        />
                        <Button
                            title="Keep Browsing"
                            buttonType="primary"
                            onClick={handleToggleCarSideBar}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
