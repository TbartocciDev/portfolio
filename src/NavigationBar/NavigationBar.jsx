import "./NavigationBar.css"

export default function NavigationBar({ data }) {

    function handleLinkClick(evt) {
        const page = document.getElementById(evt.target.innerHTML)
        alert(page)
    }
    
    return (
        <div className="NavigationBar" id="UnScrolled">
            <div className="content">
                <div className="NavigationLinks-div">
                    {data.links.map((link, key) => (
                        <button 
                            className="NavigationLink"
                            id="SelectedLink" 
                            onClick={handleLinkClick}
                            key={key}><h3>{link}</h3></button>
                    ))}
                </div>
            </div>
        </div>
    )
}
