import "./HowItWorksSection.css"

export default function IntstructionCard({ data }) {
    var instructionImg = `${process.env.PUBLIC_URL+data.img}${sessionStorage.getItem('mode')}.png`
    return (
        <div className="InstructionCard">
            <img src={instructionImg} alt="" />
            <div className="bottom">
                <h2>{data.title}</h2>
            </div>
            <h3>{data.summary}</h3>
        </div>
    )
}