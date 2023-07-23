import "./HomePage.css"
import { useEffect } from 'react';
// Sections
import IntroSection from "./IntroSection/IntroSection"
import ProjectsSection from "./ProjectsSection/ProjectsSection"
import ResumeSection from "./ResumeSection/ResumeSection";
import RecentBlogSection from "./RecentBlogSection/RecentBlogSection";

export default function HomePage({ data, mode, setMode, setPage }) {
    
    useEffect(()=> {
        setMode(sessionStorage.getItem('mode'))
    })

    setPage("home")
    
    return (
        <main className="HomePage">
            <IntroSection data={data.heroSection}/>
            <ProjectsSection data={data.projectsSection} mode={mode}/>
            <ResumeSection data={data.resumeSection}/>
            {/* <RecentBlogSection data={data.blogPage}/> */}
        </main>
    )
}