import "./AboutPage.css"

import AboutIntroSection from "./AboutIntroSection/AboutIntroSection"
import OutsideWorkSection from "./OutsideWorkSection/OutsideWorkSection"

export default function AboutPage({ data, subject, setSubject, setPage}) {

    if (!sessionStorage.getItem('outsideWork')) {
        sessionStorage.setItem('outsideWork', 'hobbies')
    }
    
    setPage("about")

    return (
        <main className="AboutPage">
            <AboutIntroSection data={data.introSection}/>
            <OutsideWorkSection 
            data={data.outsideWork} 
            storedSubject={sessionStorage.getItem('outsideWork')}
            subject={subject}
            setSubject={setSubject}
             />
        </main>
    )
}