import { useEffect, useState } from 'react'

const PokeApi = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon')
            const data = await response.json()
            setPokemon(data)
        }
        fetchData()
    }, [])

  return (
    <div>
        <h1>PokeApi</h1>
        <ul>
            {pokemon.map((poke, index) => (
                <li key={index}>{poke.name}
                    <img src={poke.image} alt={poke.index} width={100}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PokeApi