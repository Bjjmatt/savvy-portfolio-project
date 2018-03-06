/* globals $ */

var css = {
    "background-color": "chartreuse",
    "font-size": "500%",
    "top": 0
};

var animations = {
    "font-size": "500%",
    "top": "20vh"
};

var $h2 = $( "<h2>" )
    .text( "This also came from jQuery" )
    .css( "position", "fixed" );

var animateH2 = function animateH2(){
    $h2.animate( {
        "left": "100vw"
    } );
};

var animateOptions = {
    "duration": 5000,
    "complete": animateH2
};

var $h1 = $( "<h1>" )
    .text( "Hello World" )
    .css( css )
    .animate( animations, animateOptions );


$( "#output" ).append( $h1, $h2 );
