import "./ProjectLinksSection.css"
import { Link } from "react-router-dom"

export default function ProjectLinksSection({ data }) {
    return (
        <main className="ProjectLinksSection">
            <div className="content">
                <div className="project-links-div">
                    {data.map((link, key) => (
                        <Link to={link.url} target="_blank" key={key}>
                            <div className="project-link">
                                <h2>{link.title}</h2>
                                <img src="https://icongr.am/clarity/angle.svg?size=128&color=ffffff" alt="" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}