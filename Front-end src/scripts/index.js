/**
 * Created by Amol!
 */
function newQuote() {
  
  /**
   * Randomizing index
   */
  var index=Math.floor(Math.random() * 10);
 
  /**
   * API call using script tag, to avoid CORS issue.
   */
  var script = document.createElement("script");
  script.src = `http://localhost:3000/api/get-quotes/${index}?callback=foo` ;
  document.body.appendChild(script);
   
  /**
   * Calling random background change.
   */
  random_bg_color();
   
}

function foo(quotes) {

  /**
   * retrieve the element
   */
  var quoteElement = document.getElementById("quoteAndAuthor");
  quoteElement.style.visibility="hidden";


  /**
   * jQuery to capture button click
   */
  $("#but1").click(function() {
      console.log("triggered");
      $("#quoteAndAuthor").removeClass("animated fadein");
      setTimeout(function(){
        $("#quoteAndAuthor").addClass("animated fadein");
    },200);
  });

  /**
   * Adding delayed visibility of quote
   */
  setTimeout(function(){
      quoteElement.style.visibility="visible";
  },200);
  /**
   * Displaying quote on HTML
   */
  document.getElementById('quote').innerHTML = quotes['quote'];
  document.getElementById('author').innerHTML = quotes['author'];
  
  /**
   * Redirecting to Tweeter with quote.
   */
  var e = document.getElementById("tweet-quote");
  e.href="https://twitter.com/intent/tweet?hashtags=quotes&amp;related=freecodecamp&amp;text="+quotes['quote']+"";
}

/**
 * function changes background-color randomly.
 */
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  
  document.body.style.background = bgColor;
  document.getElementById('but1').style.background=bgColor;
}

