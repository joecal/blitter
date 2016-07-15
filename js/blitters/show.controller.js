"use strict";

(function(){
  angular
  .module("blitters")
  .controller("BlitterShowController", [
    "BlitterFactory",
    "$stateParams",
    BlitterShowControllerFunction
  ]);

  function BlitterShowControllerFunction(BlitterFactory, $stateParams){
    this.blitter = BlitterFactory.get({id: $stateParams.id})
  }
}());
