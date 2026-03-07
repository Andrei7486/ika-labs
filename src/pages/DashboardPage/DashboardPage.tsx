import MainLayout from "../../layouts/MainLayout";
import DashboardMenuCard from "../../components/DashboardMenuCard/DashboardMenuCard";
import "./DashboardPage.css";

export default function DashboardPage() {

    return (
        <MainLayout>

            <div className="dashboardContainer">

                <DashboardMenuCard />

            </div>

        </MainLayout>
    );
}