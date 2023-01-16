import React from "react";

const CoinsItems = (props) => {
  const {
    name,
    symbol,
    image,
    current_price,
    market_cap,
    market_cap_rank,
    price_change_24h,
    price_change_percentage_24h,
    last_updated,
  } = props.coins;
  return (
    <div className="text-purple-200">
      
      <div className="w-screen border-2  my-5 font-bold text-xl xl:w-3/4 xl:m-auto xl:my-5">
        <div className="my-2">Name: <span className="border-2 px-3">{name}</span></div>
        <div className="flex items-center space-x-4">
         <span>Image:</span> <img src={image} alt="" className="w-10" />
        </div>
        <div className="my-2">Symbol: <span className="border-2 px-3 ">{symbol}</span></div>
        <div className="my-2">Price: <span className="border-2 px-3 ">{current_price}</span></div>
        <div className="my-2">Market Cap: <span className="border-2 px-3 ">{market_cap}</span></div>
        <div className="my-2">Market Cap Rank: <span className="border-2 px-3 ">{market_cap_rank}</span></div>
        <div className="my-2">Price Change in 24Hours: <span className="border-2 px-3">{price_change_24h}</span></div>
        <div className="">
          Price Change Percentage in 24Hours <span className="border-2 px-3 ">{price_change_percentage_24h}</span>
        </div>
      </div>
    </div>
  );
};

export default CoinsItems;
