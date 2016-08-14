var cheerio = require('cheerio');
var  request = require('request');

var  url = 'http://stackoverlflow.com/questions?pagesize=50&sort=frequent';

request(url, function(error, response, body){

  if(!error){
    var $ = cheerio.load(response);
    var q = $('a.question-hyperlink').text();
    console.log(q);
  }else{
    console.log('error : ' + error);
  }
});
