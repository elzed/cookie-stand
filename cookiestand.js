/***********************************************
************************ Variable initialization
***********************************************/

var hoursToCalculate = 8;     // sets the length of day at all stores
var openingHour = 10;         // sets the hour of opening at all stores
var civilianTime;             // to keep time on a 12-hour clock
var meridiem;                 // initializes am and pm string variable
var totalSoldPerShop;         // declares variable for use within object contstructor



/***********************************************
**************** Functions & Object Constructors
***********************************************/

// Function to count time on a 12-hour clock and add 'am' or 'pm' as appropriate
function getTimes() {
   if (i + openingHour < 12) {
      meridiem = 'am';
      civilianTime = i + openingHour;
   } else if (i + openingHour > 12) {
      meridiem = 'pm';
      civilianTime = i + openingHour - 12;
   } else {
      meridiem = 'pm';
      civilianTime = i + openingHour;
   }
}

// Object contstructor
var Shop = function(shopName, minCust, maxCust, avgCookiePerCust) {
  this.shopName = shopName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerCust = avgCookiePerCust;
  this.rndCustPerHour = function() {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  };
  this.cookiePerHour = function() {
    return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
  };
  this.addCookiesPerHour = function() {
    var shopRow = document.createElement("tr");         // shopRow holds <tr> element
    var shopCell = document.createElement("td");        // shopCell holds <td> element
    shopCell.innerText = this.shopName;                 // sticks the shopName into the <td> element
    shopRow.appendChild(shopCell);                      // <td> with shopName appended to the table row <tr>
    var totalSoldPerShop = 0;                           // reset total counter to 0 for each store loop
    for (var index = 0; index < hoursToCalculate; index++) {
      var cookieCell = document.createElement("td");    // cookieCell holds <td> element
      var cookiePerHourNumber = this.cookiePerHour();   // cookiePerHourNumber holds random number (rnd#)
      cookieCell.innerText = cookiePerHourNumber;       // sticks the rnd# in <td> element
      shopRow.appendChild(cookieCell);                  // <td> with rnd# appended to the table row <tr>
      totalSoldPerShop += cookiePerHourNumber;          // store total is incremented
    }
    cookieCell = document.createElement("td");          // cookieCell cleared to hold just <td> element again
    cookieCell.innerText = totalSoldPerShop;            // sticks the store total in <td> element
    shopRow.appendChild(cookieCell);                    // <td> with store total appended to the table row <tr>
    var table = document.getElementById("shops");       // variable table holds reference to HTML <table>
    table.appendChild(shopRow);                         // table row <tr> with all <td>'s appended to HTML <table>
  };
}



/***********************************************
***************************************** Arrays
***********************************************/

var shops = [
  new Shop("Pioneer Square", 17, 88, 5.2),
  new Shop("Portland Airport", 6, 24, 1.2),
  new Shop("Washington Square", 11, 38, 1.9),
  new Shop("Sellwood", 20, 48, 3.3),
  new Shop("Pearl District", 3, 24, 2.6),
];



/***********************************************
*************************** Create Table via DOM
***********************************************/

// Add table header "Cookie Stand Locations"
var table = document.getElementById("shops");
var tableHeader = document.createElement("tr");
var tableHeaderCell = document.createElement("th");
tableHeaderCell.setAttribute("colspan", "9");
tableHeaderCell.innerText = "Cookie Stand Locations";
tableHeader.appendChild(tableHeaderCell);
table.appendChild(tableHeader);

// Add column headers
tableHeader = document.createElement("tr");
tableHeaderCell = document.createElement("th");
tableHeaderCell.innerText = "Location";
tableHeader.appendChild(tableHeaderCell);
for (var i = 0; i < hoursToCalculate; i++) {
  getTimes();  // function call to get data for civilianTime and meridiem variables
  tableHeaderCell = document.createElement("th");
  tableHeaderCell.innerText = civilianTime + meridiem;
  tableHeader.appendChild(tableHeaderCell);
}
tableHeaderCell = document.createElement("th");
tableHeaderCell.innerText = "Total";
tableHeader.appendChild(tableHeaderCell);
table.appendChild(tableHeader);  // append accumulated <th> elements and text to the HTML <table>

