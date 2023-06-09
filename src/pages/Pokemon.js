import { useState } from 'react';
import axios from 'axios';
const url = "https://pokeapi.co/api/v2/pokemon/";
const Pokemon = () =>
{
	const [pokeData, setPokeData] = useState(null);
	const [content, setContent] = useState("");
	async function getPoke(event)
	{
		event.preventDefault();
		console.log(content);
    	try
    	{
    		var pokeFetch;
    		if(content) 
    			pokeFetch = await axios.get(`${url}${content}`);
			else
				pokeFetch = await axios.get(`${url}${1+Math.floor(Math.random()*1010)}`);
			console.log(pokeFetch.data);
    		setPokeData(pokeFetch.data);
    	} catch (error) { console.error(error); }
		setContent("");	
		return pokeFetch;
	}
	
	return( 
		<div className="content">
			<h1 style={{marginBottom: 4 + 'px'}}>Pokes</h1>
			<div className="pokemon">
				{ pokeData ? (<img title={pokeData.species.name} src={pokeData.sprites.front_default}></img>) : (<></>) }
				<form onSubmit={getPoke}>
					<input placeholder="Pokemon name..." value={content} onChange={ (event) => setContent(event.target.value)}/>
					<button type="submit">Search</button>
                	{/* {error && (<div>Something went wrong...</div>)} */}
            	</form>
            	<p style={{marginTop: 10 + 'px'}}>Enter a pokemon name or a pokedex number between 1 and 1010 to get a pokemon.</p>
				<p>Leave blank for a random pokemon.</p>
			</div>
		</div>
	);
};
	
export default Pokemon;