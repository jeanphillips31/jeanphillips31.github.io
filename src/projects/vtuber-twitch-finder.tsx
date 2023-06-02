import {ProjectDetails, ProjectType} from "../components/project.tsx";
import {useTranslation} from "react-i18next";

export default function VTuberTwitchFinder(): ProjectDetails {
    const {t} = useTranslation();
    
    return {
        name: t("proj_vtubersapp_title"),
        liveUrl: "https://vtubers.app",
        github: "https://github.com/jeanphillips31/Vtuber-Twitch-Finder",
        projectType: ProjectType.Website,
        previewPath: "",
        languages: [
            {name: "Typescript", previewPath: "/langs/shared/ts.png"},
            {name: "Next.js", previewPath: "/langs/frontend/next.png"},
            {name: "ASP.NET", previewPath: "/langs/backend/aspnet.png"}
        ],
        description: t("proj_vtubersapp_desc")
    };
}