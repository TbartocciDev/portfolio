import "./NavigationBar.css"

export default function NavigationBar({ data }) {

    function handleLinkClick(evt) {
        const page = document.getElementById(evt.target.innerHTML)
        page.scrollIntoView({behavior: 'smooth'})
    }
    
    return (
        <div className="NavigationBar" id="UnScrolled">
            <div className="content">
                <img src="" alt="" className="NavigationLogo"/>
                <div className="NavigationLinks-div">
                    {data.links.map((link, key) => (
                        <button 
                            className="NavigationLink"
                            id="SelectedLink" 
                            onClick={handleLinkClick}
                            key={key}>{link}</button>
                    ))}
                </div>
            </div>
        </div>
    )
}
