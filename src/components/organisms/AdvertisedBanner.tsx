import { Text, Image, Button } from "@/components/atoms";
import { useDimensions } from "@/hooks";
import "@/styles/AdvertisedBanner.css";
import { useNavigate } from "react-router-dom";

type Props = {
    img: string;
    title: string;
    description?: string;
    reverse?: boolean;
};

export const AdvertisedBanner = (props: Props) => {
    const navigate = useNavigate();
    const dimensions = useDimensions();
    return (
        <div className="advertised-banner">
            <div className={`description ${props.reverse ? "reverse" : ""}`}>
                <Text
                    value={props.title}
                    size="xl"
                    fontWeight={"bold"}
                />
                <Text
                    value={props.description || " "}
                    size="md"
                />

                <Button
                    title={"SHOP NOW"}
                    buttonType="secondary"
                    onClick={() => navigate("/categories/all")}
                />
            </div>
            {dimensions.width > 600 && (
                <Image
                    src={props.img}
                    alt={props.img}
                />
            )}
        </div>
    );
};
