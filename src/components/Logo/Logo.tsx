import "./Logo.css";

export default function Logo() {
    return (
        <div className="logo">

            <svg className="logoMark" viewBox="0 0 90 60">

                <text className="logoG" x="0" y="42">
                    G
                </text>

                <text className="logoB" x="28" y="48">
                    B
                </text>

                <text className="logoSystem" x="10" y="58">
                    SYSTEM
                </text>

            </svg>

            {/*<div className="logoText">*/}
            {/*    for IKA Labs*/}
            {/*</div>*/}

        </div>
    );
}