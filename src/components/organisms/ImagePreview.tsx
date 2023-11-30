import "@/styles/ImagePreview.css";
import React from "react";
import { Image } from "@/components/atoms";
type Props = {
    images: string[];
};

export const ImagePreview = (props: Props) => {
    const [chosenImg, setChosenImg] = React.useState(0);
    return (
        <div className="img-preview">
            <div className="big-img">
                <Image
                    src={props.images[chosenImg]}
                    alt={props.images[chosenImg]}
                    objectFit="cover"
                />
            </div>
            <div className="img-list">
                {props.images.map((item, index) => (
                    <Image
                        src={item}
                        alt={item}
                        key={index}
                        className="small-img"
                        onMouseEnter={() => setChosenImg(index)}
                    />
                ))}
            </div>
        </div>
    );
};
