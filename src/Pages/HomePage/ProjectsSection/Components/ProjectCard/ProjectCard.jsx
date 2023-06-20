import "./ProjectCard.css"

export default function ProjectCard({ data }) {
    return (
        <div className="ProjectCard">
            <img src="/iPhone.png" alt="" />
            <div className="info-section">
                <h3>{data.projectType}</h3>
                <h1>{data.name}</h1>
            </div>
        </div>
    )
}