const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

$(function() {


    var fruits = [];
 
    $.getJSON('fruits.json', function(data) {
        $.each(data.person, function(i, f) {
           var tblRow = "<tr>" + "<td>" + f.name + "</td>" +
            "<td>" + f.genus + "</td>" + "<td>" + f.order + "</td>" + "<td>" + f.calories + "</td>" + "</tr>"
            $(tblRow).appendTo("#userdata tbody");
      });
 
    });
 
 });

 function testVariable() {
  var strText = document.getElementById("textone").value;          
  var strText1 = document.getElementById("textTWO").value;
  var result = strText + ' ' + strText1;
  document.getElementById('spanResult').textContent = result;
   
}