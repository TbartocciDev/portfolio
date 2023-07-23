import "./OutsideWorkSection.css"
import SubjectView from "./SubjectView/SubjectView"

export default function OutsideWorkSection({ data, storedSubject, subject, setSubject }) {
    var showingSubjects = []
    const subjects = document.querySelectorAll('.subject')

    var imgSrc = "/interests/"
    subjects.forEach((s) => {
        s.removeAttribute('id')
        if (s.children[0].innerHTML.toLowerCase() === subject) {
            s.setAttribute('id', 'selected')
        }
    })
    function sectionClicked(evt) {
        const clickedSubject = evt.target.children[0].innerHTML.toLowerCase()
        setSubject(clickedSubject)
        sessionStorage.setItem('outsideWork', clickedSubject)
        removeIdFromSubjects()
        evt.target.setAttribute('id','selected')
        
    }

    function removeIdFromSubjects() {
        subjects.forEach((s) => {
            s.removeAttribute('id')
        })
    }

    return (
        <main className="OutsideWorkSection">
            <div className="content">
                <h1>{data.title}</h1>
                <div className="subject-container">
                    <div className="btns-container">
                        {data.subjects.map((s, key) => (
                            <div 
                            className="subject" 
                            onClick={sectionClicked}
                            key={key}><h2>{s}</h2></div>
                        ))}
                    </div>
                    <div className="img">
                        <img src={process.env.PUBLIC_URL+imgSrc+subject+".png"} alt="" />
                    </div>
                    <SubjectView data={data.all} subject={subject}/>
                </div>
                
            </div>
        </main>
    )
}