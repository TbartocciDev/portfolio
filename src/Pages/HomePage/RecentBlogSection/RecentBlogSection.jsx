import "./RecentBlogSection.css"
import BlogPreview
 from "./BlogPreview/BlogPreview"
export default function RecentBlogSection({ data }) {
    const latestBlogs = data.blogs.slice(0,3)
    
    return (
        <main className="RecentBlogSection">
            <div className="content">
                <h1>Recent Blog Posts</h1>
                <h2>Dive into what I've been up to lately</h2>
                <div className="blogs">
                    {latestBlogs.map((blog, key) => (
                        <BlogPreview data={blog} color={data.colors[key]} key={key}/>
                    ))}
                </div>
            </div>
        </main>
    )
}