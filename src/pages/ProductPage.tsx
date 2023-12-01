import "@/styles/ProductPage.css";
import { useParams } from "react-router-dom";
import { ProductItemType, items } from "@/shared";
import React from "react";
import { Title, Text } from "@/components/atoms";
import { ImagePreview, ProductInfo, ProductList } from "@/components/organisms";

type Props = {};

export const ProductPage = (props: Props) => {
    const params = useParams<{ id: string }>();

    const [product, setProduct] = React.useState<ProductItemType>();
    console.log(product);
    React.useEffect(() => {
        const chosenProduct = items.find((item) => item.id.toString() === params.id);
        setProduct(chosenProduct);
    }, [params]);

    return (
        <div className="product-page">
            {product ? (
                <div className="content">
                    {/* PRODUCT NAME*/}
                    <Title
                        title={product.description}
                        containerClassName="title"
                    />

                    {/* PRODUCT INFO*/}
                    <div className="info">
                        <ImagePreview images={[product.img, ...product.otherImgs]} />
                        <ProductInfo product={product} />
                    </div>

                    {/* TRENDING PRODUCTS*/}
                    <div>
                        <Text
                            value="Trending Now"
                            size="lg"
                            fontWeight={700}
                        />
                        <ProductList
                            items={items}
                            listType="horizontal"
                        />
                    </div>
                </div>
            ) : (
                <Title title="NOT FOUND!" />
            )}
        </div>
    );
};
