// Global variables - base attack points
var yourAttack = 0;
var baseAttack;
var potterBaseAttack = 12;
var grangerBaseAttack = 8;
var voldyBaseAttack = 10;
var malfoyBaseAttack = 9;

// Global variables - enemy counter attacks
var enemyAttack;
var potterCountrAttack = 10;
var grangerCountrAttack = 14;
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
    
        // console.log(this);
        // this line grabs the .char-stats class and checks for the ID and sets it to the yourChar var
        yourChar = this.id;

        yourHealth = $(this).attr('value');


        if(yourChar == 'potter') {
            baseAttack = potterBaseAttack;
            // console.log(potterBaseAttack);
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
    
    if(attackReady){
        // check health points status of your char & enemy
        if(yourHealth > 0 && enemyHealth > 0){
            
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
                    nameOfEnemy = "POTTER";
            }
            else if(yourEnemy == 'granger'){
                $('#granger-hp').html(enemyHealth);
                    nameOfEnemy = "GRANGER";
            }
            else if(yourEnemy == 'voldemort'){
                $('#voldemort-hp').html(enemyHealth);
                    nameOfEnemy = "VOLDEMORT";
            }
            else if(yourEnemy == 'malfoy'){
                $('#malfoy-hp').html(enemyHealth);
                    nameOfEnemy = "MALFOY";
            }


            // your character health point stats
            if(yourChar === 'potter'){
                $('#potter-hp').html(yourHealth);
            }
            else if(yourChar === 'granger'){
                $('#granger-hp').html(yourHealth);
            }
            else if(yourChar === 'voldemort'){
                $('#voldemort-hp').html(yourHealth);
            }
            else if(yourChar === 'malfoy'){
                $('#malfoy-hp').html(yourHealth);
               
            }

            // fight-captions
            $('#fight-caption').text('You attacked ' + nameOfEnemy + ' for ' + yourAttack + ' health points.');
            $('#fight-caption').append('<p>' + nameOfEnemy + ' has counter attacked you for ' + enemyAttack + ' health points.</p>' );
        }

        // Loser logic 
        if(yourHealth <= 0){
            // this removes the previous fight captions in order to display the loser msg
            // $('#fight-caption').remove();
            console.log(yourHealth);

            $('#fight-caption').text('You have been defeated! AVADA-KEDAVRA');
            // appending a restart button
            $("#fight-caption").append("<button id='restart'>Lets try that again</button>");

            // refresh/reload page for player to play again
            $('#restart').on("click", function(){
                window.location.reload(true);
            });
        }


// wrapping my choose another character message in a function to call later
    var displayMesssage = function(){
            // TODO
            $('#fight-caption').append('<p>You have defeated ' + nameOfEnemy + ',' + ' please choose another enemy</p>');
        }
        // removing enemy after enemyhealth is equal to or less than 0
        if(enemyHealth <= 0){

            deathCount += 1;

            $('#fight-caption').remove();

            if(yourEnemy == 'potter'){
                $('#potter').remove();
                nameOfEnemy = "POTTER";
                displayMesssage();
                
            }
            else if(yourEnemy == 'granger'){
                $('#granger').remove();
                displayMesssage();
            }
            else if(yourEnemy == 'voldemort'){
                $('#voldemort').remove();
                displayMesssage();
            }
            else if(yourEnemy == 'malfoy'){
                $('#malfoy').remove();
                displayMesssage();
            }

            // this condition is not working.. after defeating the enemy, enemy disapears but the appended comment does not come up...
            if(deathCount < 3){
                console.log(deathCount);
                // $('#fight-caption').append('<p>You have defeated ' + nameOfEnemy + ',' + ' please choose another enemy</p>');
                
                attackReady = false;
                enemyChosen = false;
                return;
                
            }
            else{
                // $('#fight-caption').remove();

                $('#fight-caption').text('Winner!! You have defeated everyone! Go grab a butter beer, you deserve it.');
                $('#fight-caption').append("<button id='replay'>Play Again?</button>");

                // refresh/reload page for player to play again
                $('#restart').on("click", function(){
                window.location.reload(true);
                });

                attackReady = false;
                return;
            }

        
            // TO DO: write some else if statements for the case when no character is selected and promp user to select an enemy
        }
    }


});




});




