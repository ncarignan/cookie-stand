'use strict';

var pike = {
  minCustomers: 23,
  maxCustomers: 65,
  aveCookies: 6.3,
  openTime: 6,
  closeTime: 21,
  hours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookieSoldArray: [],
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


};
pike.randRate();
pike.hourlyRateCombine();


var seaTac = {
  minCustomers: 3,
  maxCustomers: 24,
  aveCookies: 1.2,
  openTime: 6,
  CloseTime: 21,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookieSoldArray:[],
  randrate: function(){
    for(var i = 0; i < (this.CloseTime - this.openTime); i++)
      this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
  },
  hourlyRateCombine: function(){
    for(var i = 0; i < (this.CloseTime - this.openTime); i++){
      var seaTacUl = document.getElementById('seaTac');
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
      seaTacUl.appendChild(liEl);
    }
  },
};

seaTac.randrate();
seaTac.hourlyRateCombine();

var sCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  aveCookies: 3.7,
  openTime: 6,
  CloseTime: 21,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookieSoldArray:[],
  randrate: function(){
    for(var i = 0; i < (this.CloseTime - this.openTime); i++)
      this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
  },
  hourlyRateCombine: function(){
    for(var i = 0; i < (this.CloseTime - this.openTime); i++){
      var sCenterUl = document.getElementById('sCenter');
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
      sCenterUl.appendChild(liEl);
    }
  },
};

sCenter.randrate();
sCenter.hourlyRateCombine();

var capHill = {
  minCustomers: 20,
  maxCustomers: 38,
  aveCookies: 2.3,
  openTime: 6,
  CloseTime: 21,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookieSoldArray:[],
  randrate: function(){
    for(var i = 0; i < (this.CloseTime - this.openTime); i++)
      this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
  },
  hourlyRateCombine: function(){
    for(var i = 0; i < (this.CloseTime - this.openTime); i++){
      var capHillUl = document.getElementById('capHill');
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
      capHillUl.appendChild(liEl);
    }
  },
};

capHill.randrate();
capHill.hourlyRateCombine();

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  aveCookies: 4.6,
  openTime: 6,
  CloseTime: 21,
  hours:['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  cookieSoldArray:[],
  randrate: function(){
    for(var i = 0; i < (this.CloseTime - this.openTime); i++)
      this.cookieSoldArray.push(Math.floor(this.aveCookies * (Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers)));
  },
  hourlyRateCombine: function(){
    for(var i = 0; i < (this.CloseTime - this.openTime); i++){
      var alkiUl = document.getElementById('alki');
      var liEl = document.createElement('li');
      liEl.textContent = this.hours[i] + ': ' + this.cookieSoldArray[i];
      alkiUl.appendChild(liEl);
    }
  },
};

alki.randrate();
alki.hourlyRateCombine();
