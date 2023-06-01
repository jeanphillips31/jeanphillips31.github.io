import {
    Box,
    Image,
    Text, WrapItem
} from "@chakra-ui/react";

interface Props {
    langName: string,
    langPath: string
}

export default function Skill(props: Props) {
    return (
        <WrapItem>
            <Box maxW={"sm"} borderWidth={"1px"} borderRadius={"lg"} shadow={"md"}>
                <Box width={200} height={200} p={2}>
                    <Image src={props.langPath} alt={props.langName} width={"100%"} height={"100%"}
                           objectFit={"contain"}/>
                </Box>
                <Text>{props.langName}</Text>
            </Box>
        </WrapItem>

    )
}