import "./ProjectSummarySection.css";

export default function ProjectSummarySection({ data, mode }) {
    var homeScreen = `${data.homeScreen}${mode}`

    return (
        <main className="ProjectSummarySection">
            <div className="content">
                <div className="summary-div">
                    <h1>Introducing {data.name}</h1>
                    <h2>Role: {data.role}</h2>
                    <h3>{data.summary}</h3>
                    <div className="technologies">
                        <h2>Technologies:</h2>
                        <ul className="tech-list">
                            {data.technologies.map((tech) => (
                                <li><h2>{tech}</h2></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="img-div">
                    <img src={process.env.PUBLIC_URL+homeScreen+'.png'} alt="" />
                </div>
            </div>
        </main>
    )
}