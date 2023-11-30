type Props = {
    src: string;
    alt: string;
    objectFit?: "contain" | "cover" | "none" | "fill";
} & React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export const Image = ({ objectFit = "cover", ...props }: Props) => {
    return (
        <img
            width={"100%"}
            height={"100%"}
            {...props}
            style={{ objectFit }}
        />
    );
};
