import React, { useState, useEffect} from 'react'

const CryptoApi = () => {
    const [crypto, setCrypto] = useState([])

    useEffect(() =>{
        const fetchData = async () => {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20')
            const data = await response.json()
            setCrypto(data)
        }
    },[])


  return (
    <div>
        <h1>CryptoApi</h1>

    </div>
  )
}

export default CryptoApi