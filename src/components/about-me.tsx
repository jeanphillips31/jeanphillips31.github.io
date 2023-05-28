import {
    AspectRatio,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    IconButton,
    Image,
    Link,
    SimpleGrid,
    Text, useBreakpointValue
} from "@chakra-ui/react";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {DownloadIcon} from "@chakra-ui/icons";
import {ReactElement} from "react";
import {useTranslation} from "react-i18next";


const Links = () => (
    <>
        <ExternalLink url={"https://github.com/jeanphillips31"} icon={<FaGithub/>} key={"github"} ariaLabel={"github"}/>
        <ExternalLink url={"https://www.linkedin.com/in/jean-phillips-5a3994143/"} icon={<FaLinkedin/>} key={"linkedin"}
                      ariaLabel={"linkedin"}/>
    </>
)

interface ExternalLinkProps {
    url: string,
    icon: ReactElement,
    ariaLabel: string
}

function ExternalLink(props: ExternalLinkProps) {
    return (
        <Link href={props.url} isExternal>
            <IconButton aria-label={props.ariaLabel} icon={props.icon} variant={"ghost"}/>
        </Link>
    )
}

function Resume() {
    const {t} = useTranslation();
    return (
        <>
            <Button leftIcon={<DownloadIcon/>} variant={"outline"}>
                {t("resume")}
            </Button>
        </>
    )
}

export default function AboutMe() {
    const isDesktop = useBreakpointValue({base: false, lg: true})
    const {t} = useTranslation();

    return (
        <Flex pb={10} pt={5} flex={1}>
            <SimpleGrid columns={2} spacing={10}>
                <Flex textAlign={"left"} ml={50}>
                    <Box>
                        <Heading fontSize={isDesktop ? 72 : 60} color={"red.500"} mr={5}
                                 display={"inline"}>{t("hi")}</Heading>
                        <Heading fontSize={isDesktop ? 72 : 60} display={"inline"}>{t("myname")}</Heading>
                        <Heading fontSize={24} as={"h2"} mt={5}>{t("fullstack")}</Heading>
                        <Text fontSize={isDesktop ? 20 : 16} mt={10}>
                            {t("aboutme")}
                        </Text>
                        <HStack spacing={3} mt={5}>
                            <Links/>
                            <Resume/>
                        </HStack>

                    </Box>
                </Flex>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <AspectRatio ratio={1} width={"60%"}>
                        <Image alt={"me"} src={"/kitty.jpg"} borderRadius={30} objectFit="cover"/>
                    </AspectRatio>
                </Flex>
            </SimpleGrid>
        </Flex>
    )
}