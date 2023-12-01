import React from "react";
import "@/styles/SideBar.css";
import { Link, Title } from "@/components/atoms";
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

    console.log(`side-bar${props.isOpen ? "" : "-hidden"}`);

    return (
        <div className={`side-bar ${props.isOpen ? "" : "sidebar-hidden"}`}>
            <IconX
                size={30}
                className="x-icon"
                onClick={handleTogglingSideBar}
            />
            <NavLink to="/">
                <Title
                    title="Home"
                    containerClassName="page"
                />
            </NavLink>
            <NavLink to="/">
                <Title
                    title="CATEGORIES"
                    containerClassName="page"
                />
            </NavLink>
        </div>
    );
};
