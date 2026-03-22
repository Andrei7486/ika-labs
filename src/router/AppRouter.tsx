import {HashRouter, Routes, Route, Navigate} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import DashboardPage from "../pages/DashboardPage/DashboardPage.tsx";
import NewWorkPage from "../pages/NewWorkPage/NewWorkPage.tsx";

export default function AppRouter() {
    return (
        <HashRouter>

            <Routes>

                <Route path="/" element={<Navigate to="/login" />} />

                <Route path="/login" element={<LoginPage />} />

                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/new-work" element={<NewWorkPage />} />


            </Routes>

        </HashRouter>
    );
}