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

    const handleMinus = () => {
        if (count === 1) return;
        handleSettingCount(count - 1);
    };
    return (
        <div className="counter">
            <IconMinus
                className="square icon"
                size={30}
                onClick={handleMinus}
            />
            <div className="square count">{count.toLocaleString()}</div>
            <IconPlus
                className="square icon"
                size={30}
                onClick={() => handleSettingCount(count + 1)}
            />
        </div>
    );
};
