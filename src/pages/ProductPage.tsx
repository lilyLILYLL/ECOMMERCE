import { useParams } from "react-router-dom";

type Props = {};

export const ProductPage = (props: Props) => {
    const params = useParams();
    console.log(params);
    return <div style={{ paddingTop: "20rem" }}>ProductPage</div>;
};
