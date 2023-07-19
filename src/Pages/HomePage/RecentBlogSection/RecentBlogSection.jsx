import "./RecentBlogSection.css"
import BlogPreview
 from "./BlogPreview/BlogPreview"
export default function RecentBlogSection({ data }) {
    return (
        <main className="RecentBlogSection">
            <div className="content">
                <h1>Recent Blog Posts</h1>
                <div className="blogs">
                    {data.blogs.map((blog, key) => (
                        <BlogPreview data={blog} color={data.colors[key]} key={key}/>
                    ))}
                </div>
            </div>
        </main>
    )
}