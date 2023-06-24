import "./NavigationBar.css"

import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function NavigationBar({ data }) {
    let movingDiv = null
    const colors = ['red','blue','green','yellow',]

    useEffect(() => {
        movingDiv = document.querySelector('.nav-moving')
        const homePageLink = document.querySelector('.NavigationLink')
        const newWidth = homePageLink.offsetWidth;
        console.log('normal: ',movingDiv.offsetWidth,' new: ', newWidth)
        movingDiv.style.width = newWidth+'px'
        console.log('is now: ', movingDiv.offsetWidth)
    },[])
    
    function handleLinkClick(evt) {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        // moving x coord
        const linksDiv = document.querySelector('.Links-div').getBoundingClientRect();
        const startingX = linksDiv.left;
        const rect = evt.target.getBoundingClientRect();
        const rectXPos = rect.left;
        const finalXPos = Math.abs(startingX - rectXPos);

        // scaling
        const startingWidth = document.querySelector('.NavigationLink').firstChild.offsetWidth;
        const newWidth = evt.target.firstChild.offsetWidth;
        const widthScaleChange = (newWidth/startingWidth) * 100
        const translateVal = 'translate3d('+finalXPos+'px, 0px, 0) scale('+widthScaleChange+'%, 100%)';

        console.log('start: ',startingWidth, ' new:',newWidth, ' change: ', widthScaleChange, '%')
        movingDiv.style.transform = translateVal;
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
                                // style={{backgroundColor: colors[key]}}
                                >
                                    <h3>{link.title}</h3>
                            </Link>
                        ))}
                    </div>
                    <div className="nav-moving"></div>
                </div>
            </div>
        </div>
    )
}
