import { IconChevronLeft } from "@tabler/icons-react";
import { Text } from "@/components/atoms";
type Props = {
    label?: string;
    onClick?: (e: any) => void;
    containerClassName?: string;
};

export const GoBackIcon = (props: Props) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
                cursor: "pointer",
            }}
            onClick={props.onClick}
            className={props.containerClassName}
        >
            <IconChevronLeft />
            <Text value={props.label || ""} />
        </div>
    );
};
