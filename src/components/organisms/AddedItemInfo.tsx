import { ItemModel, useAppDisptch, removeFromCart, updateItemQuantity } from "@/redux";
import { Image, Text } from "@/components/atoms";
import { Counter } from "@/components/molecules";
import "@/styles/AddedItemInfo.css";
import { IconTrash } from "@tabler/icons-react";
type Props = {
    item: ItemModel;
};

export const AddedItemInfo = ({ item }: Props) => {
    const dispatch = useAppDisptch();

    // Handle Updating Cart
    const handleUpdatingItemQuantity = (value: number) => {
        dispatch(updateItemQuantity({ id: item.id, quantity: value }));
    };

    return (
        <div className="added-item">
            {/* IMAGE */}
            <Image
                src={item.img}
                alt={item.img}
            />
            <div className="content">
                <div className="info">
                    {/* NAME */}
                    <Text
                        value={item.description}
                        size="md"
                        fontWeight={600}
                    />

                    {/* TOTAL PRICE */}
                    <Text
                        value={`$${item.price * item.quantity}`}
                        size="md"
                        fontWeight={600}
                    />
                </div>
                <div className="icon">
                    {/* QUANTITY */}
                    <Counter
                        count={item.quantity}
                        setCount={handleUpdatingItemQuantity}
                        size="sm"
                    />
                    {/* DELETE ICON */}
                    <IconTrash
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="trash-icon"
                    />
                </div>
            </div>
        </div>
    );
};
