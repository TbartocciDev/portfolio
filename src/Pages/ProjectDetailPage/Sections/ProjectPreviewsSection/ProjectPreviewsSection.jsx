import "./ProjectPreviewsSection.css";

export default function ProjectPreviewsSection({ data, mode }) {
    var previews = []
    data.forEach((prev) => (
        previews.push(`${prev}${mode}`)
    ))

    return (
        <main className="ProjectPreviewsSection">
            <div className="content">
                <div className="previews-div">
                    {previews.map((prev, key) => (
                        <img src={process.env.PUBLIC_URL+prev} alt="" key={key}/>
                    ))}
                </div>
            </div>
        </main>
    )
}