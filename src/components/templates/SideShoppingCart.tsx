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
    const cart = useAppSelector((state) => state.cartSlice);
    // Handle toggle cart side bar
    const handleToggleCarSideBar = React.useCallback(() => {
        props.toggleCart();
    }, []);

    return (
        <div className={`overlay-page${props.isOpen ? "" : "hidden"}`}>
            <div className={`cart-sidebar ${props.isOpen ? "" : "hidden"}`}>
                {/* SIDE BAR HEADER */}
                <div className="header">
                    <Text
                        value="Your Shopping Cart (0)"
                        size="md"
                        fontWeight={700}
                    />
                    <IconX
                        onClick={handleToggleCarSideBar}
                        className="close-icon"
                        size={25}
                    />
                </div>

                {!!cart.length && (
                    <div>
                        {cart.map((item, index) => (
                            <AddedItemInfo
                                item={item}
                                key={index}
                            />
                        ))}
                    </div>
                )}

                {/* EMPTY CART */}
                {!cart.length && (
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
