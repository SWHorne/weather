// var cityInput = document.querySelector('#city');
// var dateInput = document.querySelector('#date');
// var windInput = document.querySelector('#wind');
// var humidityInput = document.querySelector('#humidity');
// var tempInput = document.querySelector('#temp');
// var tempFInput = document.querySelector('#tempF');
// var uvInput = document.querySelector('#uvIndex');


let iconInput = document.querySelector('#icon');
let iconURL='http://openweathermap.org/img/wn/'+iconInput+'@2x.png'

let city=$('#city').val();
let APIKey = "256408798a5b7f1b0f580e3f05f06b2a";
let queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Boston&appid=" + APIKey;


      
// Here we are building the URL we need to query the database
// let queryURL = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+APIKey;
// $.ajax({
//     url:iconURL,
//     method: 'get'
// })
// .then(function(response){
//     console.log(iconURL);
//     // console.log(response.weather.icon)
//     $('.icon').text('icon' + response.weather.icon)
// }


// Here we run our AJAX call to the OpenWeatherMap API
   $.ajax({
      url: queryURL,
      method: 'GET'
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {
        console.log(response);
        console.log(response.coord.lat);
        console.log(response.coord.lon);

        // if (history.indexOf(city) === -1) {
        //     history.pushState(city)
        //     localStorage.setItem('history', JSON.stringify(history));
        //     let lat = reponse.coord.lat;
        //     let lon = response.coord.lon;
        //     let forcast = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&appid='+apiKey;
        //     console.log(forecast)

        //     $.ajax({
        //         url: forecast,
        //         method: "GET"
        //     }).then(function(response){
        //         console.log(response);
        //         for(let i = 1; i<6; i++) {
        //         }
        //     });
        // }
        // // Log the queryURL
        // console.log(queryURL);

        // // Log the resulting object
        
        // console.log(response.weather.icon)

        // $.ajax({
        //     url:iconURL,
        //     method: 'get'
        // })
        // .then(function(response){
        //     console.log(iconURL);
        //     // console.log(response.weather.icon)
        //     $('.icon').text('icon' + response.weather.icon)
        // }

        // Transfer content to HTML
        $('.city').html('<h1>' + response.name + '</h1>');
        $('.wind').text('Wind Speed: ' + response.wind.speed);
        $('.humidity').text('Humidity: ' + response.main.humidity);
        $('.icon').html('icon' + response.weather.icon);

        
        // Convert the temp to fahrenheit
        let tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $('.temp').text('Temperature (K):' + response.main.temp);
        $('.tempF').text('Temperature (F):' + tempF.toFixed(2));

        // function convert(date) {
        //     let unixTime = (response.dt*1000);
        //     let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        //     let year = date.getFullYear();
        //     let month = months_arr[date.getMonth()];
        //     let day = date.getDate();
        //     let convDate = month+''+day+''+year+''
            
        //     $('.date').html(response.dt*1000).innerHTML = convDate;
        //     console.log(convDate);
        // }

        // Log the data in the console as well
        console.log('Wind Speed: ' + response.wind.speed);
        console.log('Humidity: ' + response.main.humidity);
        console.log('Temperature (F): ' + tempF);
        console.log('icon ' + response.weather.icon)
        console.log('date ' + response.dt)
    //   );
      });