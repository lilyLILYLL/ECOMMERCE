import "@/styles/CategoriesPage.css";
import React from "react";
import { GoBackIcon, Title, Button, Link } from "@/components/atoms";
import { categories, items } from "@/shared";
import { useNavigate } from "react-router-dom";
import { ProductList } from "@/components/organisms";

type Props = {};

export const CategoriesPage = (props: Props) => {
    const navigate = useNavigate();
    const [products, setProducts] = React.useState(items);
    const [chosenCategory, setChosenCategory] = React.useState(categories[0]);

    // Handle Choosing a category
    const handleChoosingCategory = (category: string) => {
        setChosenCategory(category);
    };

    // Handle Filtering products list based on chosen category
    React.useEffect(() => {
        // all products
        if (chosenCategory === categories[0]) {
            setProducts(items);
            return;
        }
        // each category
        setProducts(
            items.filter((item) => chosenCategory.toLocaleLowerCase().includes(item.category))
        );
    }, [chosenCategory]);

    return (
        <div className="categories">
            {/* GO BACK ICON */}
            <GoBackIcon
                label="Home"
                onClick={() => navigate("/")}
                containerClassName="goback-button"
            />
            {/* TITLE */}
            <Title title={chosenCategory} />

            {/* CATEGORY LIST */}
            <div className="categories-list">
                {categories.map((category, index) => (
                    <Button
                        buttonType="light"
                        title={category}
                        onClick={() => handleChoosingCategory(category)}
                        key={index}
                    />
                ))}
            </div>

            {/* PRODUCT LIST */}
            <div>
                <ProductList
                    items={products}
                    listType="grid"
                />
            </div>
        </div>
    );
};
