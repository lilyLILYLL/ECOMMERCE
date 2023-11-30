import "@/styles/NavBar.css";
import { NavLink } from "react-router-dom";
import { NewLogo2 } from "@/assets";
import { IconShoppingCart, IconMenu2 } from "@tabler/icons-react";
import { Link } from "@/components/atoms";
import { useDimensions } from "@/hooks";

export const NavBar = () => {
    const dimensions = useDimensions();

    return (
        <div className={`navbar ${dimensions.scrollY === 0 ? "big-padding" : "small-padding"}`}>
            <NavLink to="/">
                <img
                    className="navbar-logo"
                    src={NewLogo2}
                    alt="Logo"
                    onClick={() => window.scrollTo(0, 0)}
                />
            </NavLink>

            <div className="navbar-menu">
                <Link to="/">HOME</Link>
                <Link to="/categories">CATEGORIES</Link>

                <IconShoppingCart className="cart-icon" />
                <IconMenu2 className="menu-icon" />
            </div>
        </div>
    );
};
