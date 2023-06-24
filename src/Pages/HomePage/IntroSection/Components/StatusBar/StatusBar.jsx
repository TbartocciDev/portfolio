import "./StatusBar.css"
import { Link } from "react-router-dom"

export default function StatusBar({ data }) {
    return (
        <Link to="/contact">
            <div className="StatusBar" id={data.status.toLowerCase()}>
                <div className="StatusCircle"></div>
                <p className="StatusLabel">{data.info}</p>
            </div>
        </Link>
    )
}