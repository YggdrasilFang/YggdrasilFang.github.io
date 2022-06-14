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

// build the navbar using the number and names of sections
function BuildNav(){
	const sections = document.querySelectorAll('section');
	let li;
	let a;
	let sectionName;
	let sectionID;
	for(let i = 0;i<sections.length;i++){
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
		const href = e.target.getAttribute('href');
        if(href!=null){
			Scroll(e.target.getAttribute('id'));
        }
	});
	
}

//Figure out if we need to set the active section
function IsScrolling(){
	window.addEventListener('scroll', function(){
		let sectionToActivate = -1;
		const landingContainer = document.getElementsByClassName('landing__container');	
		for (let i = 0; i < landingContainer.length; i++){
			 const boundingBox = landingContainer[i].getBoundingClientRect();
			 const pos = boundingBox.top;
			 if(pos<window.innerHeight/2){
                 sectionToActivate = i+1
			 }
		}
        if(sectionToActivate!=-1){
		    SetActiveSection(sectionToActivate);
        }
	});
}

// Set the class of the corresponding section to active, and set the class name of the other sections to an empty string.
function SetActiveSection(sectionID){
    if(!sectionID)
        return;
	const numOfSections = document.querySelectorAll('section').length;
    let activeList;
    for(let i = 0;i<numOfSections;i++){
        if(i+1==sectionID){ 
          const sectionToActivate = document.getElementById("section"+(i+1).toString());
	      const linkToActivate = document.getElementById((i+1).toString());
	      sectionToActivate.className = "active";
	      linkToActivate.className = "active";
        }else{
          const sectionToActivate = document.getElementById("section"+(i+1).toString());
	      const linkToActivate = document.getElementById((i+1).toString());
	      sectionToActivate.className = "";
	      linkToActivate.className = "";
        }
    }
}

// Scroll to anchor ID using scrollTO event
function Scroll (sectionID){
    const section = document.getElementById("section"+sectionID);
	const pos = section.offsetTop;
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
  	const navbarList = document.getElementById("navbar__list");
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

