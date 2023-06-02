import {VStack, Text, Heading, UnorderedList, ListItem, Box} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";

interface Props {
    startDate: string,
    endDate: string,
    title: string,
    companyName: string
    jobs: string[]
}

export default function Experience() {
    const {t} = useTranslation();

    return (
        <Box maxW={1000}>
            <Heading size={"2xl"} mb={5}>{t("experience_title")}</Heading>
            <VStack>
                <Job startDate={t("exp_jaix_start_date")} endDate={t("exp_jaix_end_date")}
                     title={t("exp_jaix_full_title")} companyName={t("exp_jaix_name")}
                     jobs={t("exp_jaix_jobs", {returnObjects: true})}/>
            </VStack>
        </Box>
    )
}

function Job(props: Props) {
    return (
        <Box borderWidth={"1px"} borderRadius={"lg"} shadow={"md"}>
            <VStack>
                <Heading size={"lg"}>
                    {props.title}
                </Heading>
                <Heading as={"h2"} size={"md"}>
                    {props.startDate} - {props.endDate}
                </Heading>
                <Box>
                    <UnorderedList listStyleType={"circle"} mx={10} mb={5} textAlign={"left"}>
                        {props.jobs.map((j) => (
                            <ListItem key={j.substring(0, 10) + props.companyName}>
                                <Text>{j}</Text>
                            </ListItem>
                        ))}
                    </UnorderedList>
                </Box>
            </VStack>
        </Box>
    )
}