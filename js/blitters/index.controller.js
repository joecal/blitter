"use strict";

(function(){
  angular
  .module("blitters")
  .controller("BlitterIndexController", [
    "BlitterFactory",
    BlitterIndexControllerFunction
  ]);

  function BlitterIndexControllerFunction(BlitterFactory){
    this.blitters = BlitterFactory.query();
  };
}());
