
import "./MainLayout.css";
import Logo from "../components/Logo/Logo";

type Props = {
    children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
    return (
        <>
            <header className="topbar">
                <Logo />
            </header>

            <div className="divider"></div>

            <main className="page">{children}</main>
            <footer className="footer">
                Version 1.0 • Designed for IKA Laboratories (2006) Ltd. by GB System
            </footer>
        </>
    );
}