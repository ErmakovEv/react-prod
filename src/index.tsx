import {createRoot} from "react-dom/client";
import App from "./App";
import ThemeProvider from "./components/theme/ThemeProvider";

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App/>
    </ThemeProvider>

)
