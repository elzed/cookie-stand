var hoursToCalculate = 8;     // sets the length of day at all stores
var openingHour = 10;         // sets the hour of opening at all stores
var meridiem;                 // initializes am and pm string variable



/***********************************************
********************************* Pioneer Square
***********************************************/

var totalPioneerShop = 0;
var pioneerShopCookiePerHourArray = [];

var pioneerShop = {
   locat: 'Pioneer Square',
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

for (var i = 0; i < hoursToCalculate; i++) {
   pioneerShopCookiePerHourArray.push(pioneerShop.cookiePerHour());
   console.log(pioneerShopCookiePerHourArray[i]);

   // add 'pm' or 'am' depending on time of day
   if (i + openingHour >= 12) {
      meridiem = 'pm: ';
   } else {
      meridiem = 'am: ';
   }

   // begin time of day based on openHour variable and reset to 1 after 12 noon
   if (i + openingHour <= 12) {
      civilianTime = i + openingHour;
   } else {
      civilianTime = i + openingHour - 12;
   }

   var el = document.getElementById('psListItem');
   el.innerHTML += '<li>' + (civilianTime) + meridiem + pioneerShopCookiePerHourArray[i] + '</li>';
   totalPioneerShop += pioneerShopCookiePerHourArray[i];
}
el.innerHTML += '<li>Total: ' + totalPioneerShop + '</li>';



/***********************************************
******************************* Portland Airport
***********************************************/

var totalAirportShop = 0;
var airportShopCookiePerHourArray = [];

var airportShop = {
   locat: 'Portland Airport',
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

for (var i = 0; i < hoursToCalculate; i++) {
   airportShopCookiePerHourArray.push(airportShop.cookiePerHour());
   console.log(airportShopCookiePerHourArray[i]);

   // add 'pm' or 'am' depending on time of day
   if (i + openingHour >= 12) {
      meridiem = 'pm: ';
   } else {
      meridiem = 'am: ';
   }

   // begin time of day based on openHour variable and reset to 1 after 12 noon
   if (i + openingHour <= 12) {
      civilianTime = i + openingHour;
   } else {
      civilianTime = i + openingHour - 12;
   }

   var el = document.getElementById('paListItem');
   el.innerHTML += '<li>' + (civilianTime) + meridiem + airportShopCookiePerHourArray[i] + '</li>';
   totalAirportShop += airportShopCookiePerHourArray[i];
}
el.innerHTML += '<li>Total: ' + totalAirportShop + '</li>';



/***********************************************
****************************** Washington Square
***********************************************/

var totalWashingtonShop = 0;
var washingtonShopCookiePerHourArray = [];

var washingtonShop = {
   locat: 'Washington Square',
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

for (var i = 0; i < hoursToCalculate; i++) {
   washingtonShopCookiePerHourArray.push(washingtonShop.cookiePerHour());
   console.log(washingtonShopCookiePerHourArray[i]);

   // add 'pm' or 'am' depending on time of day
   if (i + openingHour >= 12) {
      meridiem = 'pm: ';
   } else {
      meridiem = 'am: ';
   }

   // begin time of day based on openHour variable and reset to 1 after 12 noon
   if (i + openingHour <= 12) {
      civilianTime = i + openingHour;
   } else {
      civilianTime = i + openingHour - 12;
   }

   var el = document.getElementById('wsListItem');
   el.innerHTML += '<li>' + (civilianTime) + meridiem + washingtonShopCookiePerHourArray[i] + '</li>';
   totalWashingtonShop += washingtonShopCookiePerHourArray[i];
}
el.innerHTML += '<li>Total: ' + totalWashingtonShop + '</li>';



/***********************************************
*************************************** Sellwood
***********************************************/

var totalSellwoodShop = 0;
var sellwoodShopCookiePerHourArray = [];

var sellwoodShop = {
   locat: 'Sellwood',
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

for (var i = 0; i < hoursToCalculate; i++) {
   sellwoodShopCookiePerHourArray.push(sellwoodShop.cookiePerHour());
   console.log(sellwoodShopCookiePerHourArray[i]);

   // add 'pm' or 'am' depending on time of day
   if (i + openingHour >= 12) {
      meridiem = 'pm: ';
   } else {
      meridiem = 'am: ';
   }

   // begin time of day based on openHour variable and reset to 1 after 12 noon
   if (i + openingHour <= 12) {
      civilianTime = i + openingHour;
   } else {
      civilianTime = i + openingHour - 12;
   }

   var el = document.getElementById('swListItem');
   el.innerHTML += '<li>' + (civilianTime) + meridiem + sellwoodShopCookiePerHourArray[i] + '</li>';
   totalSellwoodShop += sellwoodShopCookiePerHourArray[i];
}
el.innerHTML += '<li>Total: ' + totalSellwoodShop + '</li>';



/***********************************************
********************************* Pearl District
***********************************************/

var totalPearlShop = 0;
var pearlShopCookiePerHourArray = [];

var pearlShop = {
   locat: 'Pearl District',
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

for (var i = 0; i < hoursToCalculate; i++) {
   pearlShopCookiePerHourArray.push(pearlShop.cookiePerHour());
   console.log(pearlShopCookiePerHourArray[i]);

   // add 'pm' or 'am' depending on time of day
   if (i + openingHour >= 12) {
      meridiem = 'pm: ';
   } else {
      meridiem = 'am: ';
   }

   // begin time of day based on openHour variable and reset to 1 after 12 noon
   if (i + openingHour <= 12) {
      civilianTime = i + openingHour;
   } else {
      civilianTime = i + openingHour - 12;
   }

   var el = document.getElementById('pdListItem');
   el.innerHTML += '<li>' + (civilianTime) + meridiem + pearlShopCookiePerHourArray[i] + '</li>';
   totalPearlShop += pearlShopCookiePerHourArray[i];
}
el.innerHTML += '<li>Total: ' + totalPearlShop + '</li>';












// nothing to see here
