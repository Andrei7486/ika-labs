export type TestName =
    | "Chemical"
    | "Impact"
    | "Metallography"
    | "Other Test"
    | "Bend"
    | "Hardness"
    | "SEM"
    | "Microhardness"
    | "Conductivity"
    | "Salt spray"
    | "Tensile - Turning"
    | "Tensile - Milling"
    | "Humidity"
    | "";


export interface BaseTestData {
    type: TestName;
    qty?: number;
    comments?: string;
    requirementsFiles?: File[];
}

export interface ChemicalTestData extends BaseTestData {
    type: "Chemical";
    melting: boolean;
    coatingRemoval: boolean;
    location: string;
}

export type TestData = ChemicalTestData;

export type TestsDataState = Partial<Record<TestName, TestData>>;