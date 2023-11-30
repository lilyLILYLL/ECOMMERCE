import { ProductItemType } from "@/shared";
import { ProductItemCard } from "@/components/molecules";
import "@/styles/ProductList.css";
type Props = {
    items: ProductItemType[];
    listType?: "horizontal" | "grid";
};

export const ProductList = ({ items, listType = "grid" }: Props) => {
    return (
        <div className={`product-list-${listType}`}>
            {items.map((item, index) => (
                <ProductItemCard
                    key={index}
                    item={item}
                    containerClassName={`${listType === "horizontal" ? "horizontal-flex-item" : ""}`}
                />
            ))}
        </div>
    );
};
