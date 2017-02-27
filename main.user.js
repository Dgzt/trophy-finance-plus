// ==UserScript==
// @name        TrophyFincancePlus
// @namespace   http://trophymanager.com
// @description More fincance information for Trophymanager.
// @include     http://trophymanager.com/matches/*
// @include     https://trophymanager.com/matches/*
// @author    	Dgzt
// @version     0.3
// @grant       none
// ==/UserScript==

var tfp_ticket_price=200;

$(document).ready(function(){
  function mutationHandler (mutationRecords){
    mutationRecords.forEach(function(mutation){
      
      if(mutation.type==='childList' && mutation.addedNodes.length > 0){
        mutation.addedNodes.forEach(function(node){
          if($(node).hasClass('post_report')){
            var attendanceSpan = $(node).find('.attendance');
            var attendance = parseInt(match_info.attendance);
            var ul = $(attendanceSpan).parent().parent();
            ul.append('<li>' +
                    '<span class="bold">Income:</span><br/>' +
                    '<span>Stadium: </span> <span>' + number_format(attendance*tfp_ticket_price) + '</span>' +
                    '</li>');
          }
        });
      }
    });
  }
  
  var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
  var myObserver = new MutationObserver (mutationHandler);
  var obsConfig = { childList: true, characterData: true, attributes: true, subtree: true };
  
  var targetNodes = $(".box_body");
  targetNodes.each(function(){
    myObserver.observe(this, obsConfig);
  });
});
