const WEA_LS = 'weather'; //KEY
const weatherTxt = 
document.querySelector('.weather');
const API_KEY 
= '0347813f01460f3c4aebfbf0cdcba07f';
////////////////////////////
let getWeather = function(lat,lng){
//Promise
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
.then(
    function(response){
        return response.json();
    }
).then(
   function(json){
       console.log(json);
const currentTemp = json.main.temp,
      currentLocal = json.name;
weatherTxt.innerText = 
`${currentLocal}, ${currentTemp}`;  

   } 
)//fetch가 끝난 후 실행


}//날씨정보를 가져오기 api사용해서

//날씨 로컬스토리지에 저장
let saveWeather = function(weatherObj){
localStorage
.setItem(WEA_LS, JSON.stringify(weatherObj)); 
}//func.saveWeather






let success = function(position){
    const latitude = position.coords.latitude,
          longitude = position.coords.longitude;

 const weatherObj = {
    /*
property Name(다른변수로 대체 x) : 값
    latitude : latitude,
    longitude : longitude
    */
        latitude,
        longitude
    }

saveWeather(weatherObj);
    

}//func.success

let fail = function(){
    //실패했을때
   weatherTxt.innerText ='fail load'
}


let askForWeather =function(){

navigator.geolocation.getCurrentPosition(success,fail);

}//func.askForWeather

let loadWeather = function(){
const load_weather = localStorage.getItem(WEA_LS);
if(load_weather === null){
    
    //로컬스토리지 내부의 날씨정보가
    //비어있을 경우
    //현재날씨가져오기
    askForWeather();
    console.log('null');

}else{
   //로컬스토리지의 날씨정보가 있을 경우

const parseWeather  = JSON.parse(load_weather);

getWeather(parseWeather.latitude,parseWeather.longitude);
}


}//func.loadWeather

loadWeather();