import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage.tsx";
import DashboardPage from "../pages/DashboardPage/DashboardPage.tsx";

export default function AppRouter() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<LoginPage />} />

                <Route path="/dashboard" element={<DashboardPage />} />

            </Routes>

        </BrowserRouter>
    );
}