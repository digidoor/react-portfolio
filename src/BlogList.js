const BlogList = ({blogs, title, deleter}) => {
    return (
        <div className="blog-list">
            <h1>{ title }:</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Writen by { blog.author }</p>
                    { deleter && <>&nbsp;<button onClick={()=> deleter(blog.id)}>Delete Blog</button> </>}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;