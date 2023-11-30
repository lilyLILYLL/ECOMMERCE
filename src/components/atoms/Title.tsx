import React from "react";

type Props = {
    title: string;
};

export const Title = (props: Props) => {
    return (
        <div
            style={{
                width: "100%",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "1.5rem",
                textTransform: "capitalize",
            }}
        >
            {props.title}
        </div>
    );
};
