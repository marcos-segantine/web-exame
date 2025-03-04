import "../styles/button.css";

interface ButtonProps {
    text: string;
    onClick: () => void;
    style?: "back-color" | "no-back-color";
}

export const Button = ({ text, onClick, style }: ButtonProps) => {
    if (style === "back-color" || !style) {
        return (
            <button onClick={onClick}>{text}</button>
        )
    }

    return (
        <button className="no-back-color" onClick={onClick}>{text}</button>
    )
}