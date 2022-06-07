/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
var isMobile = false;
document.addEventListener('DOMContentLoaded', BuildNav, false); 

document.addEventListener('DOMContentLoaded', IsScrolling, false); 
document.addEventListener('DOMContentLoaded', MobileMenu, false); 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function BuildNav(){
    console.log("Building nav");
	const sections = document.querySelectorAll('section');
	var li;
	var a;
	var sectionName;
	var sectionID;
	for(var i = 0;i<sections.length;i++){
		li = document.createElement('li');
		a = document.createElement('a'); 
		sectionName = sections[i].getAttribute('data-nav');
		sectionID = sections[i].getAttribute('id');
		a.setAttribute('href',"#"+sectionID);
		a.setAttribute('id',i+1);
		a.innerText = sectionName;
		li.appendChild(a);
         document.getElementById("navbar__list").appendChild(li);
	}
 document.getElementById("navbar__list").addEventListener("click", function(e){
		var href = e.target.getAttribute('href');
        if(href!=null){
			Scroll(e.target.getAttribute('id'));
        }
	});
	
}

//Figure out if we need to set the active section
function IsScrolling(){
	window.addEventListener('scroll', function(){
      var sectionToActivate = -1;
		const landingContainer = document.getElementsByClassName('landing__container');	
		for (var i = 0; i < landingContainer.length; i++){
              const boundingBox = landingContainer[i].getBoundingClientRect();
              const pos = boundingBox.top;
              if(pos<window.innerHeight/2){
			      SetActiveSection(i+1);
              }
		}
	});
}

// Set active section
function SetActiveSection(sectionID){
  if(!sectionID)
    return;
	var activeSection = document.getElementsByClassName("active"); 
	for(var i = 0;i<activeSection.length;i++){
		activeSection[i].className = activeSection[i].className.replace("active","");
	}
  var sectionToActivate = document.getElementById(sectionID.toString());
  console.log("."+sectionID.toString());
	sectionToActivate.className = "active";
}

// Scroll to anchor ID using scrollTO event
function Scroll (sectionID){
    const section = document.getElementById("section"+sectionID);
	const pos = section.offsetTop;
    console.log(sectionID)
	event.preventDefault();
	window.scrollTo({
		left: 0, 
		top: pos,
		behavior: 'smooth'
	});
    MobileMenu();
}

//Set up menu for mobile devices
function MobileMenu(){
  	var navbarList = document.getElementById("navbar__list");
 	if (navbarList.className === "navbar__menu"){
    	navbarList.className += " responsive";
  	}else{
    	navbarList.className = "navbar__menu";
  	}
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Set sections as active

