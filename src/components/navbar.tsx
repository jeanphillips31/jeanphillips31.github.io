import {
    Box,
    Button,
    Flex,
    HStack,
    IconButton,
    Stack,
    useColorMode,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import {CloseIcon, DownloadIcon, HamburgerIcon, MoonIcon, SunIcon} from "@chakra-ui/icons";

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
            About Me
        </Button>
    )
}

const Buttons = () => (
    <>
        <NavButton navToElement={"aboutme"} title={"About Me"}/>
        <NavButton navToElement={"experience"} title={"Experience"}/>
        <NavButton navToElement={"projects"} title={"Projects"}/>
    </>
)

export default function Navbar() {
    const {colorMode, toggleColorMode} = useColorMode();
    const {isOpen, onOpen, onClose} = useDisclosure();


    return (
        <>
            <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
                <Flex h={16}
                      alignItems={"center"}
                      justifyContent={"space-between"}>
                    {/* Show hamburger menu if the screen is too small */}
                    <IconButton size={"md"}
                                icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
                                aria-label={"Open Menu"}
                                display={{md: "none"}}
                                onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack as={"nav"}
                            spacing={4}
                            display={{base: "none", md: "flex"}}>
                        <Buttons/>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <HStack spacing={3}>
                            <Button leftIcon={<DownloadIcon/>} variant={"outline"}>
                                Resume
                            </Button>
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
                            </Button>
                        </HStack>
                    </Flex>
                </Flex>
                {/* Handle mobile menu*/}
                {isOpen ? (
                    <Box pb={4} display={{md: "none"}}>
                        <Stack as={"nav"} spacing={4}>
                            <Buttons/>
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}