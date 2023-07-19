import "./ProjectDetailPage.css";
import { useParams } from "react-router-dom";

// Sections
import ProjectSummarySection from "./Sections/ProjectSummarySection/ProjectSummarySection";
import HowItWorksSection from "./Sections/HowItWorksSection/HowItWorksSection";
import ProjectPreviewsSection from "./Sections/ProjectPreviewsSection/ProjectPreviewsSection";
import ProjectTechnologiesSection from "./Sections/ProjectTechnologiesSection/ProjectTechnologiesSection";
import ProjectLinksSection from "./Sections/ProjectLinksSection/ProjectLinksSection";

export default function ProjectDetailPage({ data, mode }) {

    const { projectName } = useParams();
    const project = data.find((pro) => pro.name === projectName);

    return (
        <main className="ProjectDetailPage">
            <ProjectSummarySection data={project} mode={mode}/>
            <HowItWorksSection data={project.howItWorks}/>
            {/* <ProjectPreviewsSection data={project.previews} mode={mode}/>
            <ProjectTechnologiesSection data={project.technologies}/> */}
            <ProjectLinksSection data={project.links}/>
        </main>
    )
}