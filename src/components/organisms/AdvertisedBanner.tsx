import { Text, Image, Button } from "@/components/atoms";
import { useDimensions } from "@/hooks";
import "@/styles/AdvertisedBanner.css";

type Props = {
    img: string;
    title: string;
    description?: string;
    reverse?: boolean;
};

export const AdvertisedBanner = (props: Props) => {
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
