import "./ActionField.css";

interface ActionFieldProps {

    label: string
    required?: boolean
    filled?: boolean
    onClick?: () => void
    width?: number

}

export default function ActionField({

                                        label,
                                        required = false,
                                        filled = false,
                                        onClick,
                                        width

                                    }: ActionFieldProps) {

    return (

        <div
            className={`uiActionField ${filled ? "uiActionFieldFilled" : ""}`}
            onClick={onClick}
            style={{ flex: width }}
        >

            <div className="uiActionFieldContent">

                {label}

                {required && <span className="requiredStar"> *</span>}

                {filled && <span className="actionFieldCheck"> ✓</span>}

            </div>

        </div>

    );

}