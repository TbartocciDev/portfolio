import "./NavigationBar.css"

export default function NavigationBar({ data }) {
    return (
        <main className="NavigationBar">
            <div className="content">
                <img src="" alt="" className="NavigationLogo"/>
                <div className="NavigationLinks-div">
                    {data.links.map((link) => (
                        <button className="NavigationLink" id="SelectedLink">{link}</button>
                    ))}
                </div>
            </div>
        </main>
    )
}
