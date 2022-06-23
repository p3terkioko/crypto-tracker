
const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Ctether%2Cbnb%2Ccardano%2Cxrp%2Csolana%2Cpolkadot%2Cdogecoin%2Cdai%2Ctron%2Cavalanche%2Cpolygon%2Clitecoin%2Cftx%2Cchainlink%2Ccronos%2Cokb%2Cstellar%2Cuniswap%2Calgorand%2Cmonero%2Cchain%2Cvechain%2Cflow%2Chedera%2Cfrax%2Celrond%2Cdecentraland%2Cfilecoin%2Capecoin%2Ctezos%2Chelium%2Ckucoin%2Ceos%2Caave%2Ccusdc%2Cmaker%2Ciota%2Chuobi%2Cquant%2Cecash%2Cklaytn%2Cusdd%2Cfantom%2Cneo%2Cradix%2Ckusama%2Cdash%2Carweave&order=market_cap_desc&per_page=100&page=1&sparkline=false'
document.addEventListener('DOMContentLoaded',function(){
  
  getPrices()
  workComment()
  myFunction()
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
function workComment(){
  let post= document.getElementById("post");
post.addEventListener("click", function(){
    let commentBoxValue= document.getElementById("comment-box").value;
 
    let li = document.createElement("li");
    let text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
}
// search bar
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
