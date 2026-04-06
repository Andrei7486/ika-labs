import {useState} from "react";
import "./HardnessTest.css";

type Props = {
    setView: (view: string) => void;
    onSave: (data: any) => void;
    initialData?: any;
};

const HardnessTest = ({setView, onSave, initialData}: Props) => {
    const [qty, setQty] = useState(initialData?.qty || "");
    const [location, setLocation] = useState(initialData?.location || "");
    const [method, setMethod] = useState(initialData?.method || "");
    const [comments, setComments] = useState(initialData?.comments || "");

    const buildData = () => ({
        type: "Hardness",
        qty,
        location,
        method,
        comments,
        requirementsFiles: []
    });

    const handleSave = () => {
        onSave(buildData());
        setView("tests");
    };

    const handleBack = () => {
        onSave(buildData());
        setView("tests");
    };

    return (
        <div className="testDetails">

            {/* HEADER (из темы) */}
            <div className="uiModuleHeader">

                <div className="uiModuleTitleBlock">
                    <div className="uiModuleTitle">
                        Hardness (HRC/HRB/HV10)
                        {qty > 0 && (
                            <span className="testBadge">{qty}</span>
                        )}
                    </div>
                </div>

                <div
                    className="uiModuleClose"
                    onClick={() => setView("tests")}
                >
                    ✕
                </div>

            </div>

            <div className="testLayout">

                {/* TOP */}
                <div className="testTop">

                    {/* LEFT */}
                    <div className="testForm">

                        <label className="uiLabel required">Qty</label>
                        <input
                            className="uiInput"
                            type="number"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                        />


                    </div>

                    {/* RIGHT */}
                    <div className="testPreview">
                        <div className="testImage"/>
                        <button className="uiButton uiButtonSecondary">
                            Add Requirements
                        </button>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="testBottom">

                    <label className="uiLabel required">Location</label>
                    <select
                        className="uiSelect"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    >
                        <option value="">Select location</option>
                    </select>
                    <label className="uiLabel required">Method</label>
                    <select
                        className="uiSelect"
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                    >
                        <option value="">Method</option>
                    </select>

                    <label className="uiLabel">Comments</label>
                    <textarea
                        className="uiTextarea"
                        placeholder="Enter any comments here..."
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />

                </div>

            </div>

            {/* FOOTER */}
            <div className="testFooter">

                <button
                    className="uiButton uiButtonSecondary"
                    onClick={() => setView("form")}
                >
                    Main Menu
                </button>

                <button
                    className="uiButton uiButtonSecondary"
                    onClick={handleBack}
                >
                    Tests List
                </button>

                <button
                    className="uiButton"
                    onClick={handleSave}
                >
                    Save
                </button>

            </div>

        </div>
    );
};

export default HardnessTest;