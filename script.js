// document.addEventListener("DOMContentLoaded", function(){
    
//     loadCurrency()
// })
    
// function loadCurrency(){
//     const cryptoFetch = 'http://api.coinlayer.com/api/live?access_key=5dedd0df6d24eb5a406805446acb0b63'
//     fetch(cryptoFetch)
//     .then(resp => resp.json())
//     .then(data => {
//         console.log(data)
//     })
// }

// const baseUrl = 'https://api.coinranking.com/v2/coins'
// const proxyURL='https://cors-anywhere.herokuapp.com/'
// const apiKey='coinrankingb950fa815f872d98ffb853ef31b939c110b186ea30dea987'

// fetch(`${baseUrl}${proxyURL}`, {
//     method: "GET",
//     headers: {
//         'Content-Type': 'applicaton/json',
//         'x-access-token' : `${apiKey}`,
//         'Access-Control-Allow-Origin': '*'
//     }
// }).then((response) => {
//     console.log(response);
// }).catch((error) => {
//     console.log(error);
// })




// const baseUrl = "https://api.coinranking.com/v2/coins";
// const proxyUrl = "https://cors-anywhere.herokuapp.com/";
// const apiKey = 'coinranking95816a36e47fb1cd7b0f7889bf8dad41c0be19186df98669';

// const apiUrl = `${baseUrl}`;
// console.log(apiUrl);

// fetch(`${proxyUrl}${baseUrl}`, { 
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-My-Custom-Header': `${apiKey}`,
//       'Access-Control-Allow-Origin': "*",
//     }
// })
//   .then((response) => {
//     if (response.ok) {
//       response.json().then((json) => {
//         console.log(json.data);
//         let coinsData = json.data.coins;

//         if (coinsData.length > 0) {
//           var cryptoCoin = "";
//         }
//         //For Loop Starts
        // coinsData.forEach((coin) => {
        //   cryptoCoin += "<tr>";
        //   cryptoCoin += `<td> ${coin.uuid} </td>`;
        //   cryptoCoin += `<td> ${coin.btcPrice} </td>`;
        //   cryptoCoin += `<td> ${coin.rank}</td>`;
        //   cryptoCoin += `<td> ${coin.tier} </td>`;
        //   cryptoCoin += `<td> ${coin.name}</td>`;
        //   cryptoCoin += `<td> $${Math.round(coin.price)} Billion</td>`;
        //   cryptoCoin += `<td> ${coin.symbol}</td>`;"<tr>";
        // });
//         //For Loop Ends
//         document.getElementById("data").innerHTML = cryptoCoin;
//       });
//     }
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Ccardano%2Csolana%2Cpolkadot%2Cdai%2Ctron%2Cavalanch%2Clitecoin%2Cpolygon%2Cbnb&order=market_cap_desc&per_page=100&page=1&sparkline=false'
document.addEventListener('DOMContentLoaded',function(){
  getPrices()
})

function getPrices(){
  fetch(url)
  .then(resp => resp.json())
  .then(data => {
    data.forEach(element => {
      singleElem(element)
      console.log(element)
    });
    
  
  })
}
function singleElem(element){
  console.log(element)
  let krypt = ""
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
  const KryptoData = document.getElementById('data')
  KryptoData.innerHTML= krypt
}


