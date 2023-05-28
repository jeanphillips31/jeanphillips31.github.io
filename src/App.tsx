import './App.css'
import Navbar from "./components/navbar.tsx";
import {Box, Container, VStack, Heading, useColorModeValue} from "@chakra-ui/react";
import ScrollToTopButton from "./components/scroll-to-top-button.tsx";
import Project from "./components/project.tsx";
import VTuberTwitchFinder from "./projects/vtuber-twitch-finder.tsx";
import LostNFound from "./projects/lost-n-found.tsx";
import AboutMe from "./components/about-me.tsx";
import Education from "./components/education.tsx";

function App() {
    return (
        <>
            <ScrollToTopButton/>
            <Box bg={useColorModeValue("blue.100", "blue.900")} height={"100vh"}>
                <Navbar/>
                {/* About Me Section */}
                <Box mt={10} id={"aboutme"}>
                    <AboutMe/>
                </Box>
            </Box>
            {/* Experience Section */}
            <Box id={"education"}>
                <Education/>
            </Box>
            {/* Experience Section */}
            <Box mt={10}>
                <Container maxW={"1000"} id={"experience"}>
                    <Heading>Experience</Heading>
                </Container>
            </Box>
            <Box mt={10}>
                {/* Projects Section */}
                <Container maxW={"1000"} id={"projects"}>
                    <VStack spacing={10}>
                        <Project {...VTuberTwitchFinder()} key={"twitchfinder"}/>
                        <Project {...LostNFound()} key={"lostnfound"}/>
                    </VStack>

                </Container>
            </Box>
            <Box h={1000}></Box>
        </>
    )
}

export default App
