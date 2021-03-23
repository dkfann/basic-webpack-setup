import { useState, useEffect } from 'react'

export const DESC = 'DESC'
export const ASC = 'ASC'

export function useCrypto() {
    const [coins, setCoins] = useState([])
    const [sortDir, setSortDir] = useState(DESC)

    function sortByPrice(coins) {
        const coinsToSort = [...coins]
        const sortedCoins = coinsToSort.sort((a, b) => {
            return sortDir === ASC ? a.price - b.price : b.price - a.price
        })

        return sortedCoins
    }

    useEffect(() => {
        async function fetchCryptoCoins() {
            const response = await fetch('https://api.coinranking.com/v1/public/coins')
            const { data } = await response.json()

            const { coins } = data

            const coinsAsArray = Object.keys(coins).map(key => coins[key])
            const sortedCoins = sortByPrice(coinsAsArray)

            setCoins(sortedCoins)
        }


        fetchCryptoCoins()
    }, [])

    useEffect(() => {
        setCoins(sortByPrice(coins))
    }, [sortDir])

    return { coins, setSortDir }
}