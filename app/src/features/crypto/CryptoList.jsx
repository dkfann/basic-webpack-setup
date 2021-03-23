import React from 'react'
import { useCrypto, DESC, ASC } from './useCrypto'

import style from './CryptoList.css'

function CoinsList({ coins }) {
    console.log('The coins in coins list: ', coins)
    const coinData = coins.map(coin => <div className={style.coin} key={coin.uuid}>
        <div>{coin.symbol}</div>
        <div>{parseFloat(coin.price, 10).toFixed(2)}</div>
    </div>)
    return (<div className={style.coin_list}>
        {
            coinData
        }
    </div>)
}

export function CryptoList() {
    const { coins, setSortDir } = useCrypto()

    console.log('The coins in crypto list: ', coins)

    return (<div className={style.container}>
        <div className={style.title}>Crypto List</div>
        <div className={style.sort}>
            <button onClick={() => setSortDir(DESC)}>Sort Desc</button>
            <button onClick={() => setSortDir(ASC)}>Sort Asc</button>
        </div>
        <CoinsList coins={coins} />
    </div>)
}