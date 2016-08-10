var hoursToCalculate = 8;     // sets the length of day at all stores
var openingHour = 10;         // sets the hour of opening at all stores
var civilianTime;             // to keep time on a 12-hour clock
var meridiem;                 // initializes am and pm string variable


// count time on a 12-hour clock and add 'am' or 'pm' as appropriate
function getTimes() {
   if (i + openingHour < 12) {
      meridiem = 'am: ';
      civilianTime = i + openingHour;
   } else if (i + openingHour > 12) {
      meridiem = 'pm: ';
      civilianTime = i + openingHour - 12;
   } else {
      meridiem = 'pm: ';
      civilianTime = i + openingHour;
   }
}



/***********************************************
********************************* Pioneer Square
***********************************************/

var totalPioneerShop = 0;
var pioneerShopCookiePerHourArray = [];

var pioneerShop = {
   minCust: 17,
   maxCust: 88,
   avgCookiePerCust: 5.2,
   rndCustPerHour: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   },
   cookiePerHour: function() {
      return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
   }
};

var buildLocation     = document.getElementById('main-nav');
var locationTextNode  = document.createTextNode('Pioneer Square');
var headingItemNode   = document.createElement('h2');
headingItemNode.appendChild(locationTextNode);
buildLocation.appendChild(headingItemNode);

for (var i = 0; i < hoursToCalculate; i++) {
  pioneerShopCookiePerHourArray.push(pioneerShop.cookiePerHour());
  getTimes();
  var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + pioneerShopCookiePerHourArray[i]);
  var listItemNode = document.createElement('li');
  listItemNode.appendChild(timeAndCookieCount);
  buildLocation.appendChild(listItemNode);
  totalPioneerShop += pioneerShopCookiePerHourArray[i];
}

var totalCookies = document.createTextNode('Total: ' + totalPioneerShop);
var listItemNode = document.createElement('li');
listItemNode.appendChild(totalCookies);
buildLocation.appendChild(listItemNode);



/***********************************************
******************************* Portland Airport
***********************************************/

var totalAirportShop = 0;
var airportShopCookiePerHourArray = [];

var airportShop = {
   minCust: 6,
   maxCust: 24,
   avgCookiePerCust: 1.2,
   rndCustPerHour: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   },
   cookiePerHour: function() {
      return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
   }
};

var buildLocation     = document.getElementById('main-nav');
var locationTextNode  = document.createTextNode('Portland Airport');
var headingItemNode   = document.createElement('h2');
headingItemNode.appendChild(locationTextNode);
buildLocation.appendChild(headingItemNode);

for (var i = 0; i < hoursToCalculate; i++) {
  airportShopCookiePerHourArray.push(airportShop.cookiePerHour());
  getTimes();
  var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + airportShopCookiePerHourArray[i]);
  var listItemNode = document.createElement('li');
  listItemNode.appendChild(timeAndCookieCount);
  buildLocation.appendChild(listItemNode);
  totalAirportShop += airportShopCookiePerHourArray[i];
}

var totalCookies = document.createTextNode('Total: ' + totalAirportShop);
var listItemNode = document.createElement('li');
listItemNode.appendChild(totalCookies);
buildLocation.appendChild(listItemNode);



/***********************************************
****************************** Washington Square
***********************************************/

var totalWashingtonShop = 0;
var washingtonShopCookiePerHourArray = [];

var washingtonShop = {
   minCust: 11,
   maxCust: 38,
   avgCookiePerCust: 1.9,
   rndCustPerHour: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   },
   cookiePerHour: function() {
      return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
   }
};

var buildLocation     = document.getElementById('main-nav');
var locationTextNode  = document.createTextNode('Washington Square');
var headingItemNode   = document.createElement('h2');
headingItemNode.appendChild(locationTextNode);
buildLocation.appendChild(headingItemNode);

for (var i = 0; i < hoursToCalculate; i++) {
  washingtonShopCookiePerHourArray.push(washingtonShop.cookiePerHour());
  getTimes();
  var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + washingtonShopCookiePerHourArray[i]);
  var listItemNode = document.createElement('li');
  listItemNode.appendChild(timeAndCookieCount);
  buildLocation.appendChild(listItemNode);
  totalWashingtonShop += washingtonShopCookiePerHourArray[i];
}

var totalCookies = document.createTextNode('Total: ' + totalWashingtonShop);
var listItemNode = document.createElement('li');
listItemNode.appendChild(totalCookies);
buildLocation.appendChild(listItemNode);



/***********************************************
*************************************** Sellwood
***********************************************/

var totalSellwoodShop = 0;
var sellwoodShopCookiePerHourArray = [];

var sellwoodShop = {
   minCust: 20,
   maxCust: 48,
   avgCookiePerCust: 3.3,
   rndCustPerHour: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   },
   cookiePerHour: function() {
      return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
   }
};

var buildLocation     = document.getElementById('main-nav');
var locationTextNode  = document.createTextNode('Sellwood');
var headingItemNode   = document.createElement('h2');
headingItemNode.appendChild(locationTextNode);
buildLocation.appendChild(headingItemNode);

for (var i = 0; i < hoursToCalculate; i++) {
  sellwoodShopCookiePerHourArray.push(sellwoodShop.cookiePerHour());
  getTimes();
  var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + sellwoodShopCookiePerHourArray[i]);
  var listItemNode = document.createElement('li');
  listItemNode.appendChild(timeAndCookieCount);
  buildLocation.appendChild(listItemNode);
  totalSellwoodShop += sellwoodShopCookiePerHourArray[i];
}

var totalCookies = document.createTextNode('Total: ' + totalSellwoodShop);
var listItemNode = document.createElement('li');
listItemNode.appendChild(totalCookies);
buildLocation.appendChild(listItemNode);



/***********************************************
********************************* Pearl District
***********************************************/

var totalPearlShop = 0;
var pearlShopCookiePerHourArray = [];

var pearlShop = {
   minCust: 3,
   maxCust: 24,
   avgCookiePerCust: 2.6,
   rndCustPerHour: function() {
      return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
   },
   cookiePerHour: function() {
      return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
   }
};

var buildLocation     = document.getElementById('main-nav');
var locationTextNode  = document.createTextNode('Pearl District');
var headingItemNode   = document.createElement('h2');
headingItemNode.appendChild(locationTextNode);
buildLocation.appendChild(headingItemNode);

for (var i = 0; i < hoursToCalculate; i++) {
  pearlShopCookiePerHourArray.push(pearlShop.cookiePerHour());
  getTimes();
  var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + pearlShopCookiePerHourArray[i]);
  var listItemNode = document.createElement('li');
  listItemNode.appendChild(timeAndCookieCount);
  buildLocation.appendChild(listItemNode);
  totalPearlShop += pearlShopCookiePerHourArray[i];
}

var totalCookies = document.createTextNode('Total: ' + totalPearlShop);
var listItemNode = document.createElement('li');
listItemNode.appendChild(totalCookies);
buildLocation.appendChild(listItemNode);








// nothing to see here
