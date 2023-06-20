import "./ProjectsSection.css"

// Components
import ProjectCard from "./Components/ProjectCard/ProjectCard"
import FilterView from "./Components/FilterView/FilterView"

export default function ProjectsSection({ data }) {
    return (
        <main className="ProjectsSection" id="Projects">
            <div className="content">
                <h1>{data.header}</h1>
                <h2>{data.subheader}</h2>
                {/* <FilterView data={data.projects}/> */}
                <div className="ProjectsDiv">
                    {data.projects.map((project, key) => (
                        <ProjectCard data={project} key={key}/>
                    ))}
                </div>
            </div>
        </main>
    )
}