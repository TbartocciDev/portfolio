import "./FilterView.css"

export default function FilterView({ data }) {
    const dataTypes = data.reduce((obj,curObj) => {
        obj[curObj.type] = obj[curObj.type] ? obj[curObj.type] + 1 : 1
        return obj
    }, {})
    return (
        <div className="SortView">
            <h3>Filter</h3>
            {/* {Object.keys(dataTypes).map((t, key) => {
                <h3>{t}</h3>
            })} */}
        </div>
    )
}