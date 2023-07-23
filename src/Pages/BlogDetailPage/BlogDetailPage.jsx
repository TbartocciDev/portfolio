import "./BlogDetailPage.css"
import { useParams } from "react-router-dom";
import { useEffect } from "react";


import Header from "./Components/Header/Header.jsx";

export default function BlogDetailPage({ data }) {

    const { blogNum } = useParams();
    const blog = data.find((pro) => pro.num === blogNum);

    return (
        <main className="BlogDetailPage">
            <div className="content" id="blog-content">
                <Header data={blog.header}/>
            </div>
        </main>
    )
}