import "./Input.css";

type InputProps = {
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({ type = "text", placeholder, value, onChange }: InputProps) {
    return (
        <input
            className="uiInput"
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    );
}