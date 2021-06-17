// All custom.js...
(function() {
  'use strict';


  // var data = {
  //   hotel: {
  //     minPpl: 1,
  //     maxPpl: 2,
  //     price: 157,
  //     minNight: 1,
  //     maxNight: 5,
  //
  //
  //
  //   hostel: {
  //
  //     minPpl: 1,
  //     price: 30,
  //     minNight: 1,
  //     maxNight: 10,
  //
  //
  //
  //   Motel: {
  //
  //     minPpl: 2,
  //     maxPpl: 4,
  //     price: 90,
  //     minNight: 3,
  //     maxNight: 10,
  //
  //
  //
  //   House: {
  //
  //     minPpl: 1,
  //     maxPpl: 4,
  //     price: 240,
  //     minNight: 2,
  //     maxNight: 15,
  //
  //
  // }



  var getUpdatebutton = document.getElementById('button');
  console.log('yeet');

  // Onclick Begins
  getUpdatebutton.onclick = function() {

    var getNumberPeople = document.getElementById('people');
    var getNumberNights = parseInt(document.getElementById('nights').value);


    console.log(typeof getNumberNights);

    console.log(getNumberNights);
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

    if (getNumberNights < 2) {
      document.getElementById("first").style.opacity = "1";
      document.getElementById("second").style.opacity = "0.5";
      document.getElementById("fourth").style.opacity = "0.5";
      document.getElementById("third").style.opacity = "0.5";

    }

    if (getNumberNights > 2) {
      document.getElementById("first").style.opacity = "1";
      document.getElementById("second").style.opacity = "1";
      document.getElementById("fourth").style.opacity = "1";
      document.getElementById("third").style.opacity = "1";

    }

    if (getNumberNights > 4) {
      document.getElementById("first").style.opacity = "0.5";
      document.getElementById("second").style.opacity = "0.5";
      document.getElementById("fourth").style.opacity = "1";
      document.getElementById("third").style.opacity = "1";

    }

    // if (getNumberNights < 5){
    //   document.getElementById("first").style.opacity = "1";
    //   document.getElementById("second").style.opacity = "1";
    //   document.getElementById("fourth").style.opacity = "1";
    //   document.getElementById("third").style.opacity = "1";
    //
    // }

    if (getNumberNights > 5) {
      document.getElementById("first").style.opacity = "0.5";
      document.getElementById("second").style.opacity = "0.5";
      document.getElementById("fourth").style.opacity = "1";
      document.getElementById("third").style.opacity = "1";

    }

    if (getNumberNights > 10) {
      document.getElementById("first").style.opacity = "0.5";
      document.getElementById("second").style.opacity = "0.5";
      document.getElementById("fourth").style.opacity = "1";
      document.getElementById("third").style.opacity = "0.5";

    }


  };
  // onclick ENDS


  // Card Fill out Form



}());
// iife ENDS
