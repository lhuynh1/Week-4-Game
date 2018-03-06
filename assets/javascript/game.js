// Global variables - base attack points
var yourAttack = 0;
var baseAttack;
var potterBaseAttack = 12;
var grangerBaseAttack = 6;
var voldBaseAttack = 10;
var malfoyBaseAttack = 8;

// Global variables - enemy counter attacks
var enemyAttack;
var potterCountrAttack = 10;
var grangerCountrAttack = 12;
var voldCountrAttack = 16;
var malfoyCountrAttack = 18; 

// Global variables - health stat
var yourHealth;
var enemyHealth; 

// Global variables - game
var charChosen = false;
var yourChar;
var enemyChosen = false;
var yourEnemy;
var nameOfEnemy;
var attackReady = false;
var deathCount = 0;


// Functions for the game
$(document).ready(function(){

// Shift remaining characters to #enemySection once player selects their char
$('.char-stats').on("click", function() {
    if(charChosen == false){

        // move all characters to enemy div
        $('#potter').appendTo('#enemySection').addClass("enemy-stats");
        $('#granger').appendTo('#enemySection').addClass("enemy-stats");
        $('#voldemort').appendTo('#enemySection').addClass("enemy-stats");
        $('#malfoy').appendTo('#enemySection').addClass("enemy-stats");

        // charChosen moved to 'your character' panel section
        $(this).removeClass("enemy-stats").addClass("your-stats").appendTo("#chosenChar");
    


        if(yourChar == 'potter') {
            baseAttack = potterBaseAttack;
        }
        if(yourChar == 'granger') {
            baseAttack = grangerBaseAttack;
        }
        if(yourChar == 'voldemort') {
            baseAttack = voldBaseAttack;
        }
        if(yourChar == 'malfoy') {
            baseAttack = malfoyBaseAttack;
        }

        yourChar = this.id;
        yourHealth = $(this).attr('value');

        charChosen = true;

        }
    });

// Shift chosen enemy to #chosenEnemy div
$(".char-stats").on("click", function() {
    if(this.id != yourChar && enemyChosen == false){
      
        
// move enemyChosen to chosenEnemy div

$(this).appendTo("#chosenEnemy").removeClass("enemy-stats").addClass("chosenEnemy-stat");

        yourEnemy = this.id;
        enemyHealth = $(this).attr('value');
    }
});






});

