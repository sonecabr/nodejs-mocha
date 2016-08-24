var expect  = require("chai").expect;
var calc = require("../app/calc");

describe("Calc test", function(){
    describe("Sum test", function(){
      it("Result of sum 1+2 should be 3", function(){
        var sumResult = calc.sum(1, 2);
        expect(sumResult).to.equal(3);

      });
    });

    describe("Subtract test", function(){
      it("Subtract of numbers 2 - 1 should be 1", function(){
        var subResult = calc.subtract(2, 1);
        expect(subResult).to.equal(1);

      });
    });


});
