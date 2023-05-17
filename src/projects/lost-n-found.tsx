import {ProjectDetails, ProjectType} from "../components/project.tsx";
import {Box} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";

export default function LostNFound(): ProjectDetails {
    return {
        name: "LostNFound",
        url: "https://github.com/laviathan101/LostNFound",
        urlIcon: <AddIcon/>,
        projectType: ProjectType.Game,
        previewPath: "",
        languages: [
            {name: "GDScript", previewPath: ""}
        ],
        description: <Box>Cool game!</Box>,
    };
}