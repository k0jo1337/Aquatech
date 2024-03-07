const A60_BLACK_USD_PRICE_CONSTANT = 528; const A60_WHITE_USD_PRICE_CONSTANT = 528;

const T98_BLACK_USD_PRICE_CONSTANT = 592; const T98_WHITE_USD_PRICE_CONSTANT = 592;

const A72_BLACK_USD_PRICE_CONSTANT = 640; const A72_WHITE_USD_PRICE_CONSTANT = 640;

const A62_WHITE_USD_PRICE_CONSTANT = 560;

const V11_WHITE_USD_PRICE_CONSTANT = 533;

const C21_BLACK_USD_PRICE_CONSTANT = 295;

const H1_U4LE_WHITENSILVER_USD_PRICE_CONSTANT = 228;

const H1_U4L_WHITE_USD_PRICE_CONSTANT = 295; 

const H40_USD_PRICE_CONSTANT = 228;

const currentDate = new Date().toDateString(); //при каждом обновлении/заходе на страницу чекается дата


function getNewDollarToRuble() { //функция получающая данные с API
  return axios
      .get("https://api.currencybeacon.com/v1/convert?from=USD&to=RUB&amount=1&api_key=P1fJMk4l8zde8s70h5PGIROCKu1k1Kx4")
      .then((response) => {
          const api_json_data = JSON.parse(JSON.stringify(response));
          return api_json_data.data.response.value;
      });
}

function setPriceByDocument(){ //функция для изображения цены на фронте
  priceElement = document.getElementById('price');
  switch (document.location.pathname){
    case "/products/A60-BLACK":
      priceElement.innerHTML = Math.floor(A60_BLACK_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/A60-WHITE":
      priceElement.innerHTML = Math.floor(A60_WHITE_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/T98-WHITE":
      priceElement.innerHTML = Math.floor(T98_WHITE_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/T98-BLACK":
      priceElement.innerHTML = Math.floor(T98_BLACK_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/V11-WHITE":
      priceElement.innerHTML = Math.floor(V11_WHITE_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/A62-WHITE":
      priceElement.innerHTML = Math.floor(A62_WHITE_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/C21-U4LE-SILVER":
      priceElement.innerHTML = Math.floor(C21_BLACK_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/A72-BLACKNWHITE":
      priceElement.innerHTML = Math.floor(A72_BLACK_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/H1-U4LE-WHITENSILVER":
      priceElement.innerHTML = Math.floor(H1_U4LE_WHITENSILVER_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/H1-U4L-WHITE":
      priceElement.innerHTML = Math.floor(H1_U4L_WHITE_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));
      break;
    case "/products/H40-U4L-BLACKNWHITE":
      priceElement.innerHTML = Math.floor(H40_USD_PRICE_CONSTANT * localStorage.getItem('currencyExchangeRate'));  
      break;
    };
  document.getElementById('dollar-currency').innerHTML = Math.round(100 * localStorage.getItem('currencyExchangeRate'))/100; //Передача курса в footer
}


/* У нас мало токенов. Поэтому после того как пользователь впервые делает API запрос,
   значение курса сохраняется в localStorage браузера. Если localStorage был сохранён в другой день (APIшка
   обновляет курс раз в стуки), а не в тот, в который зашли на сайт, то он снова делает API
   запрос и сохраняет курс. */
if (!localStorage.getItem('lastDV') || localStorage.getItem('lastDV') !== currentDate){

  getNewDollarToRuble().then((dollarToRuble) => {
    localStorage.setItem('currencyExchangeRate', dollarToRuble.toString());
    setPriceByDocument();
  });
  localStorage.setItem('lastDV', currentDate);
}
else{
  window.onload = function(){
    setPriceByDocument();
  }
};
