// All custom.js...
(function() {
  'use strict';


  var getUpdatebutton = document.getElementById('button');
  console.log('yeet');

  var obj = {


    hotel: {

      minPpl: 1,
      maxPpl: 2,
      price: 157,
      minNight: 1,
      maxNight: 5
    },
    hostel: {

      minPpl: 1,
      price: 30,
      minNight: 1,
      maxNight: 10,

    },
    motel: {

      minPpl: 2,
      maxPpl: 4,
      price: 90,
      minNight: 3,
      maxNight: 10,

    },
    house: {

      minPpl: 1,
      maxPpl: 4,
      price: 240,
      minNight: 2,
      maxNight: 15,

    }
  }

  console.log(typeof obj.hotel.maxPpl);


  // Onclick Begins
  getUpdatebutton.onclick = function() {



    var getNumberPeople = document.getElementById('people');
    var getNumberNights = parseInt(document.getElementById('nights').value);
    var getLocation = document.getElementById('location')

    var getFirst = document.getElementById('first');
    var getSecondOption = document.getElementById('second');
    var getThirdOption = document.getElementById('third');
    var getFourthOption = document.getElementById('fourth');

    console.log('working');

    if (getNumberPeople.value === '1') {
      console.log('People');
      document.getElementById("second").style.opacity = "0.5";
      document.getElementById("third").style.opacity = "0.5";
      document.getElementById("fourth").style.opacity = "0.5";
      document.getElementById("first").style.opacity = "1";
    }


    if (getNumberPeople.value === '2') {
      console.log('People');
      document.getElementById("first").style.opacity = "1";
      document.getElementById("second").style.opacity = "1";
      document.getElementById("third").style.opacity = "1";
      document.getElementById("fourth").style.opacity = "1";
    }

    if (getNumberPeople.value === '3') {
      console.log('People');
      document.getElementById("first").style.opacity = "0.5";
      document.getElementById("second").style.opacity = "1";
      document.getElementById("third").style.opacity = "1";
      document.getElementById("fourth").style.opacity = "1";
    }

    if (getNumberPeople.value === '4') {
      console.log('People');
      document.getElementById("second").style.opacity = "1";
      document.getElementById("third").style.opacity = "1";
      document.getElementById("fourth").style.opacity = "1";
      document.getElementById("first").style.opacity = "0.5";
    }

    if (getNumberNights < obj.motel.minNight) {
      document.getElementById("first").style.opacity = "1";
      document.getElementById("second").style.opacity = "1";
      document.getElementById("fourth").style.opacity = "0.5";
      document.getElementById("third").style.opacity = "0.5";

    }

    if (getNumberNights > obj.house.minNight) {
      document.getElementById("first").style.opacity = "1";
      document.getElementById("second").style.opacity = "1";
      document.getElementById("fourth").style.opacity = "1";
      document.getElementById("third").style.opacity = "1";

    }

    if (getNumberNights > obj.hotel.maxNight) {
      document.getElementById("first").style.opacity = "0.5";
      document.getElementById("second").style.opacity = "1";
      document.getElementById("fourth").style.opacity = "1";
      document.getElementById("third").style.opacity = "1";

    }



    if (getNumberNights > obj.motel.maxNight) {
      document.getElementById("first").style.opacity = "0.5";
      document.getElementById("second").style.opacity = "0.5";
      document.getElementById("fourth").style.opacity = "1";
      document.getElementById("third").style.opacity = "0.5";

    }

    var total = document.getElementById('total')

    var x = getNumberNights;
    var y = obj.motel.price;
    var sum = x * y;
    // System.out.println(total); // Print the sum of x + y
    console.log(sum);

  };
  // onclick ENDS





}());
// iife ENDS
