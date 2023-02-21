
var days = 730; 
var lastvisit=new Object();
var firstvisitmsg="<b>This is your first visit to this page.</b> <b>Welcome!</b>"; 
lastvisit.subsequentvisitmsg="<p style='font-size:18px;'>Welcome back visitor!</p> <b>Your last visit was on</b> <b style='font-size:18px; color:blueviolet;'>[date_displayed]</b>";
 
lastvisit.getCookie=function(Name){ 
var re=new RegExp(Name+"=[^;]+", "i"); 
if (document.cookie.match(re)) 
return document.cookie.match(re)[0].split("=")[1];
return''; 
}
 
lastvisit.setCookie=function(name, value, days){ 
var expireDate = new Date();
 
var expstring=expireDate.setDate(expireDate.getDate()+parseInt(days));
document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}
 
lastvisit.showmessage = function() {
var wh = new Date();
if (lastvisit.getCookie("visit_record") == "") { 
lastvisit.setCookie("visit_record", wh, days); 
document.write(firstvisitmsg);
}
 
else {
var lv = lastvisit.getCookie("visit_record");
var lvp = Date.parse(lv);
var now = new Date();
now.setTime(lvp);
var day = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var month = new Array ("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var dd = now.getDate();
var dy = now.getDay();
dy = day[dy];
var mn = now.getMonth();
mn = month[mn];
yy = now.getFullYear();
var hh = now.getHours();
var ampm = "AM";
if (hh >= 12) {ampm = "PM"}
if (hh >12){hh = hh - 12};
if (hh == 0) {hh = 12}
if (hh < 10) {hh = "0" + hh};
var mins = now.getMinutes();
if (mins < 10) {mins = "0"+ mins}
var secs = now.getSeconds();
if (secs < 10) {secs = "0" + secs}
var dispDate = dy + ", " + mn + " " + dd + ", " + yy + " " + hh + ":" + mins + ":" + secs + " " + ampm
document.write(lastvisit.subsequentvisitmsg.replace("\[date_displayed\]", dispDate))
}
 
lastvisit.setCookie("visit_record", wh, days);
 
}
 
lastvisit.showmessage();


/*credist for the date time
https://stackoverflow.com/questions/10486060/how-to-display-previous-day-and-next-day-dates-in-html-using-javascript
https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php fro the date and TIME*/