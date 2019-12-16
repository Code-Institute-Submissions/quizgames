var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("data").innerHTML = this.responseText;

    }
};

xhr.open("GET", "https://opentdb.com/api.php?amount=10&category=21&difficulty=medium");

xhr.send();