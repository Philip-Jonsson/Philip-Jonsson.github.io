$(document).ready(function(){

  $("a").on('click', function(event) {

    var top = $( $.attr(this, 'href') ).offset().top;

      $('html, body').animate({
        scrollTop: top
      }, 1000);

      return false;
    });
});




var config = {
  apiKey: "AIzaSyCrPN70IBYLyhsSgIeOPlVOlJT_Mx36smo",
  authDomain: "my-awesome-webbsite.firebaseapp.com",
  databaseURL: "https://my-awesome-webbsite.firebaseio.com",
  projectId: "my-awesome-webbsite",
  storageBucket: "my-awesome-webbsite.appspot.com",
  messagingSenderId: "859066731752"
};
firebase.initializeApp(config);

var app = angular.module("app", ["firebase"]);

app.factory("kommentarer", function($firebaseArray) {
  var ref = firebase.database().ref().child("kommentarer");
  return $firebaseArray(ref);
}
);

app.controller("KommentarCtrl", function($scope, kommentarer) {
      // Här skriver vi kod för controllern
      $scope.kommentarer = kommentarer;

      $scope.kommentar = {
        text: "",
        skribent: ""
      }
        $scope.addComment = function() {
          $scope.kommentarer.$add($scope.kommentar);

          $scope.kommentar = {
            text: "",
            skribent: ""


          }

        }
      });

// Håll koll på scroll
var position = $(window).scrollTop(); 
console.log(position);

$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll > 100) {
    console.log("meny-upp");
    //menuheight.style.cssText ="margin:0 !important;";           <---- Fått rätt på javascriptkoden, men inte på hur man använder css i javascript
    /*$(".nav").toggleClass("menuheight");*/
  } else {
    console.log("meny-ner");
  }
  console.log(position);
  position = scroll;
})

/*$(window).scroll(function() {
  if(position < 100) {
    $(".nav").toggleClass("menuheight");
  }
  position = scroll;
})*/