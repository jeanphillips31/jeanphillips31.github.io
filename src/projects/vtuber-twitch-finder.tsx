import {ProjectDetails, ProjectType} from "../components/project.tsx";
import {Box} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

export default function VTuberTwitchFinder(): ProjectDetails {
    return {
        name: "VTuber Twitch Finder",
        url: "https://vtubers.app",
        urlIcon: <AddIcon/>,
        projectType: ProjectType.Website,
        previewPath: "",
        languages: [
            {name: "Typescript", previewPath: ""},
            {name: "Next.js", previewPath: ""},
            {name: "ASP.NET", previewPath: ""}
        ],
        description: <Box>POGGERS</Box>,
    };
}