import "./Header.css"

export default function Header({ data }) {
    return (
        <main className="Header">
            <div className="content">
                <div className="img">
                    <img src={data.img} alt="" />
                </div>
                <h1>{data.title}</h1>
                <h2>{data.date}</h2>
            </div>
        </main>
    )
}