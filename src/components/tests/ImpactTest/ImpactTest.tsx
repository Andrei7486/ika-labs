import { useState } from "react";
import "./ImpactTest.css";

type Props = {
    setView: (view: string) => void;
    onSave: (data: any) => void;
    initialData?: any;
};
<h1 style={{color: 'red'}}>IMPACT TEST</h1>
const ImpactTest = ({setView, onSave, initialData}: Props) => {
    const [qty, setQty] = useState(initialData?.qty || "");

    const [location, setLocation] = useState(initialData?.location || "");
    const [comments, setComments] = useState(initialData?.comments || "");
    const [size, setSize] = useState(initialData?.size || "");
    const [temperature, setTemperature] = useState(initialData?.temperature || "");
    const [standard, setStandard] = useState(initialData?.standard || "");
    const [direction, setDirection] = useState(initialData?.direction || "");
    const [hammer, setHammer] = useState(initialData?.hammer || "");
    const [requirements, setRequirements] = useState(initialData?.requirements || "");
    // const [impactChecked, setImpactChecked] = useState(initialData?.impactChecked || false);
    const [preparedByCustomer, setPreparedByCustomer] = useState(initialData?.preparedByCustomer || false);

    const buildData = () => ({
        type: "Impact",
        qty,
        size,
        temperature,
        location,
        standard,
        direction,
        hammer,
        requirements,
        // impactChecked,
        preparedByCustomer,
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

                        Impact
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

                        <label className="uiLabel required">Q-ty</label>
                        <input
                            className="uiInput"
                            type="number"
                            value={qty}
                            onChange={(e) => setQty(Number(e.target.value))}
                        />

                        <div className="formGrid">

                            <div>
                                <label className="uiLabel">Size</label>
                                <select className="uiSelect" value={size} onChange={(e) => setSize(e.target.value)}>
                                    <option value="">Select size</option>
                                </select>
                            </div>

                            <div>
                                <label className="uiLabel">Temperature</label>
                                <select className="uiSelect" value={temperature} onChange={(e) => setTemperature(e.target.value)}>
                                    <option value="">Select temperature</option>
                                </select>
                            </div>

                            <div>
                                <label className="uiLabel">Location</label>
                                <select className="uiSelect" value={location} onChange={(e) => setLocation(e.target.value)}>
                                    <option value="">Select location</option>
                                </select>
                            </div>

                            <div>
                                <label className="uiLabel">Standard</label>
                                <select className="uiSelect" value={standard} onChange={(e) => setStandard(e.target.value)}>
                                    <option value="">Select standard</option>
                                </select>
                            </div>

                            <div>
                                <label className="uiLabel">Direction</label>
                                <select className="uiSelect" value={direction} onChange={(e) => setDirection(e.target.value)}>
                                    <option value="">Select direction</option>
                                </select>
                            </div>

                            <div>
                                <label className="uiLabel">Hammer</label>
                                <select className="uiSelect" value={hammer} onChange={(e) => setHammer(e.target.value)}>
                                    <option value="">Select hammer</option>
                                </select>
                            </div>

                        </div>
                        <label className="uiLabel required">Location</label>
                        <select
                            className="uiSelect"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        >
                            <option value="">Select location</option>
                        </select>
                        {/*<label className="uiLabel">Requirements</label>*/}
                        {/*<input*/}
                        {/*    className="uiInput"*/}
                        {/*    value={requirements}*/}
                        {/*    onChange={(e) => setRequirements(e.target.value)}*/}
                        {/*/>*/}

                    </div>

                    {/* RIGHT */}
                    <div className="testPreview">
                        <div className="testImage" />
                        {/*<button className="uiButton uiButtonSecondary">*/}
                        {/*    Add Requirements*/}
                        {/*</button>*/}
                        {/*<label className="checkboxItem uiActionText">*/}
                        {/*    <input*/}
                        {/*        type="checkbox"*/}
                        {/*        checked={impactChecked}*/}
                        {/*        onChange={(e) => setImpactChecked(e.target.checked)}*/}
                        {/*    />*/}
                        {/*    <span>Impact</span>*/}
                        {/*</label>*/}

                        <label className="checkboxItem uiActionText">
                            <input
                                type="checkbox"
                                checked={preparedByCustomer}
                                onChange={(e) => setPreparedByCustomer(e.target.checked)}
                            />
                            <span>Prepared by Customer</span>
                        </label>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="testBottom">
                    <label className="uiLabel">Requirements</label>
                    <input
                        className="uiInput"
                        value={requirements}
                        onChange={(e) => setRequirements(e.target.value)}
                    />


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

export default ImpactTest;