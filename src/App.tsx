import { NavBar } from "@/components/molecules";
import { HomePage } from "@/pages";
import { Footer } from "./components/organisms";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
