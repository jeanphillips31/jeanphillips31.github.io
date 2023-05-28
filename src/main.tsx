import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react";
import "@fontsource/righteous/400.css"
import theme from "./data/theme.tsx";
import "./data/i18n.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)
