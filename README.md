# phase-1-project

This project is aimed at giving real time updates around the cryptocurrency market, moreso on the most commonly traded coins in the market

## What it does

The project retreives data from the coingecko api whose url is as follows [coingecko](https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbnb%2Ccardano%2Cxrp%2Csolana%2Cpolkadot%2Cdogecoin%2Cdai%2Ctron%2Cavalanche%2Cpolygon%2Clitecoin%2Cftx%2Cchainlink%2Ccronos%2Cokb%2Cstellar%2Cuniswap%2Calgorand%2Cmonero%2Cchain%2Cvechain%2Cflow%2Chedera%2Cfrax%2Celrond%2Cdecentraland%2Cfilecoin%2Capecoin%2Ctezos%2Chelium%2Ckucoin%2Ceos%2Caave%2Ccusdc%2Cmaker%2Ciota%2Chuobi%2Cquant%2Cecash%2Cklaytn%2Cusdd%2Cfantom%2Cneo%2Cradix%2Ckusama%2Cdash%2Carweave&order=market_cap_desc&per_page=100&page=1&sparkline=false).

## How it works
The project also incorporates a search bar which minimises the time spent in looking for a specific coin.

The data is stored in a table for easy viewing and gives realtime updates
The addition of data is done by the following code

```
function getPrices(){
  fetch(url)
  .then(resp => resp.json())
  .then(data => {

    
    tableGenerator(data)
  
  })
}

function tableGenerator(cryptos){
  console.log(cryptos);
  console.log(typeof(cryptos))


  let krypt = "";

  cryptos.forEach(element => {
    console.log(cryptos)
    krypt +=`
  <tr>
        <td>${element.id}</td>
        <td>${element.symbol}</td>
        <td>${element.name}</td>
        <td> <img src =${element.image}></td>
        <td>${element.current_price}</td>
        <td>${element.market_cap}</td>
        <td>${element.price_change_24h}</td>
        <td>${element.last_updated}</td>
      </tr>
  `
  });
  
  const KryptoData = document.getElementById('data')
  KryptoData.innerHTML= krypt
}
```

## What it aims to solve
The crypto exchange rate tracker will be able to keep track of cryptocurrency exchange rates and will be accessible to traders on a 24/7 basis. It will keep track of:
  *BTC(Bitcoin)
  *ETH(Ethereum)
Just to name a few.

The app will get data from the coin gecko API which allows a wide range of crypto data. The app mainly specifies on :
  *The current market price
  *The market cap
  *The rank
  *The time the data was last updated
