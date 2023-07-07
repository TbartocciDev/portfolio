import "./ProjectSummarySection.css";

export default function ProjectSummarySection({ data, mode }) {
    var homeScreen = `${data.homeScreen}${mode}`

    return (
        <main className="ProjectSummarySection">
            <div className="content">
                <div className="summary-div">
                    <h1>{data.name}</h1>
                    <h4>Role: {data.role}</h4>
                    <h2>{data.summary}</h2>
                </div>
                <div className="img-div">
                    <img src={process.env.PUBLIC_URL+homeScreen} alt="" />
                </div>
            </div>
        </main>
    )
}