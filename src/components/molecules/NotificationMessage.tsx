import "@/styles/NotifyMessage.css";
type Props = {
    isVisible: boolean;
    setIsVisible?: () => void;
    message: string;
    prefix?: JSX.Element;
    postfix?: JSX.Element;
};

export const NotificationMessage = (props: Props) => {
    return (
        <div
            className={`notification-message ${props.isVisible ? "slide" : ""}`}
            onAnimationEnd={props.setIsVisible}
        >
            {props.prefix}
            <div>{props.message}</div>
            {props.postfix}
        </div>
    );
};
