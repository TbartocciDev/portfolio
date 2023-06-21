import "./ProjectSummarySection.css";

export default function ProjectSummarySection({ data }) {
    return (
        <main className="ProjectSummarySection">
            <div className="content">
                <div className="summary-div">
                    <h1>{data.name}</h1>
                    <h2>{data.summary}</h2>
                </div>
                <img src="" alt="" />
            </div>
        </main>
    )
}