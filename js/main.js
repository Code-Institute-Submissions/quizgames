// console.log("Hello hello World, Testing my .js file!!!");

/*-------------- Variables ---------*/
var username;

// Constants
const nameInput = document.querySelector("#username");

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


