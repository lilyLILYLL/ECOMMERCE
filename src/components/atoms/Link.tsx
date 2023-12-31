import "@/styles/Link.css";

import { NavLink } from "react-router-dom";
type Props = {
    children: string | JSX.Element[] | JSX.Element;
    to: string;
    containerClassName?: string;
};

export const Link = ({ children, to, containerClassName }: Props) => {
    return (
        <NavLink
            onClick={() => window.scrollTo(0, 0)}
            to={to}
            className={`${containerClassName} link ${({
                isActive,
            }: {
                isActive: boolean;
            }) => (isActive ? "active-link" : " ")}`}
        >
            {children}
        </NavLink>
    );
};
