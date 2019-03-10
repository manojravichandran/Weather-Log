var req=require('request');
var argv = require('yargs').argv
var city=argv.c ;
var apikey='************************';
var  url=`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`
req(url,function(err,response,body){

if(err){
    console.log("bad");
}
    else{

 var weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);

    }


});
console.log(url);
