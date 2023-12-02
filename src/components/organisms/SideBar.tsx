import React from "react";
import "@/styles/SideBar.css";
import { Title } from "@/components/atoms";
import { NavLink } from "react-router-dom";
import { IconX } from "@tabler/icons-react";

type Props = {
    isOpen: boolean;
    setIsOpen: (e?: any) => void;
};

export const SideBar = (props: Props) => {
    const handleTogglingSideBar = React.useCallback(() => {
        props.setIsOpen();
    }, []);

    return (
        <div className={`side-bar ${props.isOpen ? "" : "sidebar-hidden"}`}>
            <IconX
                size={30}
                className="x-icon"
                onClick={handleTogglingSideBar}
            />
            <NavLink
                to="/"
                onClick={handleTogglingSideBar}
            >
                <Title
                    title="Home"
                    containerClassName="page"
                />
            </NavLink>
            <NavLink
                to="/categories/all"
                onClick={handleTogglingSideBar}
            >
                <Title
                    title="CATEGORIES"
                    containerClassName="page"
                />
            </NavLink>
        </div>
    );
};
