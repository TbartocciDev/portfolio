import "./ProjectTechnologiesSection.css";

export default function ProjectTechnologiesSection({ data }) {
    return (
        <main className="ProjectTechnologiesSection">
            <div className="content">
                <h1>Technologies</h1>
                <div className="technologies-div">
                    {data.map((tech, key) => (
                        <h2 key={key}>
                            {tech}
                        </h2>
                    ))}
                </div>
            </div>
        </main>
    )
}