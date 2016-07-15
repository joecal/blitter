"use strict";

(function(){
  angular
  .module("blitters")
  .factory("BlitterFactory", [
    "$resource",
    BlitterFactoryFunction
  ]);

  function BlitterFactoryFunction($resource) {
    return $resource("http://localhost:3000/bleets/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
