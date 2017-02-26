// ==UserScript==
// @name        TrophyFincancePlus
// @namespace   http://trophymanager.com
// @description More fincance information for Trophymanager.
// @include     http://trophymanager.com/matches/*
// @include     https://trophymanager.com/matches/*
// @author    	Dgzt
// @version     0.2
// @grant       none
// ==/UserScript==

var tfp_wait_msec=200;
var tfp_ticket_price=200;

// TODO Rewrite to JQuery's change function
this.watch('end_of_game', function(prop, oldvarl, newval){
  
  // Wait for reload stadion section
  setTimeout(function(){
    var attendance = parseInt(match_info["attendance"]);
    
    var attendanceSpan = $(".attendance");
    var ul = attendanceSpan.parent().parent();
    ul.append('<li>' +
              '<span class="bold">Income:</span><br/>' +
              '<span>Stadium: </span> <span>' + number_format(attendance*tfp_ticket_price) + '</span>' +
              '</li>');
  }, tfp_wait_msec);
  
  return newval;
});
