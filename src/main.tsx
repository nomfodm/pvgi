import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import '@mantine/core/styles.css';

import './index.css'
import App from './App.tsx'
import {createTheme, MantineProvider} from "@mantine/core";
import {Provider} from "react-redux";
import store from "./store.tsx";

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

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider defaultColorScheme={"dark"} theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MantineProvider>
    </StrictMode>,
)
