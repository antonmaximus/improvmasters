// /**************************************************
// *** AJAX HELPER
// ***
// *** Make an AJAX call.  If success, use callback function.
// *** Otherwise, inform user of unavailable data.
// ***************************************************/

// window.fbAsyncInit = function() {
//   FB.init({
//     appId      : 525968434203855,
//     xfbml      : true,
//     version    : 'v2.0'
//   });
// };

// (function(d, s, id){
//    var js, fjs = d.getElementsByTagName(s)[0];
//    if (d.getElementById(id)) {return;}
//    js = d.createElement(s); js.id = id;
//    js.src = "//connect.facebook.net/en_US/sdk.js";
//    fjs.parentNode.insertBefore(js, fjs);
//  }(document, 'script', 'facebook-jssdk'));


// ;(function(global) {
//   'use strict';
//   //Dependencies and Imports
//   var SearchInput = global.SearchInput = global.SearchInput || {};

//   //Export
//   var AjaxHelper = global.AjaxHelper = global.AjaxHelper || {};
//   AjaxHelper.getJSONArray = getJSONArray;


//   function jsonError() {
//     SearchInput.clearSearchInputAndMore();
//     var li = document.createElement("li");
//     li.innerHTML = "\"Data Not Available.\"";
//     li.setAttribute('data-abbreviation', "error"); //for keyInput_controller
//     document.getElementById("result").appendChild(li);
//     document.getElementById("result").style.display = "block";
//   }

//   // AJAX
//   function getJSONArray(key, field, callback) {
//     //add time on URL path to prevent caching
//     var parameters = "?input=" + key + "&field=" + field + "&t=" + Math.random(),
//         path = "./php/serverSideParser.php",
//         xhr = new XMLHttpRequest(),
//         jsonObj;

//     xhr.onreadystatechange = function() {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) { //success
//           try {
//             jsonObj = JSON.parse(xhr.responseText);
//             callback(jsonObj);
//           } catch(err) {
//             jsonError();
//           }
//         } else {
//           jsonError();
//         }
//       }
//     };
//     xhr.open("GET", path + parameters, true);
//     xhr.send();
//   }

//   // var fbook = JSON.parse(https://graph.facebook.com/172130356249549/posts?access_token=CAAHeXZAGvDM8BAJYlBhMWxMwDbxZA19IJXf5Oex0Ldkos1abYLzuLgDyr2jv4ighdbnOaGh73DQAZCQAZCGD4MaXQP3d3rygyqEfASQRkDyyIiJBEZAwM92CDcw6BkMfGdi9d3uUGOAVuvlYZBUj5yrqg4HUf7ZChgQTZACTdBu4s1kfAs5QpZBB88tePZA3a8cnBZCGSQsUPYZBBDOZBuBcmvH4u);
// })(this);
