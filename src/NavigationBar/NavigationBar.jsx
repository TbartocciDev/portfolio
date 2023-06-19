import "./NavigationBar.css"

export default function NavigationBar({ data }) {
    return (
        <main className="NavigationBar" id="UnScrolled">
            <div className="content">
                <img src="" alt="" className="NavigationLogo"/>
                <div className="NavigationLinks-div">
                    {data.links.map((link, key) => (
                        <button className="NavigationLink" id="SelectedLink" key={key}>{link}</button>
                    ))}
                </div>
            </div>
        </main>
    )
}
