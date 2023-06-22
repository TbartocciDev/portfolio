import "./ProjectPreviewsSection.css";

export default function ProjectPreviewsSection({ data }) {
    return (
        <main className="ProjectPreviewsSection">
            <div className="content">
                <div className="previews-div">
                    {data.map((prev) => (
                        <img src={prev} alt="" />
                    ))}
                </div>
            </div>
        </main>
    )
}