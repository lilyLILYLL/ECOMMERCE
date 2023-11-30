import React from "react";

type Props = {
    title: string;
    containerClassName?: string;
};

export const Title = (props: Props) => {
    return (
        <div
            style={{
                width: "80%",
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "2rem",
                textTransform: "capitalize",
                alignSelf: "center",
            }}
            className={props.containerClassName}
        >
            {props.title}
        </div>
    );
};
