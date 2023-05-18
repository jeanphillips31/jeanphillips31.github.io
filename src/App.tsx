import './App.css'
import Navbar from "./components/navbar.tsx";
import {Box, Container, VStack, Text, Heading} from "@chakra-ui/react";
import ScrollToTopButton from "./components/scroll-to-top-button.tsx";
import Project from "./components/project.tsx";
import VTuberTwitchFinder from "./projects/vtuber-twitch-finder.tsx";
import LostNFound from "./projects/lost-n-found.tsx";

function App() {

    return (
        <>
            <Navbar/>
            <ScrollToTopButton/>
            {/* About Me Section */}
            <Box mt={10}>
                <Container maxW={"1000"} id={"aboutme"}>
                    <Heading>Hi, I'm Jean!</Heading>
                    <Text fontSize={24}> I am a software developer with three years of professional experience.
                        Programming
                        is my passion, and I love solving complex problems and thinking outside the box. I enjoy coding
                        in
                        my free time, constantly
                        learning and exploring new technologies. I have a professional background in mobile and desktop
                        development, with hobby projects created in web and game engines.
                        I strive to create something that is functional yet enjoyable to use. Check out my portfolio for
                        a showcase of my experience and projects.
                    </Text>
                </Container>
            </Box>
            {/* Experience Section */}
            <Box mt={10}>
                <Container maxW={"1000"} id={"experience"}>
                    <Heading>Professional Experience</Heading>
                    <Heading>Self-Taught Experience</Heading>
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
        </>
    )
}

export default App
