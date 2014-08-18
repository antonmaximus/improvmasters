  ;(function() { 
    'use strict'
    function nextChar(c) {
        return String.fromCharCode(c.charCodeAt(0) + 1);
    }
    var x = "mail" + "to" + ":";
    var y = "improv" + nextChar('l') + 'ast' + nextChar('d') + 'rs' + "\u0040g" + "mai" +"l\u002Eco" + nextChar('l');

    var el = document.getElementById('targetEmail');
    if (el !== null) {
        el.href = x + y; 
        el.innerHTML = y;
    }


    var elForm = document.getElementById('forBrace');
    if ( elForm !== null) {
        var brace = 'http://forms.brace.io/';
        //Temporary override
        y = 'a' + nextChar('i') + (9008+1) + "\u0040g" + "mai" +"l\u002Eco" + nextChar('l');
        console.log(y);
        elForm.setAttribute('action', brace + y );
    }
  })();