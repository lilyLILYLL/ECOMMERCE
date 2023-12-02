import "@/styles/CategoriesPage.css";
import React from "react";
import { GoBackIcon, Title, Button, Link } from "@/components/atoms";
import { categories, items } from "@/shared";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { ProductList } from "@/components/organisms";

type Props = {};

export const CategoriesPage = (props: Props) => {
    const navigate = useNavigate();
    const { id: params } = useParams();

    const [products, setProducts] = React.useState(items);
    const [chosenCategory, setChosenCategory] = React.useState(params || "all");

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
            items.filter((item) =>
                chosenCategory.toLocaleLowerCase().includes(item.category)
            )
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
                    <NavLink href={`/categories/${category}`}>
                        <Button
                            buttonType="light"
                            title={category}
                            onClick={() => handleChoosingCategory(category)}
                            key={index}
                            style={{
                                border: `${
                                    chosenCategory === category ? "2px solid black" : ""
                                }`,
                            }}
                        />
                    </NavLink>
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
