import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme(
    {
        useSystemColorMode: false,
        initialColorMode: "dark",
        fonts: {
            heading: "'Righteous', sans-serif",
            body: "'Righteous', sans-serif"
        }
    }
)

export default theme