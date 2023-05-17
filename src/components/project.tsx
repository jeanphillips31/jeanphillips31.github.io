import {Box, Card, CardBody, CardHeader, HStack, IconButton, Link, VStack} from "@chakra-ui/react";
import {ReactElement, ReactNode} from "react";

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
    description: ReactNode,
    projectType: ProjectType,
    url?: string,
    urlIcon?: ReactElement,
    previewPath: string,
    languages: Language[]
}

export default function Project(details: ProjectDetails) {
    return (
        <Card>
            <CardHeader>
                <HStack spacing={5} justify={"center"}>
                    <Box>{details.name}</Box>
                    {details.url && (
                        <Link href={details.url}
                              rel="noopener noreferrer"
                              target="_blank">
                            <IconButton aria-label={details.name} variant='outline' icon={details.urlIcon}
                                        size={"sm"}></IconButton>
                        </Link>
                    )}
                </HStack>
            </CardHeader>
            <CardBody>
                <VStack>
                    <HStack>
                        {details.languages.map((lang) => (
                            <Box>
                                {lang.name}
                            </Box>
                        ))}
                    </HStack>
                </VStack>
                {details.description}
            </CardBody>
        </Card>
    )
}