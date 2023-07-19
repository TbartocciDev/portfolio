import "./BlogPreview.css"
import { Link } from "react-router-dom";

export default function BlogPreview({ data, color }) {

    function scrollToTop() {
        document.body.scrollTop = document.documentElement.scrollTop = 0
    }

    return (
        <div className="BlogPreview">
            <div className="img">
                <img src="" alt="" />
            </div>
            <h3>{data.date}</h3>
            <h2>{data.title}</h2>
            <Link onClick={scrollToTop} className="link">
                <div className="readmore-btn"
                style={{backgroundColor: color}}
                ><h3>Read More</h3></div>
            </Link>
        </div>
    )
}