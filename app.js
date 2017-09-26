'use strict';

var standArray = [];

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
}

CookieStand.prototype.randRate = function(){
  for(var i = 0; i < (this.closeTime - this.openTime); i++)
       this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
    },
}

CookieStand.prototype.hourlyRateCombine = function(){

}

CookieStand.prototype.sumRate = function(){

}



new CookieStand('pike', 23, 65, 6.3);
console.log(standArray[0]);





// Cat.prototype.render = function(){
//   var trEl = document.createElement('tr');
//   var catContent = [Cat.name, Cat.color, Cat.tailSize];
//   for( var i; i < 2; i++)
//     var tdEl = document.createElement('td');
//   tdEl.textContent = this.catContent[i];
//   catTable.appendChild(trEl);
//   trEl.appendChild(tdEl);
//
//   function makeHeaderRow() {
//   var trEl = document.createElement('tr');
//   var thEl = document.createElement('th');
//   thEl.textContent = 'tail Size';
//   trEl.appendChild(this.thEl);

//
var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  aveCookies: 6.3,
  openTime: 6,
  closeTime: 21,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookieSoldArray: [],
  sumCookieSold:0,
  randRate: function(){
    for(var i = 0; i < (this.closeTime - this.openTime); i++)
      this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
  },

  hourlyRateCombine: function(){
    for(var i = 0; i < (this.closeTime - this.openTime); i++){
      var pikeUl = document.getElementById('pike');
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
      pikeUl.appendChild(liEl);
    }
  },

  sumRate: function(){
    for(var i in this.cookieSoldArray){
      this.sumCookieSold = (this.sumCookieSold + this.cookieSoldArray[i]);
    };
    var pikeUl = document.getElementById('pike');
    var liEl = document.createElement('p');
    liEl.textContent = 'Total: ' + this.sumCookieSold;
    pikeUl.appendChild(liEl);
  },

};

pike.randRate();
pike.hourlyRateCombine();
pike.sumRate();
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
