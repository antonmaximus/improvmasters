$(document).ready(function(){var e=document.querySelector("div.firstState").className;document.querySelector("div.firstState").className=e.replace("firstState","secondState")}),$(document).ready(function(){function e(e){var t=(0|e)%100;return t>3&&21>t?"th":["th","st","nd","rd"][t%10]||"th"}var t=new Date,a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear(),d=5-t.getDay();d=0>d?7+d:d;var i,o=new Date(r+"/"+n+"/"+(a+d)+" 20:05:00"),s=new Date(r+"/"+n+"/"+(a+d-7)+" 20:05:00"),c="1HPErqA-2afusRhUb_6TuKlnjd9tB7IjETvLXwwgBHNQ",l="https://spreadsheets.google.com/feeds/list/"+c+"/od6/public/values?alt=json-in-script&callback=?";$.getJSON(l,{},function(){}).done(function(t){var a=t.feed.updated.$t,n=new Date(a);if(n>=s&&o>=n){for(var r,d,c,l=t.feed.entry,u=l.length,m=document.createDocumentFragment(),f=0;u>f;f++)if(d=l[f].gsx$role.$t,c=l[f].gsx$name.$t,""!=$.trim(c)&&""!=$.trim(d)){var g=document.createElement("td");g.innerHTML=d;var p=document.createElement("td");p.innerHTML=c;var r=document.createElement("tr");r.appendChild(g),r.appendChild(p),m.appendChild(r)}document.getElementById("signup").appendChild(m),i="This Friday the "+o.getDate()+e(o.getDate())+" at ImprovMasters..."}else i="See you this Friday at ImprovMasters..."}).fail(function(e,t){console.log("getJSON request failed! "+t),i="See you this Friday at ImprovMasters..."}).always(function(){document.getElementById("fridayHeading").innerHTML=i;var e=document.querySelector("div.firstState").className;document.querySelector("div.firstState").className=e.replace("firstState","secondState")})});