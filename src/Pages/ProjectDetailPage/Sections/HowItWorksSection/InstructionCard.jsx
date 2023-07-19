import "./HowItWorksSection.css"

export default function IntstructionCard({ data }) {
    return (
        <div className="InstructionCard">
            <img src={process.env.PUBLIC_URL+data.img} alt="" />
            <div className="bottom">
                <h2>{data.title}</h2>
            </div>
            <h3>{data.summary}</h3>
        </div>
    )
}