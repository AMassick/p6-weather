// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

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
