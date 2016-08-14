/***********************************************
************************ Variable initialization
***********************************************/

var hoursToCalculate = 8;     // sets the length of day at all stores
var openingHour = 10;         // sets the hour of opening at all stores
var civilianTime;             // to keep time on a 12-hour clock
var meridiem;                 // initializes am and pm string variable



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
  new Shop("Pearl District", 3, 24, 2.6)
];



/***********************************************
*************************** Create Table via DOM
***********************************************/

// Add column headers
var table = document.getElementById("shops");
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
