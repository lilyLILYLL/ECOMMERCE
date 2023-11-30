type Props = {
    src: string;
    alt: string;
    containerClassName?: string;
    objectFit?: "contain" | "cover" | "none" | "fill";
    height?: string;
    width?: string;
};

export const Image = (props: Props) => {
    return (
        <img
            style={{ objectFit: props.objectFit || "cover", width: props.width || "100%", height: props.height || "100%" }}
            src={props.src}
            alt={props.alt}
            className={props.containerClassName}
        />
    );
};
