'use strict';

var standArray = [];
var totalHourArray = [];
var hours = ['6:am', '7:0am'];

function CookieStand(name, minCustomers, maxCustomers, aveCookies){
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.aveCookies = aveCookies;
  this.openTime = 6;
  this.closeTime = 21;
  this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.cookieSoldArray = [];
  this.sumCookieSold = 0;
  standArray.push(this);
  this.randRate();
  this.hourlyRateTable();
  this.makeHeaderRow();
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
  for(var i = 0; i < (this.closeTime - this.openTime + 1); i++){
    this.tdEl = document.createElement('td');
    this.tdEl.textContent = this.cookieSoldArray[i];
    this.trEl.appendChild(this.tdEl);
  }
};


CookieStand.prototype.makeHeaderRow = function(){
  var standsTable = document.getElementById('standsTable');
  var trEl = document.createElement('tr');
  standsTable.appendChild(trEl);
  // console.log(standsTable);
  // console.log(thEl , 'is theEl line 61');
  var thEl = document.createElement('th');

  for(var l = 0; l < this.hours.length; l++){
    // if(l == -1){
    //   trEl.appendChild(thEl);
    //   console.log(trEl);
    // }else{
    // console.log(standArray[0].hours[l]);
    var thing = this.hours[l];
    thEl.textContent = 'hello world ' + thing;
    console.log(thEl , 'line68');
    trEl.appendChild(thEl);
    // console.log(trEl);
  }
  // console.log('hi');
  // thEl.textContent = ;
  // trEl.appendChild(this.thEl);
  // };
};
new CookieStand('pike', 23, 65, 6.3);
new CookieStand('seaTac', 3, 24, 1.2);
new CookieStand('sCenter', 11, 38, 3.7 );
new CookieStand('capHill', 20, 38, 2.3);
new CookieStand('alki', 2, 16, 4.6);
// makeHeaderRow();

var sumColumns = function(){
  for(var j in standArray[0].cookieSoldArray){
    var hourTotal = 0;
    for(var k in standArray){
      hourTotal = hourTotal + standArray[k].cookieSoldArray[j];
    };
    totalHourArray.push(hourTotal);
  };
  var standsTable = document.getElementById('standsTable');
  var trEl = document.createElement('tr');
  // console.log(trEl);
  standsTable.appendChild(trEl);
  // console.log(totalHourArray);
  for (var i in totalHourArray){
    var tdEl = document.createElement('td');
    // console.log(tdEl);
    tdEl.textContent = totalHourArray[i];
    trEl.appendChild(tdEl);
  }
};

sumColumns();

