import { useState } from "react";
import Button from "../ui/Button/Button";
import FormField from "../ui/FormField/FormField";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const isFormValid = username.trim() !== "" && password.trim() !== "";

    function handleLogin() {

        console.log("login");

        navigate("/dashboard");

    }

    return (

        <section className="loginCard">

            <FormField
                label="Username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <FormField
                label="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <Button onClick={handleLogin} disabled={!isFormValid}>
                Log in
            </Button>

        </section>

    );

}