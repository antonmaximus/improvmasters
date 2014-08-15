$(document).ready(function(){
  var el = document.querySelector("div.firstState").className;
  document.querySelector("div.firstState").className = el.replace('firstState', 'secondState');
});