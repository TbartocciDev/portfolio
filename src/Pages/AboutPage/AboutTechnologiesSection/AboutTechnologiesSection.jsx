import "./AboutTechnologiesSection.css"

import TechnologyCard from "./Components/TechnologyCard/TechnologyCard"

export default function AboutTechnologiesSection({ data }) {
    return (
        <main className="AboutTechnologiesSection">
            <div className="content">
                {/* <h1>{data.header}</h1> */}
                <div className="technologies-div">
                    {data.technologies.map((tech, key) => (
                        <TechnologyCard  data={tech} key={key}/>
                    ))}
                </div>
            </div>
        </main>
    )
}