import './App.css'
import Navbar from "./components/navbar.tsx";
import {Box, VStack, Heading, useColorModeValue, Flex} from "@chakra-ui/react";
import ScrollToTopButton from "./components/scroll-to-top-button.tsx";
import Project from "./components/project.tsx";
import VTuberTwitchFinder from "./projects/vtuber-twitch-finder.tsx";
import LostNFound from "./projects/lost-n-found.tsx";
import AboutMe from "./components/about-me.tsx";
import Skills from "./components/skills.tsx";
import Experience from "./components/experience.tsx";
import Footer from "./components/footer.tsx";

function App() {
    return (
        <>
            <ScrollToTopButton/>
            <Flex as="header" position="fixed" w="100%" zIndex={200}>
                <Navbar/>
            </Flex>
            {/* About Me Section */}
            <Flex bg={useColorModeValue("blue.100", "blue.900")} height={"100vh"} id={"home"} alignItems={"center"}
                  justifyContent={"center"}>
                <AboutMe/>
            </Flex>
            {/* Skills Section */}
            <Flex id={"skills"} alignItems={"center"} justifyContent={"center"}>
                <Box mt={20}>
                    <Skills/>
                </Box>
            </Flex>
            {/* Experience Section */}
            <Flex id={"experience"} alignItems={"center"} justifyContent={"center"}>
                <Box mt={20}>
                    <Experience/>
                </Box>
            </Flex>
            {/* Projects Section */}
            <Flex id={"projects"} alignItems={"center"} justifyContent={"center"}>
                <Box mt={20}>
                    <Heading mb={5}>Projects</Heading>
                    <VStack spacing={10}>
                        <Project {...VTuberTwitchFinder()} key={"twitchfinder"}/>
                        <Project {...LostNFound()} key={"lostnfound"}/>
                    </VStack>
                </Box>
            </Flex>
            <Footer/>
        </>
    )
}

export default App
