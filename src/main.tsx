import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import '@mantine/core/styles.css';

import './index.css'
import MainPage from './pages/main/MainPage.tsx'
import {createTheme, MantineProvider} from "@mantine/core";
import {Provider} from "react-redux";
import store from "./store.tsx";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import NotTakenPage from "./pages/nottaken/NotTakenPage.tsx";

const theme = createTheme({
    fontFamily: `Inter, sans-serif`,
    autoContrast: true,
    breakpoints: {
        xs: '30em',
        "xs-sm": "34em",
        sm: '48em',
        "sm-md": "56em",
        md: '64em',
        lg: '74em',
        xl: '90em',
    },
});

const router = createBrowserRouter([
    {
        path: "/",
        element: <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>,
        children: [
            {
                index: true,
                element: <MainPage/>
            },
            {
                path: "notTaken",
                element: <NotTakenPage/>
            },
            {
                path: "*",
                element: <div>404</div>
            }
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider defaultColorScheme={"dark"} theme={theme}>
            <Provider store={store}>
                <RouterProvider router={router}/>
            </Provider>
        </MantineProvider>
    </StrictMode>,
)
