import "./Experience.css"

export default function Experience({ data, img }) {
    return (
        <div className="Experience">
            <div className="job">
                <h4 id="title">{data.title}</h4>
                <h4>{data.date}</h4>
            </div>
            <div className="img">
                <div className="img-border">
                    <img src={img} alt="" />
                </div>
                <div className="line"></div>
            </div>
            <div className="details">
                <h4 id="title">{data.company}</h4>
                <h4>{data.description}</h4>
            </div>
        </div>
    )
}