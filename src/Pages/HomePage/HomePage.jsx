import "./HomePage.css"
import { useEffect } from 'react';
// Sections
import IntroSection from "./IntroSection/IntroSection"
import ProjectsSection from "./ProjectsSection/ProjectsSection"

export default function HomePage({ data, mode, setMode }) {
    useEffect(()=> {
        setMode(sessionStorage.getItem('mode'))
    })
    
    return (
        <main className="HomePage">
            <IntroSection data={data.introSection}/>
            <ProjectsSection data={data.projectsSection} mode={mode}/>
        </main>
    )
}