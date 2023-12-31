import "./NavigationBar.css"

import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function NavigationBar({ data, setMode}) {
    let mode = sessionStorage.getItem('mode')
    let modeIconUrl = ""
    let movingDiv = null
    let modeIconColor = 'ffffff'

    if (mode === "dark") {
        modeIconUrl = "https://icongr.am/clarity/moon.svg?size=128&color="+modeIconColor
    } else {
        modeIconUrl = "https://icongr.am/clarity/sun.svg?size=128&color="+modeIconColor
    }

    useEffect(() => {
        movingDiv = document.querySelector('.nav-moving')
        const linksDiv = document.querySelector('.Links-div')
        const homePageLink = document.querySelector('.NavigationLink')
        const divHeight = linksDiv.offsetHeight;
        const linkHeight = homePageLink.offsetHeight;
        homePageLink.setAttribute('id', 'SelectedNavLink')

        // console.log('normal: ',movingDiv.offsetWidth,' new: ', homePageLink.offsetWidth)
        // movingDiv.style.width = homePageLink.offsetWidth+'px'
        // movingDiv.style.height = linkHeight + 'px'

        movingDiv.style.top = (((1-(linkHeight/divHeight)))/4)*100+'px'
    },[])

    window.onresize = function() {
        const homePageLink = document.querySelector('.NavigationLink')
        const linkHeight = homePageLink.offsetHeight;
        // movingDiv.style.height = linkHeight + 'px'

    }

    function toggleMode() {
        let modeIcon = document.querySelector('.mode-icon')
        if (mode === "light") {
            setMode("dark");
            sessionStorage.setItem('mode', 'dark')
            modeIcon.src = "https://icongr.am/clarity/moon.svg?size=128&color="+modeIconColor
            console.log('mode set to dark')
        } else {
            setMode("light");
            sessionStorage.setItem('mode', 'light')
            modeIcon.src = "https://icongr.am/clarity/sun.svg?size=128&color="+modeIconColor
            console.log('mode set to light')
        }
    }
    
    function handleLinkClick(evt) {
        // check for scroll
        document.body.scrollTop = document.documentElement.scrollTop = 0;

        // moving x coord
        movingDiv.style.marginLeft = '0vh'
        const linksDiv = document.querySelector('.Links-div').getBoundingClientRect();
        const startingX = linksDiv.left;
        const rect = evt.target.getBoundingClientRect();
        const rectXPos = rect.left;
        const finalXPos = Math.abs(startingX - rectXPos);
        
        // scaling
        const newWidth = evt.target.offsetWidth;
        const translateVal = 'translate('+finalXPos+'px, 0px)';
        
        // movingDiv.style.width = newWidth+'px'
        // movingDiv.style.transform = translateVal
        
        // remove and add id
        const links = document.querySelectorAll('.NavigationLink')
        links.forEach((link) => {
            link.removeAttribute('id')
        })
        
        evt.target.setAttribute('id', 'SelectedNavLink')
    }

    return (
        <div className="NavigationBar" id="UnScrolled">
            <div className="content">
                <div className="NavigationLinks-div">
                    <div className="Links-div">
                        {data.links.map((link, key) => (
                            <Link
                                to={link.url}
                                onClick={handleLinkClick}
                                className="NavigationLink"
                                key={key}
                                >
                                <h3 className={link.title}>{link.title}</h3>
                            </Link>
                        ))}
                    </div>
                    <div className="nav-moving">

                    </div>
                </div>
                <div 
                    className="light-dark"
                    onClick={toggleMode}
                    title="Change the projects mode">
                    <img src={modeIconUrl} alt="" className="mode-icon"/>
                </div>
            </div>
        </div>
    )
}
