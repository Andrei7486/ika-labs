import MainLayout from "../../layouts/MainLayout";
import "../../styles/theme.css";
import "./NewWorkPage.css";
import ActionField from "../../components/ui/ActionField/ActionField";
import {useState} from "react";
import ChemicalTest from "../../components/tests/ChemicalTest/ChemicalTest.tsx";
import type {TestName, TestsDataState} from "../../types/tests";
import HardnessTest from "../../components/tests/HardnessTest/HardnessTest.tsx";
import ImpactTest from "../../components/tests/ImpactTest/ImpactTest.tsx";


export default function NewWorkPage() {
    const [view, setView] = useState("form");
    const [activeTest, setActiveTest] = useState<TestName  | null>(null);
    const [testsData, setTestsData] = useState<TestsDataState>({});
// Part Description state
    const [partDescriptionFilled, setPartDescriptionFilled] = useState(false);

// Tests state
    const [testsSelected, setTestsSelected] = useState(false);


// No Tests state
    const [noTestsSelected, setNoTestsSelected] = useState(false);
    /*const [tests, setTests] = useState<
        { name: string; samples: number }[]
    >([]);*/
    const testComponents: Record<string, any> = {
        Chemical: ChemicalTest,
        Hardness: HardnessTest,
        Impact: ImpactTest
    };
    const testsList: TestName[] =  [
        "Chemical",
        "Impact",
        "Other Test",
        "Metallography",
        "Bend",

        "Hardness",  /*(HRC/HRB/HV10)*/
        "SEM",

        "Microhardness",
        "Conductivity",
        "Salt spray",
        "Tensile - Turning",
        "Tensile - Milling",
        "Humidity"
    ];
    const mockTests = [
        {name: "Leak Test", samples: 3},
        {name: "Solder Test", samples: 2}
    ];
    const handleSaveTest = (testName: string, data: any) => {
        setTestsData(prev => ({
            ...prev,
            [testName]: data
        }));
    };

    const getTestQty = (testName: TestName) => {
        return testsData[testName]?.qty;
    };

    return (

        <MainLayout>

            <div className="newWorkContainer">
                {view === "form" && (
                    <section className="uiCard newWorkCard">

                        <h1 className="uiTitle">
                            New Work
                        </h1>

                        <div className="uiFormGrid">

                            {/* Work Number */}

                            <div>
                                <label className="required">Work Number</label>
                                <input className="uiInput"/>
                            </div>

                            {/* Client */}

                            <div>
                                <label className="required">Client</label>
                                <input className="uiInput"/>
                            </div>

                            {/* Engineer */}

                            <div>
                                <label className="required">Engineer</label>
                                <select className="uiSelect">
                                    <option>Select engineer</option>
                                </select>
                            </div>

                            {/* Date Received */}

                            <div>
                                <label className="required">Date Received</label>
                                <input className="uiInput"/>
                            </div>

                            {/* Due Date */}

                            <div>
                                <label>Due Date</label>
                                <input className="uiInput"/>
                            </div>

                            {/* Complexity */}

                            <div>
                                <label className="required">Complexity</label>
                                <select className="uiSelect">
                                    <option>Failure Analysis</option>
                                    <option>Highest</option>
                                    <option>Middle</option>
                                    <option>Lower</option>
                                </select>
                            </div>

                            {/* Part Description FULL ROW */}

                            <div className="uiFormGridFull">


                                <ActionField
                                    label="Part Description"
                                    required
                                    filled={partDescriptionFilled}
                                    onClick={() => setPartDescriptionFilled(!partDescriptionFilled)}
                                />

                            </div>

                            {/* Workshop Status */}

                            <div>
                                <label className="required">Workshop Status</label>

                                <select className="uiSelect">
                                    <option>Entered</option>
                                    <option>On Hold</option>
                                    <option>No Workshop</option>
                                </select>

                            </div>

                            {/* Cutting */}

                            <div>
                                <label className="required">Cutting</label>

                                <select className="uiSelect">
                                    <option>Cut</option>
                                    <option>No Cut</option>
                                </select>

                            </div>

                            {/* Empty grid cell (чтобы сохранить сетку) */}

                            <div></div>

                            {/* Tests FULL ROW */}

                            <div className="uiFormGridFull">

                                {!testsSelected && (<div style={{display: "flex", gap: "16px"}}>


                                    <ActionField
                                        label="Tests"
                                        required
                                        width={2}
                                        onClick={() => setView("tests")}
                                    />
                                    {testsSelected && mockTests.map((test, index) => (

                                        <div key={index} className="selectedTest">

                                            {test.name} — {test.samples} samples

                                        </div>

                                    ))}

                                    <ActionField
                                        label="No Tests"
                                        width={1}
                                        filled={noTestsSelected}
                                        onClick={() => {
                                            setNoTestsSelected(!noTestsSelected)
                                            setTestsSelected(false)
                                        }}
                                    />

                                </div>)}
                                {testsSelected && (
                                    <div className="selectedTestsContainer">

                                        {mockTests.map((test, index) => (
                                            <button key={index} className="selectedTestChip">
                                                {test.name} — {test.samples}
                                            </button>
                                        ))}

                                        <button className="editTestsButton">
                                            Add tests
                                        </button>

                                    </div>
                                )}


                            </div>

                        </div>
                        <div className="newWorkButtons">

                            <button className="uiButton uiButtonSecondary">
                                Duplicate
                            </button>

                            <button className="uiButton">
                                Submit
                            </button>

                        </div>
                        <div className="formNote">
                            <span className="requiredStar">*</span> required fields
                        </div>

                    </section>
                )}
                {view === "tests" && (

                    <section className="uiCard newWorkCard testsModalCard">

                        <div className="uiModuleHeader testsModalHeader">
                            <div className="uiModuleTitleBlock testsModalTitleBlock">
                                <h2 className="uiModuleTitle testsModalTitle">Tests</h2>
                                <div className="uiModuleSubtitle testsModalSubtitle">
                                    Select tests for this work
                                </div>
                            </div>

                            <button
                                className="testsModalClose"
                                onClick={() => setView("form")}
                                type="button"
                            >
                                ×
                            </button>
                        </div>

                        <div className="testsModalDivider"></div>

                        <div className="testsModalGrid">
                            {testsList.map((testName, index) => {
                                if (!testName) {
                                    return <div key={`empty-${index}`} className="testsModalEmptyCell"></div>;
                                }

                                const qty = getTestQty(testName);

                                return (
                                    <button
                                        key={testName}
                                        type="button"
                                        className="testsModalItem"
                                        onClick={() => {
                                            setActiveTest(testName);
                                            setView("testDetails");
                                        }}
                                    >
                                        <span className="testsModalItemLabel">{testName}</span>

                                        {qty ? (
                                            <span className="testsModalBadge">{qty}</span>
                                        ) : null}
                                    </button>
                                );
                            })}
                        </div>

                        <div className="testsModalFooter">
                            <button
                                type="button"
                                className="uiButton uiButtonSecondary testsFooterButton"
                                onClick={() => {
                                    setNoTestsSelected(true);
                                    setTestsSelected(false);
                                    setView("form");
                                }}
                            >
                                No Test
                            </button>

                            <button
                                type="button"
                                className="uiButton testsFooterButton"
                                onClick={() => {
                                    setTestsSelected(true);
                                    setNoTestsSelected(false);
                                    setView("form");
                                }}
                            >
                                Save
                            </button>
                        </div>

                    </section>

                )}
                {view === "testDetails" && activeTest && (() => {

                    const TestComponent = testComponents[activeTest];

                    if (!TestComponent) return null;

                    return (
                        <section className="uiCard newWorkCard">
                            <TestComponent
                                setView={setView}
                                onSave={(data: any) => activeTest && handleSaveTest(activeTest, data)}
                                initialData={testsData[activeTest]}
                            />
                        </section>
                    );

                })()}

            </div>


        </MainLayout>

    );

}
