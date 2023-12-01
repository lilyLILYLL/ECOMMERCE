import "@/styles/Counter.css";
import React from "react";

import { IconMinus, IconPlus } from "@tabler/icons-react";
type Props = {
    count: number;
    setCount: (e: any) => void;
    size?: "md" | "sm";
};

export const Counter = ({ count, setCount, size = "md" }: Props) => {
    const handleSettingCount = React.useCallback((value: number) => {
        setCount(value);
    }, []);

    // Handle Minus Operation: Stop when value reaches to 1
    const handleMinus = () => {
        if (count === 1) return;
        handleSettingCount(count - 1);
    };
    return (
        <div className="counter">
            {/* MINUS ICON */}
            <IconMinus
                className={`${size === "md" ? "square" : ""} icon`}
                size={30}
                onClick={handleMinus}
                style={{ backgroundColor: "transparent" }}
            />

            {/* VALUE */}
            <div className={`${size === "md" ? "square" : ""} count`}>
                {count.toLocaleString()}
            </div>

            {/* PLUS ICON */}
            <IconPlus
                className={`${size === "md" ? "square" : ""} icon`}
                size={30}
                onClick={() => handleSettingCount(count + 1)}
                style={{ backgroundColor: "transparent" }}
            />
        </div>
    );
};
