const request = require("request");

const gecode=(adddrees,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(adddrees)+".json?access_token=pk.eyJ1IjoiZWxpZWthcnJhIiwiYSI6ImNrcGVlejU5MTFteGUycGxhd2UxamwwY2IifQ.Z8ZQkayZR4McSei2J2zhTw&limit=1"
    request({url,json:true},(error,{body}={})=>{//destructuring response
        if(error){
            callback('Unable to connect to location servecis!',undefined);
        }
        else if(body.features.length===0){
            callback('Unable to find location try another search..',undefined);
        }
        else{
            callback(undefined, {
                latitude:body.features[0].center[1],
                longitude:body.features[0].center[0],
                location:body.features[0].place_name 
            })
        }
    })
}
module.exports=gecode; 