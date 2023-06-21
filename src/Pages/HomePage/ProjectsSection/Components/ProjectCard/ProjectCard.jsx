import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ data }) {
    return (
        <Link to={`/${data.name}`}>
            <div className="ProjectCard">
                <img src="/iPhone.png" alt="" />
                <div className="info-section">
                    <h3>{data.projectType}</h3>
                    <h1>{data.name}</h1>
                </div>
            </div>
        </Link>
    )
}