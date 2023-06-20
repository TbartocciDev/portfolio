import "./HomePage.css"

// Sections
import IntroSection from "./IntroSection/IntroSection"
import ProjectsSection from "./ProjectsSection/ProjectsSection"

export default function HomePage({ data }) {
    return (
        <main className="HomePage">
            <IntroSection data={data.introSection}/>
            <ProjectsSection data={data.projectsSection}/>
        </main>
    )
}