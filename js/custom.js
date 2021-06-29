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
      maxNight: 5,
      menu: 'Hash Browns & Coffee',
      menuStacked: {
        coffee: 'something..'
      }
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



    var x = getNumberNights;
    var y = obj.motel.price;
    var motelSum = x * y;
    // System.out.println(total); // Print the sum of x + y
    console.log(motelSum);



    var x = getNumberNights;
    var y = obj.hotel.price;
    var hotelSum = x * y;
    // System.out.println(total); // Print the sum of x + y
    console.log(hotelSum);



    var x = getNumberNights;
    var y = obj.hostel.price;
    var hostelSum = x * y;
    // System.out.println(total); // Print the sum of x + y
    console.log(hostelSum);




    var x = getNumberNights;
    var y = obj.motel.price;
    var motelSum = x * y;
    // System.out.println(total); // Print the sum of x + y
    console.log(motelSum);



    var x = getNumberNights;
    var y = obj.house.price;
    var houseSum = x * y;
    // System.out.println(total); // Print the sum of x + y
    console.log(typeof houseSum);


  document.getElementById("housetotal").textContent =  '$' + houseSum;
  document.getElementById("hoteltotal").textContent =  '$' + hotelSum;
  document.getElementById("moteltotal").textContent =  '$' + motelSum;
  document.getElementById("hosteltotal").textContent = '$' + hostelSum;

  // Displays total price

  document.getElementById("housenights").textContent = getNumberNights + ' nights selected ';
  document.getElementById("hotelnights").textContent = getNumberNights + ' nights selected ';
  document.getElementById("motelnights").textContent = getNumberNights + ' nights selected ';
  document.getElementById("hostelnights").textContent = getNumberNights + ' nights selected';

  // Tells user total nights selected

  document.getElementById("hostelpernights").textContent = '$' + obj.hostel.price + ' per night'
  document.getElementById("motelpernights").textContent = '$' + obj.motel.price + ' per night'
  document.getElementById("hotelpernights").textContent = '$' + obj.hotel.price + ' per night'
  document.getElementById("housepernights").textContent = '$' + obj.house.price + ' per night'

  // Displays the cost per night



  };
  // onclick ENDS





  // Items Magic [Preview-1]
  $('.paper.preview-1 .item').click(function () {
      $('.paper.preview-1 .item').not(this).removeClass('active');
      $(this).toggleClass('active');
      if ($('.paper.preview-1 .item').hasClass('active')) {
          $('.paper.preview-1').addClass('item-active');
      } else {
          $('.paper.preview-1').removeClass('item-active')
      };
  });
  // Preventing Closing when Click inside counter
  $('.minus,.plus').click(function (a) {
      a.stopPropagation();
  });

  // Adding Counter [Preview-1]
  $('.paper.preview-1 .plus').click(function () {
      $(this).parent().find('.number').html(function (y, val) {
          return val * 1 + 1
      });
  });

  $('.paper.preview-1 .minus').click(function () {
      var increased = parseInt($(this).parent().find('.number').text());
      if (isNaN(increased) || increased > 0) {
          $(this).parent().find('.number').html(function (t, val) {
              return val * 1 - 1
          });
      } else {
        return false;
      }
  });
  $('.paper.preview-1 .plus, .paper.preview-1 .minus').click(function () {
      var increased = parseInt($(this).parent().find('.number').text());

      var itemsTotal = 0;
      $('.paper.preview-1 .number').each(function () {
          itemsTotal += ($(this).html() * 1);
      });
      $('.paper.preview-1 .items-total').html(itemsTotal);

      var itemsTotalAll = parseInt($('.paper.preview-1 .items-total').text());
      if (isNaN(itemsTotalAll) || itemsTotalAll <= 0) {
          $('.paper.preview-1 .action').hide();
      } else {
          $('.paper.preview-1 .action').show();
      }

      if (isNaN(increased) || increased <= 0) {
          $(this).parent().find('.number').hide();
      } else {
          $(this).parent().find('.number').show();
      }
  });

  // JavaScript code is done
  // the rest are just repeating
  // for Paper Preview-2 functionality

  // Items Magic [Preview-2]
  $('.paper.preview-2 .item').click(function () {
      $('.paper.preview-2 .item').not(this).removeClass('active');
      $(this).toggleClass('active');
      if ($('.paper.preview-2 .item').hasClass('active')) {
          $('.paper.preview-2').addClass('item-active');
      } else {
          $('.paper.preview-2').removeClass('item-active')
      };
  });

  // Adding Counter [Preview-2]
  $('.paper.preview-2 .plus').click(function () {
      $(this).parent().find('.number').html(function (p, val) {
          return val * 1 + 1
      });
  });


  $('.paper.preview-2 .minus').click(function () {
      var increased = parseInt($(this).parent().find('.number').text());
      if (isNaN(increased) || increased > 0) {
          $(this).parent().find('.number').html(function (k, val) {
              return val * 1 - 1
          });
      } else {

      }
  });
  $('.paper.preview-2 .plus, .paper.preview-2 .minus').click(function () {
      var increased = parseInt($(this).parent().find('.number').text());

      var itemsTotal = 0;
      $('.paper.preview-2 .number').each(function () {
          itemsTotal += ($(this).html() * 1);
      });
      $('.paper.preview-2 .items-total').html(itemsTotal);

      var itemsTotalAll = parseInt($('.paper.preview-2 .items-total').text());
      if (isNaN(itemsTotalAll) || itemsTotalAll <= 0) {
          $('.paper.preview-2 .action').hide();
      } else {
          $('.paper.preview-2 .action').show();
      }

      if (isNaN(increased) || increased <= 0) {
          $(this).parent().find('.number').hide();
      } else {
          $(this).parent().find('.number').show();
      }
  });


}());
// iife ENDS
