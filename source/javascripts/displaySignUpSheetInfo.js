$(document).ready(function(){

  function suffix(n) {
    var d = (n|0)%100;
    return d > 3 && d < 21 ? 'th' : ['th', 'st', 'nd', 'rd'][d%10] || 'th';
  }

  // var today = new Date("2014-08-15 23:05:00"),
  var today = new Date(),
    dd = today.getDate(),
    mm = today.getMonth()+1, //January is 0!
    yyyy = today.getFullYear(),
    offset = 5 - today.getDay();  //Sunday is 0; Friday is 5;

  offset = (offset < 0) ? 7+offset : offset;

  var thisFriday = new Date(yyyy + '/' + mm + '/' + (dd + offset) + " 20:05:00");
  var lastFriday = new Date(yyyy + '/' + mm + '/' + (dd + offset - 7) + " 20:05:00");

  console.log("Today is: " + today);
  console.log("Upcoming Friday is: " + thisFriday);
  console.log("Previous Friday is: " + lastFriday);

  var targetSheet = '1HPErqA-2afusRhUb_6TuKlnjd9tB7IjETvLXwwgBHNQ';
  // var oldSheet = '0Auwt3KepmdoudE1iZFVFYmlQclcxbW85YzNZSTYyUHc'
  var url = "https://spreadsheets.google.com/feeds/list/" + targetSheet + "/od6/public/values?alt=json-in-script&callback=?"; 



  $.getJSON(url,{}, function (data) { 
      /* First Check Timesamp */
      var timestampstring = data.feed.updated['$t'];  
      var lastupdate = new Date(timestampstring);

      /* Timestamp is between this Friday and last Friday, then we continue */
      if (lastupdate >= lastFriday && lastupdate <= thisFriday) {
        var entry = data.feed.entry,
          length = entry.length,
          fragment = document.createDocumentFragment(),
          tr, td,
          role, name;

        for(var i=0; i<length; i++) {
          role = entry[i]['gsx$role']['$t'];
          name = entry[i]['gsx$name']['$t'];

          //If name is blank, we move on to the next pair.
          if ($.trim(name)== '' || $.trim(role)== '') {
            continue; 
          }

          var tr = document.createElement("tr");
          var td1 = document.createElement("td");
          var td2 = document.createElement("td");

          td1.innerHTML = role;
          td2.innerHTML = name;

          tr.appendChild(td1);
          tr.appendChild(td2);
          fragment.appendChild(tr);

        }
        document.getElementById("signup").appendChild(fragment);
        var message = "This Friday the " + thisFriday.getDate() + suffix(thisFriday.getDate()) + " at ImprovMasters..."
        document.getElementById("fridayHeading").innerHTML = message;


      }


  });


});