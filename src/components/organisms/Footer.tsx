import { Text, Button } from "@/components/atoms";
import "@/styles/Footer.css";

export const Footer = () => {
    return (
        <div>
            <div className="footer">
                <Text
                    value="Newsletter"
                    fontWeight={"bold"}
                    size="xl"
                    color="white"
                />
                <div className="subcribe-section">
                    <input
                        type="email"
                        placeholder="email@gmail.com"
                    />
                    <Button
                        title="Subcribe"
                        buttonType="secondary"
                    />
                </div>
            </div>

            <div className="credit">
                <Text
                    value="Design by Abderraouf"
                    color="white"
                />
            </div>
        </div>
    );
};
