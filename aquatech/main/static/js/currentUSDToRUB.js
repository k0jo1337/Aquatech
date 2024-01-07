const A60_BLACK_USD_PRICE_CONSTANT = 528; const A60_WHITE_USD_PRICE_CONSTANT = 528;

const T98_BLACK_USD_PRICE_CONSTANT = 592; const T98_WHITE_USD_PRICE_CONSTANT = 592;

const A72_BLACK_USD_PRICE_CONSTANT = 640; const A72_WHITE_USD_PRICE_CONSTANT = 640;

const A62_WHITE_USD_PRICE_CONSTANT = 560;

const V11_WHITE_USD_PRICE_CONSTANT = 533;

const C21_BLACK_USD_PRICE_CONSTANT = 295;

const H1_U4LE_WHITENSILVER_USD_PRICE_CONSTANT = 228;

const H1_U4L_WHITE_USD_PRICE_CONSTANT = 295; 

const H40_USD_PRICE_CONSTANT = 228;

const renderPriceContent = ( response ) =>{
    const api_json_data = JSON.parse(JSON.stringify((response)));
    dollarToRuble = api_json_data.data.response.value;
    return dollarToRuble;
}


function getNewDollarToRuble(){
axios
    .get("https://api.currencybeacon.com/v1/convert?from=USD&to=RUB&amount=1&api_key=P1fJMk4l8zde8s70h5PGIROCKu1k1Kx4")
    .then((response) => {
        dollarToRuble = renderPriceContent(response);
        return dollarToRuble;
    })
  }

dollarToRuble = getNewDollarToRuble();
var cache = require('memory-cache');
cache.put("dollarToRubleToday",dollarToRuble, 1000 * 60 * 60 * 24, getNewDollarToRuble)

priceElement = document.getElementById('price');
switch (document.location.pathname){
case "/products/A60-BLACK":
  priceElement.innerHTML = Math.floor(A60_BLACK_USD_PRICE_CONSTANT * dollarToRuble);
  break;
case "/products/A60-WHITE":
  priceElement.innerHTML = Math.floor(A60_WHITE_USD_PRICE_CONSTANT * dollarToRuble);
  break;
case "/products/T98-WHITE":
  priceElement.innerHTML = Math.floor(T98_WHITE_USD_PRICE_CONSTANT * dollarToRuble);
  break;
case "/products/T98-BLACK":
  priceElement.innerHTML = Math.floor(T98_BLACK_USD_PRICE_CONSTANT * dollarToRuble);
  break;
case "/products/V11-WHITE":
  priceElement.innerHTML = Math.floor(V11_WHITE_USD_PRICE_CONSTANT * dollarToRuble);
  break;
case "/products/C21-U4LE-SILVER":
  priceElement.innerHTML = Math.floor(C21_BLACK_USD_PRICE_CONSTANT * dollarToRuble);
  break;
case "/products/A72-BLACKNWHITE":
  priceElement.innerHTML = Math.floor(A72_BLACK_USD_PRICE_CONSTANT * dollarToRuble);
  break;
case "/products/H1-U4LE-WHITENSILVER":
  priceElement.innerHTML = Math.floor(H1_U4LE_WHITENSILVER_USD_PRICE_CONSTANT * dollarToRuble);
  break;
case "/products/H1-U4L-WHITE":
  priceElement.innerHTML = Math.floor(H1_U4L_WHITE_USD_PRICE_CONSTANT * dollarToRuble);
  break;
case "/products/H40-U4L-BLACKNWHITE":
  priceElement.innerHTML = Math.floor(H40_U4L_WHITE_USD_PRICE_CONSTANT * dollarToRuble);  
  break;
};