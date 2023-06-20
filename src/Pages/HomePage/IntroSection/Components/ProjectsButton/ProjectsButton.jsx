import "./ProjectsButton.css"

export default function ProjectButton() {
    function scrollToProjects() {
        const projectSection = document.getElementById('Projects');
        projectSection.scrollIntoView({behavior: 'smooth'});
    }
    return (
        <div className="ProjectButton" onClick={scrollToProjects}>
            <img src="https://icongr.am/clarity/angle-double.svg?size=128&color=808080" alt="" />
            <h3>See Projects</h3>
        </div>
    )
}