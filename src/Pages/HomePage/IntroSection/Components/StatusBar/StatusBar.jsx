import "./StatusBar.css"

export default function StatusBar({ data }) {
    if (data.status.toLowerCase() === "open") {
        return (
            <div className="StatusBar" id="OpenToWork">
                <div className="StatusCircle"></div>
                <p className="StatusLabel">{data.info}</p>
            </div>
        )
    } else if (data.status.toLowerCase() === "closed") {
        return (
            <div className="StatusBar" id="ClosedToWork">
                <div className="StatusCircle"></div>
                <p className="StatusLabel">{data.info}</p>
            </div>
        )
    } else if (data.status.toLowerCase() === "exploring") {
        return (
            <div className="StatusBar" id="ExploringWork">
                <div className="StatusCircle"></div>
                <p className="StatusLabel">{data.info}</p>
            </div>
        )
    }
}