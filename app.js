const cheerio = require ('cheerio');
const request =  require ('request');
//const fs = require('fs');
const write = require('fs-writefile-promise');

const url = 'http://stackoverflow.com/questions?page=3&sort=frequent&pagesize=50';


request(url, (error, response, body) => {
  const faq = [];

    if(!error){

      const $ = cheerio.load(body);
      const questions = $('a.question-hyperlink');

      //console.log(typeof(questions));
      for (var q in questions){
        for (var i=0; i<50 ; i++){
          faq.push("q"+i+":"+questions[i].children[0].data);
        }
      }
      console.log(faq);

      write('faq.txt',faq)
      .then(function(filename){
        console.log(filename);
      })
      .catch(function(err){
        console.log(err);
      })
    }else{
      console.log('error del Request : ' + error);
    }
})
