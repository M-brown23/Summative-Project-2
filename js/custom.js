// All custom.js
(function() {
  'use strict';

  var getUpdatebutton = document.getElementById('button');
  console.log('yeet');

  // Onclick Begins
  getUpdatebutton.onclick = function(){

    var getNumberPeople = document.getElementById('people');
    var getNumberNights = document.getElementById('nights');

    console.log(getNumberPeople.value);
    var getLeft = document.getElementById('left');
    var getThirdOption = document.getElementById('third');

    console.log('working');

    if (getNumberPeople.value === 'House' + getNumberNights.value === > 3)  {
      console.log('People');
      document.getElementById("left").style.display = "block";
      document.getElementById("left").style.display = "none";
    };

    if (getNumberPeople.value === 'Hotel')  {
      console.log('People');
      document.getElementById("third").style.display = "block";
      document.getElementById("third").style.display = "none";
    };

  };
  // onclick ENDS

}());
// iife ENDS
