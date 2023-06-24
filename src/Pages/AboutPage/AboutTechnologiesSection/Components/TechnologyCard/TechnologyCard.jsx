import "./TechnologyCard.css"

export default function TechnologyCard({ data }) {
    return (
        <div className="TechnologyCard">
            <img src={data.url} alt="" />
            <h2>{data.name}</h2>
        </div>
    )
}