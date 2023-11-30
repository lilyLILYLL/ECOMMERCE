import { NavBar } from "@/components/molecules";
import { Footer } from "@/components/organisms";
import { Outlet } from "react-router-dom";
import { store, useAppSelector } from "@/redux";
import { useLocation } from "react-router-dom";
import React from "react";

function App() {
    const state = useAppSelector((state) => state.cartSlice);
    console.log(state);
    const { pathname } = useLocation();

    // Scroll to the top of screen when the page os reload
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
