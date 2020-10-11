const cityName = $("search-city")
const fiveDay = $(".fiveday")
const apiKey = "6977d26767a6f3969d432d2ec5adac7e"

function callWeather() {
    let city = cityName.val();

        if (city === "") {
            alert ("Please enter city")
        }
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" +apiKey,
        method: "GET"})
    .then(function (response){
        console.log(response)
    })
    
    let latitude = response.coord.latitude
    let longitude = response.coord.longitude
    let cityID = response.id
    let temperature = response.main.temp
    let humidity = response.main.humidity
    let wind = response.wind.speed

    $("#temp").text("Temperature: " + temperature)
    $("#humidity").text("Humidity: ") + humidity
    $("#wind").text("Wind Speed: ") + wind

    $.ajax({
        url:"https://api.openweathermap.org/data/2.5/uvi?lat="+latitude +"&lon="+longitude+ apiKey,
        method:"GET"})
        .then(function(response){
            console.log(response)
            let uv = response.value
            $("#uv").text("UV Index: " + uv)
        })
        $.ajax({
            url:"https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&units=imperial" + apiKey,
            method:"GET"})
            .then(function(response){
                console.log(response)
                let daysArray = response.Array
            for (i=0; i<daysArray.length; i+8) {
                let p = $("<p>")
                let temperature = daysArray[i].main.temperature
                let humidity = daysArray[i].main.humidity
            }
            })
        
$("search-btn").on("click", callWeather)



}