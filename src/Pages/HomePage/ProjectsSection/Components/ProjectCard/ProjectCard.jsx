import "./ProjectCard.css";
import { Link } from "react-router-dom";

export default function ProjectCard({ data, mode }) {
    let hookUrl = `${data.hookScreen}${sessionStorage.getItem('mode')}.png`

    function scrollToTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }
    
    return (
            <div className="ProjectCard">
                <div className="img">
                    <img src={process.env.PUBLIC_URL+hookUrl} alt="" />
                </div>
                <div className="name-logo">
                    <img src={process.env.PUBLIC_URL+data.logo} alt="/" className="logo-img"/>
                    <h1>{data.name}</h1>
                </div>
                <h3>{data.brief}</h3>
                <Link to={`/${data.name}`} onClick={scrollToTop} className="link">
                    <div className="details-btn"><h3>More Details</h3></div>
                </Link>
            </div>
        
    )
}