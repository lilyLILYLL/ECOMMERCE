import React from "react";

export const useDimensions = () => {
    const [dimensions, setDimensions] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
        scrollY: window.scrollY,
    });

    // Update dimensions when window is resized
    React.useEffect(() => {
        const handleResizingWindow = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
                scrollY: window.scrollY,
            });
        };

        window.addEventListener("resize", handleResizingWindow);
        window.addEventListener("scroll", handleResizingWindow);

        return () => {
            window.removeEventListener("resize", handleResizingWindow);
            window.removeEventListener("scroll", handleResizingWindow);
        };
    }, []);

    return dimensions;
};
