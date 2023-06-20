import "./IntroSection.css"

// components
import StatusBar from "./Components/StatusBar/StatusBar"
import ProjectButton from "./Components/ProjectsButton/ProjectsButton"

export default function IntroSection({ data }) {
    return (
        <main className="IntroSection" id="Home">
            <div className="content">
                <h2>{data.header}</h2>
                <h1>{data.subheader}</h1>
                <h2>{data.summary}</h2>
                <StatusBar data={data.statusData}/>
                <ProjectButton />
            </div>
        </main>
    )
}