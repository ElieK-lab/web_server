const request=require('request');
const forecast=(latitude,longitude,callback)=>{
    const url="https://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&appid=a85f7f199ac59cb0a9b361b48e0b7b90&units=metric ";
    request({url,json:true},(error,{body}={})=>{//destructuring response
        if(error){
            callback('Unable to Connect Internet.!',undefined);
        }
        else if(body.message){
            callback('Unable to find location :'+body.message,undefined);
        }
        else {
            const data={
                weather:body.weather[0].main,
                weatherDescription:body.weather[0].description,
                temp:body.main.temp,
            }
            callback(undefined,'Weather : '+data.weather+','+data.weatherDescription+' , tempirature :'+data.temp +' degree')
        }
    })
}
module.exports=forecast;