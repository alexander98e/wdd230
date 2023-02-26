var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime;
var datetime = new Date().getFullYear();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime;
var date = new Date(); 
var dd = date.getDate(); 
var mm = date.getMonth() + 1; 
var yyyy = date.getFullYear(); 
var newDate = dd + "-" + mm + "-" +yyyy; 
var p = document.getElementById("myId"); 
p.innerHTML = newDate; 