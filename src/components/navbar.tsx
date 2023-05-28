import {
    Box,
    Button, ButtonGroup, Container,
    Flex,
    HStack,
    IconButton, Image, Select,
    Stack, useBreakpointValue,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {CloseIcon, HamburgerIcon, MoonIcon, SunIcon} from "@chakra-ui/icons";
import {LANGUAGES} from "../data/languages.ts";
import {useTranslation} from "react-i18next";

interface ButtonProps {
    navToElement: string,
    title: string
}

function NavButton(props: ButtonProps) {
    return (
        <Button
            px={2}
            py={1}
            variant={"ghost"}
            _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700")
            }}
            onClick={() => {
                document.getElementById(props.navToElement)?.scrollIntoView({behavior: "smooth"})
            }}>
            {props.title}
        </Button>
    )
}

function Buttons() {
    const {t} = useTranslation();
    return (
        <>
            <NavButton navToElement={"aboutme"} title={t("aboutme_button")}/>
            <NavButton navToElement={"education"} title={t("education_button")}/>
            <NavButton navToElement={"skills"} title={t("skills_button")}/>
            <NavButton navToElement={"experience"} title={t("experience_button")}/>
            <NavButton navToElement={"projects"} title={t("projects_button")}/>
        </>
    )
}

function LightModePicker() {
    const {colorMode, toggleColorMode} = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
        </Button>
    )
}

function LanguageOptions() {
    const {i18n} = useTranslation();
    return (
        <>
            <Select defaultValue={"es"} variant='outline' onChange={(e) => i18n.changeLanguage(e.target.value)}>
                {LANGUAGES.map(({code, label}) => (
                    <option key={code} value={code}>
                        {label}
                    </option>
                ))}
            </Select>
        </>
    )
}

export default function Navbar() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const isDesktop = useBreakpointValue({base: false, lg: true})

    return (
        <Box as="section" bg={useColorModeValue("gray.100", "gray.900")}>
            <Box as="nav" bg="bg-surface" boxShadow="sm">
                <Container py={{base: '4', lg: '5'}} maxW={"1500"}>
                    <HStack spacing="10" justify="space-between">
                        <Image alt={"home"} src={"/vite.svg"}/>
                        {isDesktop ? (
                            <Flex justify="space-between" flex="1">
                                <ButtonGroup variant="link" spacing="8">
                                    <Buttons/>
                                </ButtonGroup>
                                <HStack spacing="3">
                                    <LanguageOptions/>
                                    <LightModePicker/>
                                </HStack>
                            </Flex>
                        ) : (
                            <HStack>
                                <LanguageOptions/>
                                <LightModePicker/>
                                <IconButton size={"md"}
                                            icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                                            aria-label={"Open Menu"}
                                            onClick={isOpen ? onClose : onOpen}
                                />
                            </HStack>
                        )}
                    </HStack>
                </Container>
            </Box>
            {/* Handle mobile menu*/}
            {isOpen ? (
                <Box pb={4}>
                    <Stack as={"nav"} spacing={4}>
                        <Buttons/>
                    </Stack>
                </Box>
            ) : null}
        </Box>

    )
}