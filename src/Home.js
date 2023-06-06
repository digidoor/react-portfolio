import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
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
        <div className="home">
            <h2>React Portfolio</h2>
            <h3>Here's the Project 3 deployed link: https://boiling-reef-62224.herokuapp.com/</h3>
            {/* <p>{ name }</p> */}
            {/* <button onClick={handleClick}>Change Waifu</button>
            <button onClick={() => handleClickAgain(name)}>Console Log Greeting</button> */}
            <br/><br/>
            {/* <BlogList blogs={blogs} title="The Blogs" deleter={handleDelete}/> */}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author === "Saria")} title="Saria's Blog"/> */}
            { error && <div>{ error }</div> }
            { isPending && <h1>Loading...</h1> }
            { blogs && <BlogList blogs={blogs} title="Zelda waifu blogs"/>}
            {/* { blogs && <BlogList blogs={blogs.filter((blog)=>blog.author === "Saria")} title="Saria's Blog"/>} */}
        </div>
    );
}
 
export default Home;