import React, { useEffect, useState } from 'react'

const PokeApi = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            const data = await response.json()
            setPokemon(data.results)
        }
        fetchData()
    }, [])

  return (
    <div>
        <h1>PokeApi</h1>
        <ul>
            {pokemon.map((poke, index) => (
                <li key={index}>{poke.name}
                    <img src={poke.image} alt={poke.name} width={100}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PokeApi