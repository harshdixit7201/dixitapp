const submitBtn = document.getElementById("submitBtn");
const city_name = document.getElementById("city_name");
const cityName = document.getElementById("cityName");
const temp_status = document.getElementById("temp_status");
const temp_real_value= document.getElementById("temp_real_value");
const datahide = document.querySelector(".middle_layer");
const day = document.getElementById("day");
const today_data = document.getElementById("today_data");

// CURRENT TEMPRETURE AND WEATHER SCRIPT
const getInfo= async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===""){
        city_name.innerText=`Please Enter City Name Before Search`;
        datahide.classList.add('data_hide')
    }else{
        try{
            let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=43c559503a9086c14a830d4f27beaf4b`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_value.innerText = `${arrData[0].main.temp}`;

            const tempMood = arrData[0].weather[0].main;
            //condition to check sunny or cloudy
            if(tempMood == "Clear"){
                temp_status.innerHTML= "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }else if(tempMood== "Clouds"){
                temp_status.innerHTML= "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }else if(tempMood== "Rain"){
                temp_status.innerHTML= "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }else {
                temp_status.innerHTML= "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }

            
        datahide.classList.remove('data_hide')

        }catch{
            city_name.innerText=`Please Enter City Name Correct`;
            datahide.classList.add('data_hide')
        }

    }

}
submitBtn.addEventListener('click', getInfo);


//CURRENT DATE AND DAY SCRIPT

const getCurrentDay = ()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currentTime = new Date();
    let day = weekday[currentTime.getDay()];
    return day;
};
const getCurrentDate=()=>{
    var now = new Date();
    var day = now.getDate() ;
    const months = ["JAN", "FEB", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUG", "SEPT", "OCT", "NOV", "DEC"];
    let month = months[now.getMonth()];

    var date=  month + "  " +day ;
    return date;
}

day.innerHTML = getCurrentDay() ;
today_data.innerHTML= getCurrentDate();