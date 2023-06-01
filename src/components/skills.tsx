import {
    Box,
    Heading,
    Tabs,
    Text,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Wrap,
    Container
} from "@chakra-ui/react";
import {useTranslation} from "react-i18next";
import Skill from "./skill.tsx";

interface SkillData {
    key: string,
    path: string,
    name: string
}

interface Props {
    skills: SkillData[]
}

function SkillList(props: Props) {
    return (
        <Container maxW={900}>
            <Wrap spacing={5} justify={"center"}>
                {props.skills.map((s) => (
                    <Skill key={s.key} langName={s.name} langPath={s.path}/>
                ))}
            </Wrap>
        </Container>
    )
}

export default function Skills() {
    const {t} = useTranslation();

    return (
        <Box>
            <Heading size={"2xl"} mb={5}>{t("skills_title")}</Heading>
            <Tabs variant='soft-rounded' isFitted>
                <TabList>
                    <Tab>
                        <Text>
                            {t("frontend")}
                        </Text>
                    </Tab>
                    <Tab>
                        <Text>
                            {t("backend")}
                        </Text>
                    </Tab>
                    <Tab>
                        <Text>
                            {t("engines")}
                        </Text>
                    </Tab>
                    <Tab>
                        <Text>
                            {t("tools")}
                        </Text>
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <SkillList skills={
                            [
                                {key: "typescript", path: "/langs/shared/ts.png", name: "Typescript"},
                                {key: "javascript", path: "/langs/shared/js.png", name: "Javascript"},
                                {key: "react", path: "/langs/frontend/react.png", name: "React"},
                                {key: "nextjs", path: "/langs/frontend/next.png", name: "Next.js"},
                                {key: "winforms", path: "/langs/frontend/winforms.png", name: "Winforms"},
                                {key: "html", path: "/langs/frontend/html5.png", name: "HTML5"},
                            ]
                        }/>
                    </TabPanel>
                    <TabPanel>
                        <SkillList skills={
                            [
                                {key: "typescript", path: "/langs/shared/ts.png", name: "Typescript"},
                                {key: "javascript", path: "/langs/shared/js.png", name: "Javascript"},
                                {key: "C#", path: "/langs/backend/csharp.png", name: "C#"},
                                {key: "nodejs", path: "/langs/backend/nodejs.png", name: "Node.js"},
                                {key: "aspnet", path: "/langs/backend/aspnet.png", name: "ASP.NET"},
                                {key: "vbnet", path: "/langs/backend/vbnet.png", name: "VB.NET"},
                            ]
                        }/>
                    </TabPanel>
                    <TabPanel>
                        <SkillList skills={
                            [
                                {key: "unity", path: "/langs/game-engines/unity.png", name: "Unity"},
                                {key: "godot", path: "/langs/game-engines/godot.png", name: "Godot"},
                                {key: "renpy", path: "/langs/game-engines/renpy.png", name: "Ren'Py"}
                            ]
                        }/>
                    </TabPanel>
                    <TabPanel>
                        <SkillList skills={
                            [
                                {key: "github", path: "/langs/tools/github.png", name: "Github"},
                                {key: "sourcetree", path: "/langs/tools/sourcetree.png", name: "SourceTree"},
                                {key: "bitbucket", path: "/langs/tools/bitbucket.png", name: "Bitbucket"},
                                {key: "docker", path: "/langs/tools/docker.png", name: "Docker"},
                                {key: "sql-server", path: "/langs/tools/sql-server.png", name: "SQL Server"},
                                {key: "mysql", path: "/langs/tools/mysql.png", name: "MySQL"}
                            ]
                        }/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}