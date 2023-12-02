import { NavBar } from "@/components/molecules";
import { Footer, SideBar } from "@/components/organisms";
import { Outlet } from "react-router-dom";
import { SideShoppingCart } from "@/components/templates";
import { useLocation } from "react-router-dom";
import React from "react";

function App() {
    const { pathname } = useLocation();
    const [isCartOpened, setIsCartOpened] = React.useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);

    // handle toggling shopping car side bar
    const handleToggleShoppingCartSideBar = () => {
        setIsCartOpened((prev) => !prev);
    };

    // handle toggle side bar
    const handleTogglingSideBar = () => {
        setIsSideBarOpen((prev) => !prev);
    };

    // Scroll to the top of screen when the page os reload
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            {/* NAV BAR */}
            <NavBar
                toggleCartSideBar={handleToggleShoppingCartSideBar}
                toggleMobileSideBar={handleTogglingSideBar}
            />

            {/* SIDE BAR */}
            <SideBar
                isOpen={isSideBarOpen}
                setIsOpen={handleTogglingSideBar}
            />
            <Outlet />
            {/* FOOTER */}
            <Footer />

            {/* CART */}
            <SideShoppingCart
                isOpen={isCartOpened}
                toggleCart={handleToggleShoppingCartSideBar}
            />
        </div>
    );
}

export default App;
