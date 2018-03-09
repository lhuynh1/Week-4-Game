// Global variables - base attack points
var yourAttack = 0;
var baseAttack;
var potterBaseAttack = 12;
var grangerBaseAttack = 6;
var voldyBaseAttack = 10;
var malfoyBaseAttack = 8;

// Global variables - enemy counter attacks
var enemyAttack;
var potterCountrAttack = 10;
var grangerCountrAttack = 12;
var voldyCountrAttack = 16;
var malfoyCountrAttack = 18; 

// Global variables - health points stat
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

        // charChosen moved to 'your character' panel section if true
        // added class to modify border color when char is moved to new div
        $(this).removeClass("enemy-stats").addClass("your-stats").appendTo("#chosenChar");
    console.log(this.id);
    // this line grabs the .char-stats class and checks for the ID and sets it to the yourChar var (took me 4 hrs and some TA help to figure this out :) )
        yourChar = this.id;


        if(yourChar == 'potter') {
            baseAttack = potterBaseAttack;
            console.log(potterBaseAttack);
        }
        if(yourChar == 'granger') {
            baseAttack = grangerBaseAttack;
        }
        if(yourChar == 'voldemort') {
            baseAttack = voldyBaseAttack;
        }
        if(yourChar == 'malfoy') {
            baseAttack = malfoyBaseAttack;
        }

        yourChar = this.id;
        yourHealth = $(this).attr('value');

        charChosen = true;
    //    console.log(baseAttack);

        }
    });

// Shift chosen enemy to #chosenEnemy div
$(".char-stats").on("click", function() {
    if(this.id != yourChar && enemyChosen == false){
      
        
// move enemyChosen to chosenEnemy div
// added class to modify border color when char is moved to new div
$(this).appendTo("#chosenEnemy").removeClass("enemy-stats").addClass("chosenEnemy-stat");
        
        yourEnemy = this.id;
        enemyHealth = $(this).attr('value');
                      // $(this).val()
     

        enemyChosen = true;
        attackReady = true;
        return;

    }
});

// Battle functions
$('#attack').on("click", function(){
    console.log(enemyHealth);
    if(attackReady){
        // check health points status of your char & enemy
        if(yourHealth > 0 && enemyHealth > 0){
            console.log(baseAttack);
            console.log(yourAttack);
            // this means: yourAttack = yourAttack + baseAttack
            // increments attack by whatever the base starts at
            yourAttack += baseAttack;
            
           
            // Counter attacks
            if(yourEnemy == 'potter'){
                enemyAttack = potterCountrAttack;
            }
            else if(yourEnemy == 'granger'){
                enemyAttack = grangerCountrAttack;
            }
            else if(yourEnemy == 'voldemort'){
                enemyAttack = voldyCountrAttack;
            }
            else if(yourEnemy == 'malfoy'){
                enemyAttack = malfoyCountrAttack;
            }
            

            yourHealth = yourHealth - enemyAttack;
            enemyHealth = enemyHealth - yourAttack;
            

            // The enemy health points stats
            if(yourEnemy == 'potter'){
                $('#potter-hp').html(enemyHealth);
               
            }
            else if(yourEnemy == 'granger'){
                $('#granger-hp').html(enemyHealth);
                
            }
            else if(yourEnemy == 'voldemort'){
                $('#voldemort-hp').html(enemyHealth);
                
            }
            else if(yourEnemy == 'malfoy'){
                $('#malfoy-hp').html(enemyHealth);
                
            }


            // your character health point stats
            if(yourChar == 'potter'){
                $('#potter-hp').html(yourHealth);
            }
            else if(yourChar == 'granger'){
                $('#granger-hp').html(yourHealth);
            }
            else if(yourChar == 'voldemort'){
                $('#voldemort-hp').html(yourHealth);
            }
            else if(yourChar == 'malfoy'){
                $('#malfoy-hp').html(yourHealth);
            }
        }
    }
});




});

