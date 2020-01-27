console.log("Hello hello World, Testing my .js file!!!");

/*-------------- Variables ---------*/
var username;
// var level;
// var category;


// Constants
const nameInput = document.querySelector("#username");
const startQuiz = document.querySelector("#start-quiz");

/*-------------- Function --------*/
// Check if Local Storage is available
function localStorageTest() {
    var lst = 'test';
    try {
        localStorage.setItem(lst, lst);
        localStorage.removeItem(lst);
        return true;
    } catch(e) {
        return false; 
    }
}

if(localStorageTest() === true) {
    // Available
}else{
    Alert ("Local Storage is unavailable, please refresh your browser or try again later");
}

/*---------------------Username------*/
// check if username is in localStorage

if(localStorage.getItem("username") === null) {
    nameInput.value = "";
} else {
    nameInput.value = localStorage.getItem("username");
}

//Update localStorage with username from input

nameInput.addEventListener("keyup", () => {
    if (nameInput.value === "") {
        localStorage.removeItem("username");
    } else {
        localStorage.setItem("username", nameInput.value);
    }
});


/*--------------W3 School code ------*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
*/
/*
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
*/