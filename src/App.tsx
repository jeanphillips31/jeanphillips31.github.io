import './App.css'
import Navbar from "./components/navbar.tsx";
import {Box, Container, VStack} from "@chakra-ui/react";
import ScrollToTopButton from "./components/scroll-to-top-button.tsx";
import Project from "./components/project.tsx";
import VTuberTwitchFinder from "./projects/vtuber-twitch-finder.tsx";
import LostNFound from "./projects/lost-n-found.tsx";

function App() {

    return (
        <>
            <Navbar/>
            <ScrollToTopButton/>
            <Box h={1000}></Box>
            <Box>
                {/* Projects Section */}
                <Container maxW={"1000"} id={"projects"}>
                    <VStack spacing={10}>
                        <Project {...VTuberTwitchFinder()}/>
                        <Project {...LostNFound()}/>
                    </VStack>

                </Container>
            </Box>
        </>
    )
}

export default App
