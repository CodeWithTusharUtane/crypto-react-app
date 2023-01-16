import React, { useEffect, useState } from "react";
import axios from "axios";
import CoinsData from './CoinsData'
const Main = () => {

    const [coins, setCoins] = useState([]);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response)=>{
        setCoins(response.data);
        console.log(response.data[1])
    }).catch((error)=>{
        console.log("Error Occured",error)
    })
  }, []);

  return <div>
    <CoinsData coins={coins}/>
  </div>;
};

export default Main;
