'use strict';

var standArray = [];
var totalHourArray = [];

function CookieStand(name, minCustomers, maxCustomers, aveCookies){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.aveCookies = aveCookies;
  this.openTime = 6;
  this.closeTime = 21;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.cookieSoldArray = [];
  this.cookieSoldTable = [];
  this.sumCookieSold = 0;
  standArray.push(this);
  this.randRate();
  this.hourlyRateTable();
}


CookieStand.prototype.randRate = function(){
  for(var i = 0; i < (this.closeTime - this.openTime); i++){
    this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
  };
  this.cookieSoldTotal = 0;
  for(i in this.cookieSoldArray){
    this.cookieSoldTotal += this.cookieSoldArray[i];
  }
  this.cookieSoldArray.push(this.cookieSoldTotal);
};

CookieStand.prototype.hourlyRateTable = function(){
  this.standsTable = document.getElementById('standsTable');
  this.trEl = document.createElement('tr');
  this.standsTable.appendChild(this.trEl);
  this.cookieSoldArray.unshift(this.name);
  console.log(this.cookieSoldArray);

  for(var i = 0; i < (this.cookieSoldArray.length); i++){
    this.tdEl = document.createElement('td');
    this.tdEl.textContent = this.cookieSoldArray[i];
    this.trEl.appendChild(this.tdEl);
  }
};

var makeHeaderRow = function(){
  var hoursLocal = ['Store', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
  var standsTable = document.getElementById('standsTable');
  var trEl = document.createElement('tr');
  for(var i = 0; i < hoursLocal.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hoursLocal[i];
    trEl.appendChild(thEl);
  };
  standsTable.appendChild(trEl);
};

makeHeaderRow();

new CookieStand('Pike', 23, 65, 6.3);
new CookieStand('SeaTac', 3, 24, 1.2);
new CookieStand('Seattle Center', 11, 38, 3.7 );
new CookieStand('Capitol Hill', 20, 38, 2.3);
new CookieStand('Alki', 2, 16, 4.6);
// makeHeaderRow();

var sumColumns = function(){
  for(var j = 0; j < standArray[0].cookieSoldArray.length; j++){
    var hourTotal = 0;
    for(var k in standArray){
      hourTotal = hourTotal + standArray[k].cookieSoldArray[j];
    };
    totalHourArray.push(hourTotal);
  };
  var standsTable = document.getElementById('standsTable');
  var trEl = document.createElement('tr');
  standsTable.appendChild(trEl);
  for (var i in totalHourArray){
    var tdEl = document.createElement('td');
    if(i == 0){
      tdEl.textContent = 'Total';
    }else{
      tdEl.textContent = totalHourArray[i];
    };
    trEl.appendChild(tdEl);
  };
};
sumColumns();
