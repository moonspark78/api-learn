import React, { useState, useEffect} from 'react'

const CryptoApi = () => {
    const [crypto, setCrypto] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20')
            const data = await response.json()
            setCrypto(data)
        }
        fetchData()
    },[])


  return (
    <div>
        <h1>CryptoApi</h1>
        <ul>
            {crypto.map((coin, id) =>(
                <li key={id}>{coin.name}
                    <img src={coin.image} alt={coin.name} width={50}/>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default CryptoApi