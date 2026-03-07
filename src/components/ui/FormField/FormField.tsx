import "./FormField.css";
import Input from "../Input/Input";

type FormFieldProps = {
    label: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FormField({
                                      label,
                                      type = "text",
                                      placeholder,
                                      value,
                                      onChange
                                  }: FormFieldProps) {
    return (
        <div className="formField">
            <label className="formLabel">{label}</label>

            <Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}