"use strict";

(function(){
  angular
  .module("blitter", [
    "ui.router",
    "blitters"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("blitterIndex", {
        url: "/blitters",
        templateUrl: "js/blitters/index.html",
        controller: "BlitterIndexController",
        controllerAs: "BlitterIndexViewModel"
      })
      .state("blitterShow", {
        url: "/blitters/:id",
        templateUrl: "js/blitters/show.html",
        controller: "BlitterShowController",
        controllerAs: "BlitterShowViewModel"
      });
    }
})();
