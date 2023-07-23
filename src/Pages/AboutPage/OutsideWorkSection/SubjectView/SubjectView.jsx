import "./SubjectView.css"

export default function SubjectView({ data, subject }) {
    var listItems = []

    function getList() {
        listItems =[]
        data.forEach((item) => {
            if (item.category === subject) {
                listItems.push(item)
            }
        })
    }

    getList()

    return (
        <ul className="SubjectView">
            {listItems.map((item, key) => (
                <h2 key={key}><span>{item.title}:</span> {item.summary}</h2>
            ))}
        </ul>
    )
}