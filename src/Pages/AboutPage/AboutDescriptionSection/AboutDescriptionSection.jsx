import "./AboutDescriptionSection.css"

export default function AboutDescriptionSection({ data }) {
    return (
        <main className="AboutDescriptionSection">
            <div className="content">
                <h1>{data.intro}</h1>
                <h1>Some Text</h1>
            </div>
        </main>
    )
}