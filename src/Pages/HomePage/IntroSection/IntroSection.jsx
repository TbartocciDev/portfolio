import "./IntroSection.css"

// components
import StatusBar from "./Components/StatusBar/StatusBar"
import ProjectButton from "./Components/ProjectsButton/ProjectsButton"

export default function IntroSection({ data }) {
    return (
        <main className="IntroSection" id="Home">
            <div className="content">
                <h3>{data.header}</h3>
                <h1>{data.subheader}</h1>
                <h3>{data.summary}</h3>
                <StatusBar data={data.statusData}/>
                <ProjectButton />
            </div>
        </main>
    )
}