import React from "react";

export const useDimensions = () => {
    const { innerWidth, innerHeight, scrollY } = window;
    const [dimensions, setDimensions] = React.useState({
        width: innerWidth,
        height: innerHeight,
        scrollY,
    });

    // Update dimensions when window is resized
    React.useEffect(() => {
        const handleResizingWindow = () => {
            setDimensions({
                width: innerWidth,
                height: innerHeight,
                scrollY,
            });
        };

        window.addEventListener("resize ", handleResizingWindow);
        window.addEventListener("scroll", handleResizingWindow);

        return () => {
            window.removeEventListener("resize", handleResizingWindow);
            window.removeEventListener("scroll", handleResizingWindow);
        };
    }, []);

    return dimensions;
};
