var expect  = require("chai").expect;
var request = require("request");

describe("Calc API test", function(){
  describe("Sum test for code", function(){
    var url =  "http://localhost:3000/sum?numberA=1&numberB=2";
    it("status cod should be 200", function(){
      request(url, function(error, response, body){
        expect(response.code).to.equal(200);
        done();
      });
    });
    it("response body should be 3", function(){
      request(url, function(error, response, body){
        expect(response.body).to.equal(JSON.stringify('3'));
        done();
      });
    })
  });

});
