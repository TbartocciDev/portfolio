import "./HowItWorksSection.css"
import IntstructionCard from "./InstructionCard"

export default function HowItWorksSection({ data }) {
    return (
        <main className="HowItWorksSection">
            <div className="content">
                <h1>How It Works</h1>
                <div className="instructions-container">
                {data.map((insruction) => (
                    <IntstructionCard data={insruction}/>
                ))}
                </div>
            </div>
        </main>
    )
}