// Add locations and cookie counts
for (var index = 0; index < shops.length; index++) {
  var cookieShop = shops[index];
  cookieShop.addCookiesPerHour();
}











/***********************************************
********************************* Pioneer Square
***********************************************/

// var totalPioneerShop = 0;
// var pioneerShopCookiePerHourArray = [];
//
// // Create object for shop location
// var pioneerShop = {
//    minCust: 17,
//    maxCust: 88,
//    avgCookiePerCust: 5.2,
//    rndCustPerHour: function() {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//    },
//    cookiePerHour: function() {
//       return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
//    }
// };
//
// // Create heading
// var buildLocation     = document.getElementById('main-nav');
// var locationTextNode  = document.createTextNode('Pioneer Square');
// var headingItemNode   = document.createElement('h2');
// headingItemNode.appendChild(locationTextNode);
// buildLocation.appendChild(headingItemNode);
//
// // Create hours and cookies sold for each hour
// for (var i = 0; i < hoursToCalculate; i++) {
//   pioneerShopCookiePerHourArray.push(pioneerShop.cookiePerHour());
//   getTimes(); // required function call to get data for civilianTime and meridiem variables
//   var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + pioneerShopCookiePerHourArray[i]);
//   var listItemNode = document.createElement('li');
//   listItemNode.appendChild(timeAndCookieCount);
//   buildLocation.appendChild(listItemNode);
//   totalPioneerShop += pioneerShopCookiePerHourArray[i];
// }
//
// // Create total number of cookies sold
// var totalCookies = document.createTextNode('Total: ' + totalPioneerShop);
// var listItemNode = document.createElement('li');
// listItemNode.appendChild(totalCookies);
// buildLocation.appendChild(listItemNode);

// TESTING TESTING TESTING
// var li = document.getElementsByTagName('li');
// var ul = document.createElement('ul');
// ul.appendChild(li);
// buildLocation.appendChild(ul);



