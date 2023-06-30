import "./ProjectPreviewsSection.css";

export default function ProjectPreviewsSection({ data, mode }) {
    var previews = []
    data.forEach((prev) => (
        previews.push(`${prev}${mode}.png`)
    ))

    return (
        <main className="ProjectPreviewsSection">
            <div className="content">
                <div className="previews-div">
                    {previews.map((prev) => (
                        <img src={prev} alt="" />
                    ))}
                </div>
            </div>
        </main>
    )
}