// Cat.prototype.render = function(){
//   var trEl = document.createElement('tr');
//   var catContent = [Cat.name, Cat.color, Cat.tailSize];
//   for( var i; i < 2; i++)
//     var tdEl = document.createElement('td');
//   tdEl.textContent = this.catContent[i];
//   catTable.appendChild(trEl);
//   trEl.appendChild(tdEl);
//
//
// var pike = {
//   minCustomers: 23,
//   maxCustomers: 65,
//   aveCookies: 6.3,
//   openTime: 6,
//   closeTime: 21,
//   hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   cookieSoldArray: [],
//   sumCookieSold:0,
//   randRate: function(){
//     for(var i = 0; i < (this.closeTime - this.openTime); i++)
//       this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
//   },
//
//   hourlyRateCombine: function(){
//     for(var i = 0; i < (this.closeTime - this.openTime); i++){
//       var pikeUl = document.getElementById('pike');
//       var liEl = document.createElement('li');
//       liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
//       pikeUl.appendChild(liEl);
//     }
//   },
//
//   sumRate: function(){
//     for(var i in this.cookieSoldArray){
//       this.sumCookieSold = (this.sumCookieSold + this.cookieSoldArray[i]);
//     };
//     var pikeUl = document.getElementById('pike');
//     var liEl = document.createElement('p');
//     liEl.textContent = 'Total: ' + this.sumCookieSold;
//     pikeUl.appendChild(liEl);
//   },
//
// };
//
// pike.randRate();
// pike.hourlyRateCombine();
// pike.sumRate();
//
//
// var seaTac = {
//   minCustomers: 3,
//   maxCustomers: 24,
//   aveCookies: 1.2,
//   openTime: 6,
//   CloseTime: 21,
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   cookieSoldArray:[],
//   sumCookieSold:0,
//   randrate: function(){
//     for(var i = 0; i < (this.CloseTime - this.openTime); i++)
//       this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
//   },
//   hourlyRateCombine: function(){
//     for(var i = 0; i < (this.CloseTime - this.openTime); i++){
//       var seaTacUl = document.getElementById('seaTac');
//       var liEl = document.createElement('li');
//       liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
//       seaTacUl.appendChild(liEl);
//     }
//   },
//
//   sumRate: function(){
//     for(var i in this.cookieSoldArray){
//       this.sumCookieSold = (this.sumCookieSold + this.cookieSoldArray[i]);
//     };
//     var pikeUl = document.getElementById('seaTac');
//     var liEl = document.createElement('p');
//     liEl.textContent = 'Total: ' + this.sumCookieSold;
//     pikeUl.appendChild(liEl);
//   },
// };
//
// seaTac.randrate();
// seaTac.hourlyRateCombine();
// seaTac.sumRate();
//
// var sCenter = {
//   minCustomers: 11,
//   maxCustomers: 38,
//   aveCookies: 3.7,
//   openTime: 6,
//   CloseTime: 21,
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   cookieSoldArray:[],
//   sumCookieSold:0,
//   randrate: function(){
//     for(var i = 0; i < (this.CloseTime - this.openTime); i++)
//       this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
//   },
//   hourlyRateCombine: function(){
//     for(var i = 0; i < (this.CloseTime - this.openTime); i++){
//       var sCenterUl = document.getElementById('sCenter');
//       var liEl = document.createElement('li');
//       liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
//       sCenterUl.appendChild(liEl);
//     }
//   },
//
//   sumRate: function(){
//     for(var i in this.cookieSoldArray){
//       this.sumCookieSold = (this.sumCookieSold + this.cookieSoldArray[i]);
//     };
//     var pikeUl = document.getElementById('sCenter');
//     var liEl = document.createElement('p');
//     liEl.textContent = 'Total: ' + this.sumCookieSold;
//     pikeUl.appendChild(liEl);
//   },
// };
//
// sCenter.randrate();
// sCenter.hourlyRateCombine();
// sCenter.sumRate();
//
// var capHill = {
//   minCustomers: 20,
//   maxCustomers: 38,
//   aveCookies: 2.3,
//   openTime: 6,
//   CloseTime: 21,
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   cookieSoldArray:[],
//   sumCookieSold:0,
//   randrate: function(){
//     for(var i = 0; i < (this.CloseTime - this.openTime); i++)
//       this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
//   },
//   hourlyRateCombine: function(){
//     for(var i = 0; i < (this.CloseTime - this.openTime); i++){
//       var capHillUl = document.getElementById('capHill');
//       var liEl = document.createElement('li');
//       liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
//       capHillUl.appendChild(liEl);
//     }
//   },
//
//   sumRate: function(){
//     for(var i in this.cookieSoldArray){
//       this.sumCookieSold = (this.sumCookieSold + this.cookieSoldArray[i]);
//     };
//     var pikeUl = document.getElementById('capHill');
//     var liEl = document.createElement('p');
//     liEl.textContent = 'Total: ' + this.sumCookieSold;
//     pikeUl.appendChild(liEl);
//   },
// };
//
// capHill.randrate();
// capHill.hourlyRateCombine();
// capHill.sumRate();
//
// var alki = {
//   minCustomers: 2,
//   maxCustomers: 16,
//   aveCookies: 4.6,
//   openTime: 6,
//   CloseTime: 21,
//   hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   cookieSoldArray:[],
//   sumCookieSold:0,
//   randrate: function(){
//     for(var i = 0; i < (this.CloseTime - this.openTime); i++)
//       this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
//   },
//   hourlyRateCombine: function(){
//     for(var i = 0; i < (this.CloseTime - this.openTime); i++){
//       var alkiUl = document.getElementById('alki');
//       var liEl = document.createElement('li');
//       liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
//       alkiUl.appendChild(liEl);
//     }
//   },
//
//   sumRate: function(){
//     for(var i in this.cookieSoldArray){
//       this.sumCookieSold = (this.sumCookieSold + this.cookieSoldArray[i]);
//     };
//     var pikeUl = document.getElementById('alki');
//     var liEl = document.createElement('p');
//     liEl.textContent = 'Total: ' + this.sumCookieSold;
//     pikeUl.appendChild(liEl);
//   },
// };
//
// alki.randrate();
// alki.hourlyRateCombine();
// alki.sumRate();
