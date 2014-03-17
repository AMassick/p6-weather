// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

  var date = new Date();
  var hours = date.getHours();
  var min = date.getMinutes();

  var year    = date.getFullYear();
  var month   = date.getMonth()+1; 
  var day     = date.getDay() +16;

  if(hours < 12)
  {
    $('.time').html(hours + ':' + min + ' AM');
  }
  else if(hours = 12)
  {
    $('.time').html(hours + ':' + min + ' PM');
  }
  else if(hours > 12)
  {
    var hour = hours - 12;
    $('.time').html(hour + ':' + min + ' PM');
  }

  $('.date').html(month + '/' + day +'/' + year);

	$.simpleWeather({
    
    location: '99203',
    
    success: function(weather) {
      
      // Get & Store Weather Data
      // html = '<h2><i class="icon-' + weather.code+'"></i> ' + weather.temp +'&deg;' + weather.units.temp+'</h2>';
      var temp, tomHi, tomLo, cityAndState; 

      temp = weather.temp + '<span> f</span>';
      tomHi = weather.tomorrow.high;
      tomLo = weather.tomorrow.low;
      cityAndState = weather.city + ' , ' + weather.region;

      console.log(cityAndState);

      // Display Weather
      $('.temp').html(temp);
      $('.tomHi').html(tomHi);
      $('.tomLo').html(tomLo);
      $('.cityAndState').html(cityAndState);

    },
    
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  
  });

	console.log('Page Loaded. Lets Do this!');

}); 


if (navigator.geolocation) {
    // Yes! Show button
    $('.getGeolocation').show(); 
  } else {
    // No. Hide button
    $('.getGeolocation').hide();
  }

// 2. Get Geolocation & return Simple Weather
$('.getGeolocation').on('click', function() {
  
    navigator.geolocation.getCurrentPosition(function(position) {
    //load weather using your lat/lng coordinates. See _loadWeather()_ below
    loadWeather(position.coords.latitude+','+position.coords.longitude); 
    // See latitute & longitude. Note, wait a few seconds
    console.log(position.coords.latitude+','+position.coords.longitude);
  });
  
});

// 3. Wrap SimpleWeather in a function called _loadWeather()
var loadWeather = function(location) {
    
    $.simpleWeather({
    location: location,
    
    // Get _weather_ object
    success: function(weather) {
      
      // Get & store temperature
      var temp = weather.temp;
      // Get & store city
      var city = weather.city;
      var tomHi = weather.tomorrow.high;
      var tomLo = weather.tomorrow.low;
      
      // Output to hooks in HTML
      $('.temp').html(temp);
      $('.tomHi').html(tomHi);
      $('.tomLo').html(tomLo);
      $('.cityAndState').html(cityAndState);
      
      // See console for _weather_ object
      console.log(weather);
    }
  
  });
    
}; // end of _loadWeather()_ function
