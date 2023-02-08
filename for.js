// As you complete each challenge, RUN THE CODE to ensure it works. You can do this by
// running `node <filepath>`. If you are in this directory, you'd run `node for.js`.
  
// Challenge 1
// Use a for statement to log to the console all even numbers between 25 and 75.

for ( n=25 ; n<=75 ; n++ ) {
  if (n % 2 ===0) {
    console.log(n); 
}
}

// Challenge 2
// Use a for statement to log to the console a complete sentence stating the weather using the Array below:
var weather_options = ["sunny", "snowy", "freezing", "partly cloudy", "drizzly"];
for (var i = 0; i < weather_options.length; i++); {
  currentWeather = weather_options[Math.floor(Math.random() * weather_options.length)];
if (currentWeather === "sunny") {
 console.log("It's your wacky weather forecast here. Better pull out your shades because we're calling for a lovely sunny day!");
} else if (currentWeather === "snowy") {
 console.log("It's your wacky weather forecast here. Better take out your snowshoes and prepare for snowy conditions!");
} else if (currentWeather === "freezing") {
 console.log("It's your wacky weather forecast here. Better bundle up because the weather calls for freezing temperatures!");
} else if (currentWeather === "partly cloudy") {
 console.log("It's your wacky weather forecast here. Calling for a forecast of slightly gloomy being that it will be partly cloudy!");
} else if (currentWeather === "drizzly") {
  console.log("It's your wacky weather forecast here. Pull out your umbrella because it's going to be drizzly!");
}
}
// Challenge 3
// Use a for statement to log to the console only the words that are exactly 3 characters in length

var words = ["car", "bike", "bus", "van", "scooter", "truck", "rv"]
for (var i=0; i<words.length; i++) {
if ((words[i].length % 3) === 0) [
  console.log(words[i])
]
  
}

// 📹 Record yourself live-coding and talking through any ONE of the challenges. 
  // The recording doesn't have to be the first time you are solving the problem. 
  // Use technical vocabulary and explain each part to demonstrate your understanding! 
  // Share the link to your video in your small group channel.

  
