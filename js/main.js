// ---------------- Variables
var username;
var highscore;
var category;
var level; 

const nameInput = document.querySelector("#username");
const usernameDiv = document.querySelector("#username-container");
const startGame = document.querySelector('#start-game');
const categoryDropdown = document.querySelector('#category-selector');
const categoryOptions = document.querySelector('.category-option');
const levelDropdown = document.querySelector('#level-selector');
const levelOptions = document.querySelector('.level-option');

//-------------- Local storage 
function localStorageCheck(){
    var ls = 'check';
    try {
        localStorgae.setItem(ls, ls);
        localStorage.removeItem(ls);
        return true;
    } catch (e) {
        return false;
    }
}

//----- Alert if localStorage is unavailable 

if(localStorageCheck() === false){
    alert("localStorage is not available."+"\n"+"Please refresh your browser to continue to the quiz");
}

//---------------Username and localStorage
//---------------Check if Username is in localStorage
if (localStorage.getItem("username") === null) {
    nameInput.value = "";
} else {
    nameInput.value = localStorage.getItem("username");
    //startQuiz.classList.remove("disabled");
}

//-------- Update localStorage with username from the input form
nameInput.addEventListener("keyup", () => {
    if (nameInput.value === "") {
        localStorage.removeItem("username");
    //    startQuiz.classList.add("disabled");
    } else {
        localStorage.setItem("username", nameInput.value);
     //   startQuiz.classList.remove("disabled");
    }
});
 

//----------------------Category
// ---------Get Category from localStorage
if (localStorage.getItem("category") === null) {
    category = 'defaultSelect';
    localStorage.setItem("category", category);
} else {
    category = localStorage.getItem("category");
}

//Choose your category from the dropdown menu
categoryOptions.forEach(option => {
    if (option.value === category) {
        option.setAttribute("selected", "");
    } else {
        option.removeAttribute("selected")
    }
});

// Update Category value if changed
categoryDropdown.addEventListener('change', (e) => {
    localStorage.setItem("category", e.path[0].value);
});

//----------------------Level
// ---------Get level from localStorage
if (localStorage.getItem("level") === null) {
    level = 'easy';
    localStorage.setItem("level", level);
} else {
    level = localStorage.getItem("level");
}

//Level dropdown menu
levelOptions.forEach(option => {
    if (option.value === level) {
        option.setAttribute("selected", "");
    } else {
        option.removeAttribute("selected")
    }
});

// Update Level value if changed
levelDropdown.addEventListener('change', (e) => {
    localStorage.setItem("level", e.path[0].value);
});