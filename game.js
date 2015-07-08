

function Game(){
  this.guess;
  this.answer;
  this.message;
  //This array stores the name of the weather condition and a clipart image for each.
  this.possibleWeather =
    [["rainy","http://images.clipartpanda.com/rain-clipart-RcGyE4Epi.png"],
    ["sunny","http://images.clipartpanda.com/weather-clip-art-weather-sunny-clip-art.jpg"],
    ["snowy","http://www.clipartpal.com/_thumbs/pd/weather/snow_from_glossy_cloud.png"],
    ["hail","http://image.shutterstock.com/display_pic_with_logo/94868/94868,1185947564,4/stock-photo-hail-cloud-4270675.jpg"],
    ["cloudy","http://cdn.1001freedownloads.com/vector/thumb/122296/weather-overcast.png"],
    ["foggy","http://cliparts.co/cliparts/dT4/oAo/dT4oAod7c.jpg"],
  ];

  //Randomly select a weather condition from the array.
  this.weatherIndex = Math.floor(Math.random() * this.possibleWeather.length);
  this.answer = this.possibleWeather[this.weatherIndex][0];
  console.log("answer: " + this.answer);

  this.guess = prompt("What is the weather going to be like tomorrow?").toLowerCase();

  //A not-so-elegant way of matching various user inputs that match one of the known options, but not exactly
  this.correct = function(){
    switch(this.guess) {
      case "rain":
        this.guess = "rainy";
        break;
      case "sun":
        this.guess = "sunny";
        break;
      case "snow":
        this.guess = "snowy";
        break;
  }
}

  console.log("user guess: " + this.guess);

  //Evaluate if the user's guess is the same or different from the computer's answer
  this.evaluate = function() {
    if(this.guess === this.answer) {
      this.message = "I agree! The weather will be " + this.guess + " tomorrow.";
    } else {
      this.message = "I disagree. I think the weather will be " + this.answer + " tomorrow.";
  }
}
  
  this.alertUser = function() {
    alert(this.message);
  }

  //Create the node for the image of the user's guess
 this.createUserImage = function(){
    this.userImage = document.createElement("IMG");
    this.userImageURL;
    for(i = 0; i < this.possibleWeather.length; i++) {
      if(this.possibleWeather[i][0] === this.guess) {
        this.userImageURL = this.possibleWeather[i][1];
        this.guess_text = document.getElementById("user_guess_header");
        this.guess_text.textContent = "You guessed " + this.guess + ".";
        break;
      } else {
        this.wrong_guess = document.getElementById("user_guess_header");
        this.wrong_guess.textContent = "You guessed " + this.guess + " but I don't have a picture of that.";
        this.userImageURL = "http://media.catmoji.com/post/v3af/awww-3-sad-face.jpg";
      }
    }
    this.userImage.setAttribute("src",this.userImageURL);
    document.getElementById("user_guess").appendChild(this.userImage);
  }

  //Create the node for the image of the computer's guess
  this.createComputerImage = function() {
    this.answerImage = document.createElement("IMG");
    this.computer_guess = document.getElementById("computer_guess");
        this.computer_guess.textContent = "The computer guessed " + this.answer + ".";
    this.answerURL = this.possibleWeather[this.weatherIndex][1];
    this.answerImage.setAttribute("src",this.answerURL);
    document.getElementById("answer").appendChild(this.answerImage);

  }
}

var newGame = new Game();
newGame.correct();
newGame.evaluate();
newGame.alertUser();
newGame.createUserImage();
newGame.createComputerImage();

