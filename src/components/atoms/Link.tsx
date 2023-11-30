import "@/styles/Link.css";

import { NavLink } from "react-router-dom";
type Props = {
    children: string | JSX.Element;
    to: string;
};

export const Link = ({ children, to }: Props) => {
    return (
        <NavLink
            to={to}
            className={`link ${({ isActive }: { isActive: boolean }) =>
                isActive ? "active" : " "}`}
        >
            {children}
        </NavLink>
    );
};
