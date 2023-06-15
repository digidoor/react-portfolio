import { useState, useEffect } from "react";
import DiaryList from "../components/DiaryList";
import useFetch from "../utils/useFetch";

const Blogs = () => {
    const {data: entries, isPending, error} = useFetch('http://localhost:8000/blogs');
	return (
		<div className={`content diary`}>
            { error && <div>{ error }</div> }
            { isPending && <h1>Loading...</h1> }
            { entries && <DiaryList entries={entries} title="Zelda diaries"/>}
			<h4 style={{color: 'white'}}>
				This page uses a local json file to emulate a database. If you are viewing this
				on a deployed github pages site, you will see a "Failed to Fetch" error instead.
				I keep this page for my own local testing in learning new things in React. There
				is likely nothing to see here; I'm surprised you found it.
			</h4>
		</div>
	);
}
 
export default Blogs;