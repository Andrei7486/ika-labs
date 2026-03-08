import AppRouter from "./router/AppRouter";

function App() {
    console.log("App version:", __APP_VERSION__)
    return <AppRouter />;
}

export default App;