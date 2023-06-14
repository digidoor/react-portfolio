import { useState } from 'react';
import axios from 'axios';
const url = "https://pokeapi.co/api/v2/pokemon/jolteon";

const Pokemon = () =>
{
	const [pokeData, setPokeData] = useState(null);
	async function getPoke()
	{
    	try
    	{
    		var pokeFetch = await axios.get(url);
			console.log(pokeFetch);
    		setPokeData(pokeFetch);
    	} catch (error) { console.error(error); }
			
		return pokeFetch;
	}
	
	getPoke();
	
	return( 
		<div className="content">
			<h1>Pokes</h1>
		</div>
	);
};
	
export default Pokemon;