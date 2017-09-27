'use strict';

//global Variables
var standArray = [];
var totalHourArray = [];
var storeForm = document.getElementById('storeForm');
var standsTable = document.getElementById('standsTable');
var allLocationsRef = [];


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function CookieStand(name, minCustomers, maxCustomers, aveCookies){
  this.name = name;
  allLocationsRef.push(this.name);
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
  this.createHourlyRateTable();
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

CookieStand.prototype.createHourlyRateTable = function(){
  this.trEl = document.createElement('tr');
  standsTable.appendChild(this.trEl);
  var locCSArray = this.cookieSoldArray.slice(0);
  console.log(locCSArray);
  // this.cookieSoldArray.unshift(this.name);
  locCSArray.unshift(this.name);
  // console.log(this.cookieSoldArray);

  for(var i = 0; i < locCSArray.length; i++){
    this.tdEl = document.createElement('td');
    this.tdEl.textContent = locCSArray[i];
    this.trEl.appendChild(this.tdEl);
  }
};

var makeHeaderRow = function(){
  var hoursLocal = ['Store', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];
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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//new Location function
//function to re-render table
function renderTable(){
  standsTable.innerHTML = null;
  makeHeaderRow();
  for(var i in standArray){
    standArray[i].createHourlyRateTable();
  }
  sumColumns();
}


function handleLocationSubmit(event) {
  event.preventDefault();

  // form validation

  var name = event.target.name.value;
  var minCustomers = parseInt(event.target.minCustomers.value);
  var maxCustomers = parseInt(event.target.maxCustomers.value);
  var aveCookies = parseInt(event.target.aveCookies.value);

  if(allLocationsRef.indexOf(name) > -1){
    standArray[allLocationsRef.indexOf(name)].minCustomers = minCustomers;
    standArray[allLocationsRef.indexOf(name)].maxCustomers = maxCustomers;
    standArray[allLocationsRef.indexOf(name)].aveCookies = aveCookies;
    standArray[allLocationsRef.indexOf(name)].cookieSoldArray = [];
    standArray[allLocationsRef.indexOf(name)].randRate();
    renderTable();
    return;
  }

  var newCookieStand = new CookieStand(name,minCustomers,maxCustomers, aveCookies);
  console.log(newCookieStand);

  event.target.name.value = null;
  event.target.minCustomers.value = null;
  event.target.maxCustomers.value = null;
  event.target.aveCookies.value = null;
  renderTable();
}

storeForm.addEventListener('submit', handleLocationSubmit);


//end table construction adds
var sumColumns = function(){
  totalHourArray = [];
  for(var j = -1; j < standArray[0].cookieSoldArray.length ; j++){
    var hourTotal = 0;
    for(var k in standArray){
      hourTotal = hourTotal + standArray[k].cookieSoldArray[j];
    };
    totalHourArray.push(hourTotal);
  };
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
