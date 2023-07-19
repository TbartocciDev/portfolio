import "./AboutIntroSection.css"

export default function AboutIntroSection({ data }) {
    function handlePictureClicked(evt) {
        evt.target.setAttribute('id', 'funny')
        setTimeout(revertToNormal, 2000)
    }

    function revertToNormal() {
        const img = document.querySelector('.face-photo')
        img.setAttribute('id', 'normal')
    }
    
    return (
        <main className="AboutIntroSection">
            <div className="content">
                <h1>Who is Tommy?</h1>
                <div className="summary">
                    <div className="img-div">
                        <div className="img-content">
                            <img src="" alt="" 
                            id="normal"
                            className="face-photo"
                            onClick={handlePictureClicked}/>
                            <h3>Interact with me!</h3>
                        </div>
                    </div>
                    <div className="about-intro-text">
                        <h2>{data.summary}</h2>
                        <h2>{data.background}</h2>
                        <h2>{data.finalWords}</h2>
                    </div>
                </div>
            </div>
        </main>
    )
}