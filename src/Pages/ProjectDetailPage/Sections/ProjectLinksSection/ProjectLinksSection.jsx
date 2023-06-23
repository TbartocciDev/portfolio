import "./ProjectLinksSection.css"

export default function ProjectLinksSection({ data }) {
    return (
        <main className="ProjectLinksSection">
            <div className="content">
                <div className="project-links-div">
                    {data.map((link) => (
                        <div className="project-link">
                            <h2>{link.title}</h2>
                            <img src="https://icongr.am/clarity/angle.svg?size=128&color=ffffff" alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}