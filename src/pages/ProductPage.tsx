import React from "react";
import "@/styles/ProductPage.css";
import { useParams } from "react-router-dom";
import { ProductItemType, items } from "@/shared";
import { Title, Text } from "@/components/atoms";
import { ImagePreview, ProductInfo, ProductList } from "@/components/organisms";
import { NotificationMessage } from "@/components/molecules";
import { IconCheck } from "@tabler/icons-react";

type Props = {};

export const ProductPage = (props: Props) => {
    const params = useParams<{ id: string }>();

    const [product, setProduct] = React.useState<ProductItemType>();
    const [isNotificationVisibe, setIsNotificationVisible] = React.useState(false);

    // Filter products based on params
    React.useEffect(() => {
        const chosenProduct = items.find((item) => item.id.toString() === params.id);
        setProduct(chosenProduct);
    }, [params]);

    const handleTogglingNotification = () => {
        setIsNotificationVisible((prev) => !prev);
    };

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
                        <ProductInfo
                            product={product}
                            showingNotification={handleTogglingNotification}
                        />
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

                    {/* NOTIFICATION MESSAGE*/}
                    <NotificationMessage
                        isVisible={isNotificationVisibe}
                        setIsVisible={handleTogglingNotification}
                        message="Item has been added"
                        postfix={
                            <IconCheck
                                style={{ color: "green" }}
                                size={30}
                            />
                        }
                    />
                </div>
            ) : (
                <Title title="NOT FOUND!" />
            )}
        </div>
    );
};
