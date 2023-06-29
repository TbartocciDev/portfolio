import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ data }) {

    function scrollToTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }
    
    return (
        <Link to={`/${data.name}`} onClick={scrollToTop}>
            <div className="ProjectCard">
                <img src={data.hookScreen} alt="" />
                <div className="info-section">
                    <h3>{data.projectType}</h3>
                    <h1>{data.name}</h1>
                </div>
                <h3 className="type">{data.appType}</h3>
            </div>
        </Link>
    )
}