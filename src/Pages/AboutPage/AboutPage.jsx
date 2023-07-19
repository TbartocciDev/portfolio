import "./AboutPage.css"

// Section
import AboutIntroSection from "./AboutIntroSection/AboutIntroSection"
import AboutTechnologiesSection from "./AboutTechnologiesSection/AboutTechnologiesSection"

export default function AboutPage({ data }) {
    return (
        <main className="AboutPage">
            <AboutIntroSection data={data.introSection}/>
            {/* <AboutTechnologiesSection data={data.technologiesSection}/> */}
        </main>
    )
}