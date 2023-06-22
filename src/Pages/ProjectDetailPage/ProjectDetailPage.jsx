import "./ProjectDetailPage.css";
import { useParams } from "react-router-dom";

// Sections
import ProjectSummarySection from "./Sections/ProjectSummarySection/ProjectSummarySection";
import ProjectPreviewsSection from "./Sections/ProjectPreviewsSection/ProjectPreviewsSection";
import ProjectTechnologiesSection from "./Sections/ProjectTechnologiesSection/ProjectTechnologiesSection";
import ProjectLinksSection from "./Sections/ProjectLinksSection/ProjectLinksSection";

export default function ProjectDetailPage({ data }) {

    let { projectName } = useParams();
    let project = data.find((pro) => pro.name === projectName);
    console.log(project)

    return (
        <main className="ProjectDetailPage">
            <ProjectSummarySection data={project}/>
            <ProjectPreviewsSection data={project.previews}/>
            <ProjectTechnologiesSection data={project.technologies}/>
            <ProjectLinksSection data={project.links}/>
        </main>
    )
}