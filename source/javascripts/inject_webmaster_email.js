  ;(function() { 
    'use strict'
    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
    var x = "mail" + "to" + ":";
    var y = "an" + nextChar('s') + 'on' + (22+1) + "\u0040g" + "mai" +"l\u002Eco" + nextChar('l');

    var elAJEmail = document.getElementById('aj-email');
    if (elAJEmail !== null) {
        elAJEmail.href = x + y; 
        // elAJEmail.createTextNode = y;
    }
  })();