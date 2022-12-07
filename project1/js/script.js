console.log("connected")
$(function(){
//////////////////
// VARIABLES
//////////////////
const URL = "https://api.sportmonks.com/v3/football/players/countries/"
const api_token = "?api_token=S4LIHhpkF0fLuxiJWoDhKW2kBESvCEMxwsADBC3rIUMseGsQ39AH3BCidtsu"
let playerArray;
let ranPlayer;
let ranArr;
const countryID = ["2", "5", "11", "17", "20", "32", "38", "44", "47",
 "62", "98", "107", "74505", "459", "200", "1739", "479", "488", "3483", "515", 
"556", "1004", "1424", "266", "35376", "458", "296", "593", "320", "1439", "468", "158", "712"];
let prevGuesses = [];
let prevGuessesEl = document.getElementById("prevGuesses");
let guessLimit = 10;
let guessesLeftEl = document.getElementById("#guessesLeftDisplay");


//////////////////
// ELEMENTS REF'D / CACHED ELEMENTS
//////////////////
const $form = $("form");
const $input = $("input[type='text']");
const $guessButn = $("#guess");
const $position = $("position");
const $playerStats = $("#player-stats");
const $firstname = $("firstname");
const $lastname = $("lastname");

//////////////////
// EVENT LISTENERS
//////////////////
$guessButn.on("click", guessClick);
// $playerStats.on("click", handleClick)



//////////////////
// FUNCTIONS
//////////////////

getPlayerData();

    function getPlayerData(){
        
        const ranCountry = countryID [Math.floor(Math.random() * countryID.length)];
        console.log(ranCountry);

        let settings = {
            "url": `https://soccer.sportmonks.com/api/v2.0/countries/${ranCountry}/players?api_token=S4LIHhpkF0fLuxiJWoDhKW2kBESvCEMxwsADBC3rIUMseGsQ39AH3BCidtsu&include=position`,
            "method": "GET",
            "timeout": 0,
          };

      $.ajax(settings).then(function (response) {
        playerArray = response.data;
        render();  
      }, function(error){
        console.log(error);
      });
      
        
    }
    

    //  function handleClick(){
    //     console.log("click");
    //  }

    function guessClick(event){
        event.preventDefault();
        userInput= $("#text").val();
        prevGuesses.push(userInput);
    

        while (guessLimit > 0){
            prevGuessEl = prevGuesses.join(', ');
            console.log(prevGuesses);
            $("#guessesLeft").html(guessLimit);
        
            guessLimit -=1;
          
        }
        if (userInput != ranArr[0].fullname){
            console.log("Try again")
        } else {
            console.log("Correct")
        }
        //console.log(ranArr[0].fullname)

    }

    
   

    
function render(){
    
    let ranPlayer = playerArray [Math.floor(Math.random() * playerArray.length)];
    console.log(ranPlayer)
    ranArr = [ranPlayer]

    const playerData = ranArr.map(function(player, index){
        return `
        <main data-index="${index}">
        <img id ="playerPic" src = "${player.image_path}"/>
        </main>
        `;
    });
    $playerStats.html(playerData)
    console.log(ranPlayer.fullname)


    
}
{/* <h3>${player.position}</h3> 
    <h3>${player.firstname}</h3>
    <h3>${player.lastname}</h3>
    <h3>${player.birthcountry}</h3>
*/}




});