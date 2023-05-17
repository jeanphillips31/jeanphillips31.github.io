import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {ChakraProvider, extendTheme} from "@chakra-ui/react";

const config = {
    useSystemColorMode: false,
    initialColorMode: "dark"
}

const darkModeDefaultTheme = extendTheme({config})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider theme={darkModeDefaultTheme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>,
)
