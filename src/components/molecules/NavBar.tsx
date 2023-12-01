import "@/styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { NewLogo2 } from "@/assets";
import { IconShoppingCart, IconMenu2 } from "@tabler/icons-react";
import { Link } from "@/components/atoms";
import { useDimensions } from "@/hooks";
import { useAppSelector } from "@/redux";
type Props = {
    toggleCartSideBar: () => void;
};
export const NavBar = (props: Props) => {
    const dimensions = useDimensions();
    const cart = useAppSelector((state) => state.cartSlice.items);

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
                <Link to="/categories">CATEGORIES</Link>

                {/* CART ICON */}
                <div
                    data-length={cart.length}
                    className={`cart-icon ${!cart.length ? "" : "with-items"}`}
                >
                    <IconShoppingCart onClick={props.toggleCartSideBar} />
                </div>

                <IconMenu2 className="menu-icon" />
            </div>
        </div>
    );
};
