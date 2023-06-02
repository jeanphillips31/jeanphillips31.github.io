import {ProjectDetails, ProjectType} from "../components/project.tsx";
import {useTranslation} from "react-i18next";

export default function LostNFound(): ProjectDetails {
    const {t} = useTranslation();
    
    return {
        name: t("proj_lostnfound_title"),
        github: "https://github.com/jeanphillips31/LostNFound",
        projectType: ProjectType.Game,
        previewPath: "",
        languages: [
            {name: "GDScript", previewPath: "/langs/game-engines/godot.png"}
        ],
        description: t("proj_lostnfound_desc"),
    };
}