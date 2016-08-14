var cheerio = require('cheerio');
var request = require('request');

var  url = 'http://stackoverflow.com/questions?page=2&sort=frequent';

request(url, function(error, response, body){

  if(!error){
    var $ = cheerio.load(body);
    var q = $('a.question-hyperlink').text();
    console.log(q);
  }else{
    console.log('error : ' + error);
  }
});
