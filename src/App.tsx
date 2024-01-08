import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {MainPageAsync} from "./components/Pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./components/Pages/AboutPage/AboutPage.async";
import {Suspense} from "react";
import {useTheme} from "./components/theme/useTheme";
import {classNames} from "./components/helpers/classNames";

import './styles/index.scss'


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPageAsync/>
    },
    {
        path: 'about',
        element: <AboutPageAsync/>

    }
])

function App() {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames({cls: 'app', additional: [theme]})}>
            <button onClick={toggleTheme}>Theme</button>
            <Suspense fallback={<>Загрузка</>}>
                <RouterProvider router={router} />
            </Suspense>
        </div>

    );
}

export default App;