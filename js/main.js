/*  '$' dollar signs mean i'm using jQuery as a shorthand for writing long drawn out javascript  */


/*These are my jQuery variables that i initialized and set equal to each div in my html.  The main, welcom, education, skills, experience, tech and contact divs.  I set up these as jQuery variables so i could just type and resuse the jQuery variable name when I want to show or hide something later in this code.  */
var $main = $('#main'); 
var $education = $('#education'); 
var $skills = $('#skills');
var $experience = $('#experience');
var $welcome = $('#welcome');
var $tech = $('#tech');
var $contact = $('#contact');

/*  Every div in the html has a CLASS of aCollapsed except the welcome message.  I used this so I could hide all the divs education skills, tech, experience, and contact and only show the welcome div when the page loads.  also this is a quick way for me to hide all the divs and then decide which particular div to show depending on what nav item is clicked  */
var $aCollapsed = $('.aCollapsed'); 

/*  This is my first instruction JS gets when the page is loaded. It says hide everything that has a class collapsed.  viola!  now only my welcome message displays when the page is loaded.  */
$aCollapsed.hide();
 
/*****************  These are functions that are executed when a nav item is checked.  ****************/

/*  These instructions basically say:  hey browser, listen up, if the hEducation nav item is clicked do this function.  The function says to hide ALL the divs.  $welcome.hide hides the welcome message.  SaCollapsed Hides all the divs with a class of aCollaped.  Then because order matters, $education.show,  shows whats in the education div on the browser When the user clicks to see my education: hide everything, then just show my education*/
 $('#hEducation').on('click', function(){
   $welcome.hide();
   $aCollapsed.hide();
   $education.show(); 
 }); 

/*  These instructions basically say:  hey browser, listen up, if the hSkills nav item is clicked do this function.  The function says to hide ALL the divs.  $welcome.hide hides the welcome message.  SaCollapsed Hides all the divs with a class of aCollaped.  Then because order matters, $skills.show,  shows whats in the skills div on the browser When the user clicks to see my skills: hide everything, then just show my skills*/
 $('#hSkills').on('click', function(){
   $welcome.hide();
   $aCollapsed.hide();
   $skills.show(); 
 }); 

/*  These instructions basically say:  hey browser, listen up, if the hExperience nav item is clicked do this function.  The function says to hide ALL the divs.  $welcome.hide hides the welcome message.  SaCollapsed Hides all the divs with a class of aCollaped.  Then because order matters, $experience.show,  shows whats in the skills div on the browser When the user clicks to see my experience: hide everything, then just show my experience*/
 $('#hExperience').on('click', function(){
   $welcome.hide();
   $aCollapsed.hide();
   $experience.show();
 }); 

/*And so on*/
 $('#hTech').on('click', function(){
   $welcome.hide();
   $aCollapsed.hide();
   $tech.show();
 }); 

/*And so on*/
 $('#hContact').on('click', function(){
   $welcome.hide();
   $aCollapsed.hide();
   $contact.show();
 });