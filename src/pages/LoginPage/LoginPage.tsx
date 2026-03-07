import MainLayout from "../../layouts/MainLayout";
import LoginCard from "../../components/LoginCard/LoginCard";
import "./LoginPage.css";

export default function LoginPage() {
    return (
        <MainLayout>
            <div className="loginContainer">
                <LoginCard />
            </div>
        </MainLayout>
    );
}