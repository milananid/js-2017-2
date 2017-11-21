;(function (){
  'use strict' //https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Strict_mode




  console.log($('html').html());

  $('body').append('<a href="#">Niente</a>');

  $('a').html('just a link');

  $('a').goGreen();

  var $tit = "un titolo";
  var $link = "link.html";

  $( "a" ).attr({
      title: $tit,
      href: $link
  });

}())


$( document ).ready(function() {
  console.log( "document loaded" );
});

$( window ).on( "load", function() {
  console.log( "window loaded" );
});
