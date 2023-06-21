import "./ProjectDetailPage.css";
import { useParams } from "react-router-dom";

// Sections
import ProjectSummarySection from "./Sections/ProjectSummarySection/ProjectSummarySection";
import ProjectTechnologiesSection from "./Sections/ProjectTechnologiesSection/ProjectTechnologiesSection";

export default function ProjectDetailPage({ data }) {

    let { projectName } = useParams();
    let project = data.find((pro) => pro.name === projectName);
    console.log(project)

    return (
        <main className="ProjectDetailPage">
            <ProjectSummarySection data={project}/>
            <ProjectTechnologiesSection />
        </main>
    )
}