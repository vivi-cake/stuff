let button = document.querySelector(".button");
let slider = document.querySelector(".slider");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");

button.style.width = span1.clientWidth + "px";
button.style.height = span1.clientHeight + "px";

button.onmouseover = function(){
      slider.style.top = "-" + span1.clientHeight + "px";
  }
  button.onmouseout = function(){
      slider.style.top = "0px";
  }

