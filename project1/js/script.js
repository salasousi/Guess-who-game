console.log("connected")
$(function(){
//////////////////
// VARIABLES
//////////////////
const URL = "https://api.sportmonks.com/v3/football/players/countries/"
const api_token = "?api_token=S4LIHhpkF0fLuxiJWoDhKW2kBESvCEMxwsADBC3rIUMseGsQ39AH3BCidtsu"
let playerArray;
let ranArr;
const countryID = ["2", "5", "11", "17", "20", "32", "38", "44", "47",
 "62", "98", "107", "74505", "459", "200", "1739", "479", "488", "3483", "515", 
"556", "1004", "1424", "266", "35376", "458", "296", "593", "320", "1439", "468", "158", "712"];
let prevGuesses = [];
let prevGuessesEl = document.getElementById("prevGuesses");
const guessLimit = 10;
const guessesLeftEl = document.getElementById("#guessesLeftDisplay");


//////////////////
// ELEMENTS REF'D / CACHED ELEMENTS
//////////////////
const $form = $("form");
const $input = $("input[type='text']");
const $position = $("position");
const $playerStats = $("#player-stats");
const $firstname = $("firstname")
const $lastname = $("lastname")

//////////////////
// EVENT LISTENERS
//////////////////
$form.on("click", "submit", guessClick);
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
    //     const $target = $(ranArr);
    //     const answer = $target;
    //     const $idk = $target.closest("main");
    //     const playerIndex = $idk.attr("data-index");
    //     const playerRef = ranArr[playerIndex];

        event.preventDefault();
        userInput= $("#text").val();
        prevGuesses.push(userInput);

        for (let i = guessLimit; i > 0; --i){
            prevGuessEl = prevGuesses.join(', ');
            console.log(prevGuesses);
            $("#guessesLeft").html(i);
        

            if (userInput != checkName){
                console.log("Try again")
            } else{
                console.log("Correct")
            }
        }

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
    console.log(ranArr.fullname)
    
    
}
{/* <h3>${player.position}</h3> 
    <h3>${player.firstname}</h3>
    <h3>${player.lastname}</h3>
    <h3>${player.birthcountry}</h3>
*/}




});