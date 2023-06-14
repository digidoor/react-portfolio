import { useState, useEffect } from "react";
import BlogList from "../components/BlogList";
import useFetch from "../utils/useFetch";

const Blogs = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    //const [data: blogs, isPending, error] = useFetch('http://localhost:8000/blogs'); // can rename data to blogs as shown
    //useEffect( () => { console.log("Waifu changed."); console.log(name); }, [name]);
    //useEffect( () => { console.log("Blogs updated."); console.log(blogs);}, [blogs]);
    
    //const handleClick = () => { name === "Saria" ? setName("Malon") : setName("Saria"); };
    //const handleClickAgain = (name) => { console.log("Hello", name); };
    // function handleDelete(id)
    // {
    //     const newBlogs = blogs.filter((blog)=>blog.id!==id);
    //     setBlogs(newBlogs);
    // }
	return (
		<div className="content">
            {/* <p>{ name }</p> */}
            {/* <button onClick={handleClick}>Change Waifu</button>
            <button onClick={() => handleClickAgain(name)}>Console Log Greeting</button> */}
            <br/><br/>
            {/* <BlogList blogs={blogs} title="The Blogs" deleter={handleDelete}/> */}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === "Saria")} title="Saria's Blog"/> */}
            { error && <div>{ error }</div> }
            { isPending && <h1>Loading...</h1> }
            { blogs && <BlogList blogs={blogs} title="Zelda blogs"/>}
            {/* { blogs && <BlogList blogs={blogs.filter((blog)=>blog.author === "Saria")} title="Saria's Blog"/>} */}
			<h4>
				This page uses a local json file to emulate a database. If you are viewing This
				on a deployed github pages site, you will see a "Failed to Fetch" error instead.
				I keep this page for my own local testing in learning new things in React. There
				is likely nothing to see here; I'm surprised you found it.
			</h4>
		</div>
	);
}
 
export default Blogs;