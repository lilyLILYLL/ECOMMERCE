import React from "react";
import { ItemModel } from "@/redux";
import { Image, Text } from "@/components/atoms";
import { Counter } from "@/components/molecules";
type Props = {
    item: ItemModel;
};

export const AddedItemInfo = ({ item }: Props) => {
    return (
        <div>
            <Image
                src={item.img}
                alt={item.img}
            />
            <Text value={item.description} />
            <Counter
                count={item.quantity}
                setCount={() => {}}
            />
        </div>
    );
};
