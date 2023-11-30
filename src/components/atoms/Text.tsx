import "@/styles/Text.css";

type Props = {
    value: string;
    textClassName?: string;
    fontWeight?: "bold" | "light" | "normal" | 600 | 700 | 800 | 900;
    size?: "xl" | "lg" | "md" | "sm";
    textTransform?: "uppercase" | "capitalize" | "lowercase" | "none";
    color?: string;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export const Text = ({ value, textClassName, fontWeight = "normal", size = "sm", textTransform = "none", color = "black", ...props }: Props) => {
    return (
        <div
            style={{ fontWeight: fontWeight, textTransform: textTransform, color: color }}
            className={`text-${size} ${textClassName}`}
            {...props}
        >
            {value}
        </div>
    );
};
