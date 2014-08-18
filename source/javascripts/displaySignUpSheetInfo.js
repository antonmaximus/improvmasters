$(document).ready(function(){

  //Returns the suffix for a ranked number (e.g., 3rd)
  function suffix(n) {
    var d = (n|0)%100;
    return d > 3 && d < 21 ? 'th' : ['th', 'st', 'nd', 'rd'][d%10] || 'th';
  }

  //  Date Variables
  var today = new Date(),
    dd = today.getDate(),
    mm = today.getMonth()+1, //January is 0!
    yyyy = today.getFullYear(),
    offset = 5 - today.getDay();  //Sunday is 0; Friday is 5;

  offset = (offset < 0) ? 7+offset : offset;

  var thisFriday = new Date(yyyy + '/' + mm + '/' + (dd + offset) + " 20:05:00");
  var lastFriday = new Date(yyyy + '/' + mm + '/' + (dd + offset - 7) + " 20:05:00");

  // console.log("Today is: " + today);
  // console.log("Upcoming Friday is: " + thisFriday);
  // console.log("Previous Friday is: " + lastFriday);

  var targetSheet = '1ApJ3oi1-VApk3r5IpxWfUj3wI5yjl6UQWtbBPlt5qAQ';
  // var oldSheet = '0Auwt3KepmdoudE1iZFVFYmlQclcxbW85YzNZSTYyUHc'
  var url = "https://spreadsheets.google.com/feeds/list/" + targetSheet + "/od6/public/values?alt=json-in-script&callback=?"; 


  var message = "See you at ImprovMasters!" // Default Message
  $.getJSON(url,{}, function (data) { 
  })
  .done(function(data) {
    /* First Check Timesamp */
    var timestampstring = data.feed.updated['$t'];  
    var lastupdate = new Date(timestampstring);

    /* If timestamp was updated between this Friday and last Friday, then we continue */
    if (lastupdate >= lastFriday && lastupdate <= thisFriday) {
      var entry = data.feed.entry,
        length = entry.length,
        fragment = document.createDocumentFragment(),
        lengthFlag = 0,
        tr, td, role, name; //declare coz we know we're gonna use 'em.

      for(var i=0; i<length; i++) {
        role = entry[i]['gsx$role']['$t'];
        name = entry[i]['gsx$name']['$t'];

        //If name is blank, we move on to the next pair.
        if ($.trim(name)== '' || $.trim(role)== '') {
          continue; 
        }

        //Create the elements to append
        var td1 = document.createElement("td");
        td1.innerHTML = role;
        var td2 = document.createElement("td");
        td2.innerHTML = name;

        var tr = document.createElement("tr");
        tr.appendChild(td1);
        tr.appendChild(td2);

        fragment.appendChild(tr);

        lengthFlag++;
        }

        //If at least one pair was valid
        if(lengthFlag > 0) {
          document.getElementById("roster").appendChild(fragment);
          message = "This Friday the " + thisFriday.getDate() + suffix(thisFriday.getDate()) + " at ImprovMasters..."
        }
      }

  })
  .fail(function(jqXHR, textStatus, errorThrown) { 
    console.log('getJSON request failed! ' + textStatus);
  })
  .always(function() {
    //Display the message
    document.getElementById("fridayHeading").innerHTML = message;

    //Create transition for the curain down effect.
    var el = document.querySelector("div.firstState").className;
    document.querySelector("div.firstState").className = el.replace('firstState', 'secondState');
  });


});