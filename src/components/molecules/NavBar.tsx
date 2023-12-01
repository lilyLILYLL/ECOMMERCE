import "@/styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { NewLogo2 } from "@/assets";
import { IconShoppingCart, IconMenu2 } from "@tabler/icons-react";
import { Link } from "@/components/atoms";
import { useDimensions } from "@/hooks";
import { useAppSelector } from "@/redux";
type Props = {
    toggleCartSideBar: () => void;
    toggleMobileSideBar: () => void;
};
export const NavBar = (props: Props) => {
    const dimensions = useDimensions();
    const cart = useAppSelector((state) => state.cartSlice.items);
    const items_quantity = cart.map((item) => item.quantity).reduce((a, b) => a + b, 0);

    return (
        <div
            className={`navbar ${
                dimensions.scrollY === 0 ? "big-padding" : "small-padding"
            }`}
        >
            {/* LOGO */}
            <NavLink to="/">
                <img
                    className="navbar-logo"
                    src={NewLogo2}
                    alt="Logo"
                    onClick={() => window.scrollTo(0, 0)}
                />
            </NavLink>

            <div className="navbar-menu">
                {/* PAGES */}
                <Link to="/">HOME</Link>
                <Link to="/categories/all">CATEGORIES</Link>

                {/* CART ICON */}
                <div
                    data-length={items_quantity}
                    className={`cart-icon ${!items_quantity ? "" : "with-items"}`}
                >
                    <IconShoppingCart onClick={props.toggleCartSideBar} />
                </div>

                <IconMenu2
                    className="menu-icon"
                    onClick={props.toggleMobileSideBar}
                />
            </div>
        </div>
    );
};
