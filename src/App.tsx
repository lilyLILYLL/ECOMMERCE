import { NavBar } from "@/components/molecules";
import { Footer } from "@/components/organisms";
import { Outlet } from "react-router-dom";
import { SideShoppingCart } from "@/components/templates";
import { useLocation } from "react-router-dom";
import React, { CSSProperties } from "react";

function App() {
    const { pathname } = useLocation();
    const [isCartOpened, setIsCartOpened] = React.useState(false);

    const handleToggleShoppingCartSideBar = () => {
        console.log("Now", isCartOpened);
        setIsCartOpened((prev) => !prev);
    };
    console.log(isCartOpened);
    // Scroll to the top of screen when the page os reload
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <NavBar toggleCartSideBar={handleToggleShoppingCartSideBar} />
            <Outlet />
            <Footer />

            <SideShoppingCart
                isOpen={isCartOpened}
                toggleCart={handleToggleShoppingCartSideBar}
            />
        </div>
    );
}

export default App;
