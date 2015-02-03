// ==UserScript==
// @name        MangaCow Floating Div
// @namespace   MangaCow-Floating-Div
// @version     1
// @grant       none
// @include http://mangacow.co/*
// @exclude http://mangacow.co/
// @require https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// ==/UserScript==

var href = $( "h1.ttl" ).find("a").attr('href');
var length = $( ".cbo_wpm_chp > option").length / 2 -1;
var index = $( ".cbo_wpm_chp option:selected" ).index();
var NextChap = href + $( ".cbo_wpm_chp option:selected" ).prev().val()  + "/?all";
var PreviousChap = href + $( ".cbo_wpm_chp option:selected" ).next().val() + "/?all";
var url = window.location.href;

$("body").append ('	\
	<div id="gmSomeID"> \
	</div>              \
');

if($( ".cbo_wpm_chp option:selected" ).index() != 0){
	$("#gmSomeID").append("<a id = \"NextChapter\"</a>Next Chapter<br/>");
} 

if ($( ".cbo_wpm_chp option:selected" ).index() != length){
	$("#gmSomeID").append("<a id = \"PreviousChap\">Previous Chapter</a><br/>");
}

$("#gmSomeID").css({"z-index" : "1","position" : "fixed", "left" : "20%", "top" : "10%",  "background-color" : "white"});
$("#NextChapter").attr('href',NextChap);
$("#PreviousChap").attr('href',PreviousChap);
