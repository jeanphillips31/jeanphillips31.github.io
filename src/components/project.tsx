import {Box, Button, Flex, Heading, HStack, Image, Link, Text} from "@chakra-ui/react";
import {FaPlayCircle} from "react-icons/all";
import {FaGithub} from "react-icons/fa";

export enum ProjectType {
    Website,
    Game
}

export interface Language {
    name: string,
    previewPath: string
}

export interface ProjectDetails {
    name: string,
    description: string,
    projectType: ProjectType,
    liveUrl?: string,
    github?: string,
    previewPath: string,
    languages: Language[]
}

export default function Project(details: ProjectDetails) {
    return (
            <Box borderWidth={"1px"} borderRadius={"lg"} shadow={"md"} width={900} p={5}>
                <HStack spacing={10}>
                    <Image width={300} src={"/langs/shared/ts.png"}/>
                    <Box>
                            <Heading size={"lg"} textAlign={"left"}>
                                {details.name}
                            </Heading>
                        <HStack mt={5}>
                            <Text>Made using:</Text>
                            <HStack spacing={3}>
                                {details.languages.map((lang, index) => (
                                    <Box key={index}>
                                        <Image src={lang.previewPath} width={30}/>
                                    </Box>
                                ))}
                            </HStack>
                        </HStack>
                        <Flex textAlign={"left"} mt={5}>
                            {details.description}
                        </Flex>
                        <HStack mt={5}>
                            {/* Check if we have a live demo url, if so display it */}
                            {details.liveUrl && (
                            <Link href={details.liveUrl}
                                  rel="noopener noreferrer"
                                  target="_blank">
                                <Button leftIcon={<FaPlayCircle/>} aria-label={details.name} variant='outline'
                                        size={"sm"}>
                                    <Text>Live Demo</Text>
                                </Button>
                            </Link>
                            )}
                            {/* Check if we have a github url, if so display it */}
                            {details.github && (
                                <Link href={details.github}
                                      rel="noopener noreferrer"
                                      target="_blank">
                                    <Button leftIcon={<FaGithub/>} aria-label={details.name} variant='outline'
                                            size={"sm"}>
                                        <Text>Code</Text>
                                    </Button>
                                </Link>
                            )}
                        </HStack>
                    </Box>
                </HStack>
            </Box>
    )
}