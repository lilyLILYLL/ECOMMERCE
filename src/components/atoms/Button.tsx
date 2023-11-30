import "@/styles/Button.css";

type Props = {
    title: string;
    buttonType?: "light" | "primary" | "secondary" | "danger";
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export const Button = ({ title, buttonType = "light", ...props }: Props) => {
    return (
        <button
            className={`button-${buttonType}`}
            {...props}
        >
            {title}
        </button>
    );
};
