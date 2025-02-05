let incity=document.querySelector(".city");
let search=document.querySelector(".search");
let toggleon=document.getElementById("on");
toggleon.addEventListener('click',function(){
    if(toggleon.classList.contains("fa-toggle-on")){
      toggleon.classList.remove("fa-toggle-on");
      toggleon.classList.add("fa-toggle-off");
     document.body.style.backgroundColor="black";
     toggleon.style.color="white";

}
else{
    toggleon.classList.remove("fa-toggle-off");
    toggleon.classList.add("fa-toggle-on");
    document.body.style.backgroundColor="white";
    toggleon.style.color="black";
}
});
const apikey="bfdad5fe209d3ba91d64ac4d1e8a40c9";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
search.addEventListener('click',()=>{
    console.log(incity.value);
    showweather(incity.value);
    incity.value="";
});
async function showweather(city){
    const res=await fetch(apiurl + city + `&appid=${apikey}`);
    var data=await res.json();
    console.log(data);
    city=city.charAt(0).toUpperCase()+city.slice(1);
    console.log(city);
    if(city!=data.name){
        alert("Enter a valid city");
    }else{
    document.querySelector(".name").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".hum").innerHTML=(data.main.humidity)+"%";
    document.querySelector(".wind").innerHTML=(data.wind.speed)+"km/h";
    if(data.weather[0].main=="Rain"){
        document.querySelector(".im").src="Downloads/rainicon.png";
    }
    else if(data.weather[0].main=="Clouds"){
        document.querySelector(".im").src="Downloads/cloudicon.png";
    }
    else if(data.weather[0].main=="Clear"){
        document.querySelector(".im").src="Downloads/clear.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        document.querySelector(".im").src="Downloads/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        document.querySelector(".im").src="Downloads/mist.png";
    }
}
}
