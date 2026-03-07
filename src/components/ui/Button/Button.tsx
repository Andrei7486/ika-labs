import "./Button.css";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
};

export default function Button({ children, onClick, disabled }: ButtonProps) {
    return (
        <button
            className="uiButton"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}