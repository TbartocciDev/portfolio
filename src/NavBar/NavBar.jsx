import "./NavBar.css"
import { Link } from "react-router-dom"

export default function NavBar({ data, page }) {

    const pageLinks = document.querySelectorAll('.page-link')
    pageLinks.forEach((link) => {
        link.removeAttribute('id')
        if (link.children[0].innerHTML.toLowerCase() === page) {
            link.setAttribute('id', 'currPage')
        }
    })

    function handleClick() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }

    return (
        <main className="NavBar">
            <div className="content">
                <div className="nav-links"
                    style={{
                        display:"grid",
                        gridTemplateColumns: `repeat(${data.links.length}, 1fr)`
                    }}>
                    {data.links.map((link) => (
                        <Link to={link.url} className="page-link" onClick={handleClick}>
                            <p>{link.title}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    )
}