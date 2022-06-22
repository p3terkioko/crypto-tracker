

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cdogecoin%2Ctether%2Ccardano%2Csolana%2Cpolkadot%2Cdai%2Ctron%2Cavalanch%2Clitecoin%2Cpolygon%2Cbnb&order=market_cap_desc&per_page=100&page=1&sparkline=false'
document.addEventListener('DOMContentLoaded',function(){
  getPrices()
})
let element=[]
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

