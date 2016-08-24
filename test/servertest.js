var expect  = require("chai").expect;
var request = require("request");
var promise = require("promise");

describe("Calc API test", function(){
  describe("Sum test for code", function(){
    // readJSON("./testfile.json").then(function(res){
      // for(var item in res){
        // var url =  "http://localhost:3000/sum?numberA="+ item.numberA +"&numberB=" + item.numberB;
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
        });
      // }
    // });
  });
});

function readFile(filename){
  return new Promise(function(fulfill, reject){
    fs.readFile(filename, 'utf8', function(err, res){
      if(err) reject(err);
      else fulfill(res);
    });
  });
}

 function readJSON(filename){
  return new Promise(function(fulfill, reject){
    readFile(filename).done(function(res){
      try {
        fulfill(JSON.parse(res));
      } catch(ex){
        reject(ex);
      }
    }, reject);
  });
}
