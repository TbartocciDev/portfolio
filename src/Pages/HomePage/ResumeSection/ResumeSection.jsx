import "./ResumeSection.css"
import Experience from "./Experience/Experience"
import { json } from "react-router-dom"

export default function ResumeSection({ data }) {
    var workExperiences = []
    var educationExperiences = []
    data.experiences.forEach(experience => {
        if (experience.type === "work") {
            workExperiences.push(experience)
        } else {
            educationExperiences.push(experience)
        }
    });
    return (
        <main className="ResumeSection">
            <div className="content">
                <h1>Resume</h1>
                <h2>Work Experience</h2>
                <div className="work">
                    {workExperiences.map((experience, key) => (
                        <Experience data={experience} key={key} img="https://icongr.am/entypo/briefcase.svg?size=128&color=000000"/>
                    ))}
                </div>
                <h2>Education</h2>
                <div className="education">
                    {educationExperiences.map((experience, key) => (
                        <Experience data={experience} key={key} img="https://icongr.am/entypo/book.svg?size=128&color=000000"/>
                    ))}
                </div>
            </div>
        </main>
    )
}