console.log("Hello hello World, Testing my .js file!!!");

/*-------------- Variables ---------*/
var username;
var level;
var category;


/*-------------- Function --------*/
// Check if Local Storage is available
function localStorageCheck() {
    var lsc = 'check';
    try {
        localStorage.setItem(lsc, lsc);
        localStorage.removeItem(lsc);
        return true;
    } catch(e) {
        alert ("Sorry Local Storage is not available at the moment! Please refresh your browser or try again later.");  
    }
}

if(localStorageCheck() === true) {
    // Available
}else{
    //Unavailable
}

// Setting three value to the local storage
function localStorageMulti() {
    localStorage.setItem('username', '');
    localStorage.setItem('category', '');
    localStorage.setItem('level', '');
    localStorage.removeItem('');
}

/*--------------W3 School code ------*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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