import "./AboutIntroSection.css"

export default function AboutIntroSection({ data }) {
    return (
        <main className="AboutIntroSection">
            <div className="content">
                <div className="about-intro-text">
                    <h2>{data.summary}</h2>
                    <h2>{data.background}</h2>
                    <h2>{data.finalWords}</h2>
                </div>
                <div className="img-div">
                    <img src="/straight.jpeg" alt="" />
                </div>
            </div>
        </main>
    )
}