// /***********************************************
// ******************************* Portland Airport
// ***********************************************/
//
// var totalAirportShop = 0;
// var airportShopCookiePerHourArray = [];
//
// // Create object for shop location
// var airportShop = {
//    minCust: 6,
//    maxCust: 24,
//    avgCookiePerCust: 1.2,
//    rndCustPerHour: function() {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//    },
//    cookiePerHour: function() {
//       return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
//    }
// };
//
// // Create heading
// var buildLocation     = document.getElementById('main-nav');
// var locationTextNode  = document.createTextNode('Portland Airport');
// var headingItemNode   = document.createElement('h2');
// headingItemNode.appendChild(locationTextNode);
// buildLocation.appendChild(headingItemNode);
//
// // Create hours and cookies sold for each hour
// for (var i = 0; i < hoursToCalculate; i++) {
//   airportShopCookiePerHourArray.push(airportShop.cookiePerHour());
//   getTimes(); // required function call to get data for civilianTime and meridiem variables
//   var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + airportShopCookiePerHourArray[i]);
//   var listItemNode = document.createElement('li');
//   listItemNode.appendChild(timeAndCookieCount);
//   buildLocation.appendChild(listItemNode);
//   totalAirportShop += airportShopCookiePerHourArray[i];
// }
//
// // Create total number of cookies sold
// var totalCookies = document.createTextNode('Total: ' + totalAirportShop);
// var listItemNode = document.createElement('li');
// listItemNode.appendChild(totalCookies);
// buildLocation.appendChild(listItemNode);
//
//
//
// /***********************************************
// ****************************** Washington Square
// ***********************************************/
//
// var totalWashingtonShop = 0;
// var washingtonShopCookiePerHourArray = [];
//
// // Create object for shop location
// var washingtonShop = {
//    minCust: 11,
//    maxCust: 38,
//    avgCookiePerCust: 1.9,
//    rndCustPerHour: function() {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//    },
//    cookiePerHour: function() {
//       return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
//    }
// };
//
// // Create heading
// var buildLocation     = document.getElementById('main-nav');
// var locationTextNode  = document.createTextNode('Washington Square');
// var headingItemNode   = document.createElement('h2');
// headingItemNode.appendChild(locationTextNode);
// buildLocation.appendChild(headingItemNode);
//
// // Create hours and cookies sold for each hour
// for (var i = 0; i < hoursToCalculate; i++) {
//   washingtonShopCookiePerHourArray.push(washingtonShop.cookiePerHour());
//   getTimes(); // required function call to get data for civilianTime and meridiem variables
//   var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + washingtonShopCookiePerHourArray[i]);
//   var listItemNode = document.createElement('li');
//   listItemNode.appendChild(timeAndCookieCount);
//   buildLocation.appendChild(listItemNode);
//   totalWashingtonShop += washingtonShopCookiePerHourArray[i];
// }
//
// // Create total number of cookies sold
// var totalCookies = document.createTextNode('Total: ' + totalWashingtonShop);
// var listItemNode = document.createElement('li');
// listItemNode.appendChild(totalCookies);
// buildLocation.appendChild(listItemNode);
//
//
//
// /***********************************************
// *************************************** Sellwood
// ***********************************************/
//
// var totalSellwoodShop = 0;
// var sellwoodShopCookiePerHourArray = [];
//
// // Create object for shop location
// var sellwoodShop = {
//    minCust: 20,
//    maxCust: 48,
//    avgCookiePerCust: 3.3,
//    rndCustPerHour: function() {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//    },
//    cookiePerHour: function() {
//       return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
//    }
// };
//
// // Create heading
// var buildLocation     = document.getElementById('main-nav');
// var locationTextNode  = document.createTextNode('Sellwood');
// var headingItemNode   = document.createElement('h2');
// headingItemNode.appendChild(locationTextNode);
// buildLocation.appendChild(headingItemNode);
//
// // Create hours and cookies sold for each hour
// for (var i = 0; i < hoursToCalculate; i++) {
//   sellwoodShopCookiePerHourArray.push(sellwoodShop.cookiePerHour());
//   getTimes(); // required function call to get data for civilianTime and meridiem variables
//   var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + sellwoodShopCookiePerHourArray[i]);
//   var listItemNode = document.createElement('li');
//   listItemNode.appendChild(timeAndCookieCount);
//   buildLocation.appendChild(listItemNode);
//   totalSellwoodShop += sellwoodShopCookiePerHourArray[i];
// }
//
// // Create total number of cookies sold
// var totalCookies = document.createTextNode('Total: ' + totalSellwoodShop);
// var listItemNode = document.createElement('li');
// listItemNode.appendChild(totalCookies);
// buildLocation.appendChild(listItemNode);
//
//
//
// /***********************************************
// ********************************* Pearl District
// ***********************************************/
//
// var totalPearlShop = 0;
// var pearlShopCookiePerHourArray = [];
//
// // Create object for shop location
// var pearlShop = {
//    minCust: 3,
//    maxCust: 24,
//    avgCookiePerCust: 2.6,
//    rndCustPerHour: function() {
//       return Math.floor(Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
//    },
//    cookiePerHour: function() {
//       return Math.round(this.avgCookiePerCust * this.rndCustPerHour());
//    }
// };
//
// // Create heading
// var buildLocation     = document.getElementById('main-nav');
// var locationTextNode  = document.createTextNode('Pearl District');
// var headingItemNode   = document.createElement('h2');
// headingItemNode.appendChild(locationTextNode);
// buildLocation.appendChild(headingItemNode);
//
// // Create hours and cookies sold for each hour
// for (var i = 0; i < hoursToCalculate; i++) {
//   pearlShopCookiePerHourArray.push(pearlShop.cookiePerHour());
//   getTimes(); // required function call to get data for civilianTime and meridiem variables
//   var timeAndCookieCount = document.createTextNode((civilianTime) + meridiem + pearlShopCookiePerHourArray[i]);
//   var listItemNode = document.createElement('li');
//   listItemNode.appendChild(timeAndCookieCount);
//   buildLocation.appendChild(listItemNode);
//   totalPearlShop += pearlShopCookiePerHourArray[i];
// }
//
// // Create total number of cookies sold
// var totalCookies = document.createTextNode('Total: ' + totalPearlShop);
// var listItemNode = document.createElement('li');
// listItemNode.appendChild(totalCookies);
// buildLocation.appendChild(listItemNode);
//
//
//
//
//
//
//
//
// // nothing to see here
