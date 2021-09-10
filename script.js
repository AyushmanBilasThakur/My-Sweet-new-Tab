const hourContainer = document.getElementById("hour")
const minuteContainer = document.getElementById("minute")
const secondContainer = document.getElementById("second")
const ampmContainer = document.getElementById("ampm");
const dateContainer = document.getElementById("date");

const usernameContainer = document.getElementById("username");
const themeToggler = document.getElementById("theme-toggler");
const body = document.querySelector("body");

let theme = localStorage.getItem("theme") || "light"
themeToggler.innerHTML = theme == "light" ? "darken" : "lighten"
body.classList.add(theme)


themeToggler.addEventListener("click", () => {
    theme = theme == "light" ? "dark" : "light"
    themeToggler.innerHTML = theme == "light" ? "darken" : "lighten"
    localStorage.setItem("theme", theme);
    body.classList.toggle("light")
    body.classList.toggle("dark")
})

usernameContainer.addEventListener("keypress", (e) => {
    if(e.key == "Enter"){
        e.preventDefault();
        return;
    }
    let username = usernameContainer.innerText + e.key;
    window.localStorage.setItem("username", username)
})

usernameContainer.innerText = window.localStorage.getItem("username") || "user"

function getExtension(day){
    let digit = day % 10;
    switch (digit) {
        case 1:
            return "st"
        case 2:
            return "nd"
        case 3:
            return "rd"
        default:
            return "th"
    }
}

function getRealDay(day){
    switch (day) {
        case 0:
            return "Sunday"
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
    }
}

function getRealMonth(month){
    switch (month + 1) {
        case 1:
            return "January"
        case 2:
            return "February"
        case 3:
            return "March"
        case 4:
            return "April"
        case 5:
            return "May"
        case 6:
            return "June"
        case 7:
            return "July"
        case 8:
            return "August"
        case 9:
            return "September"
        case 10:
            return "October"
        case 11:
            return "November"
        case 12:
            return "December"
    }
}

let driver = () => {
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    let ampm = "am"

    if(hour > 12){
        hour = hour - 12;
        ampm = "pm";
    }

    if(hour < 10){
        hour = "0" + hour
    }
    if(minute < 10){
        minute = "0" + minute
    }
    if(second < 10){
        second = "0" + second
    }

    hourContainer.innerText = hour
    minuteContainer.innerText = minute
    secondContainer.innerText = second
    ampmContainer.innerText = ampm



    dateContainer.innerText = time.getDate()+getExtension(time.getDate())+" "+getRealMonth(time.getMonth())+" "+time.getFullYear()+", "+getRealDay(time.getDay());

}


setInterval(driver,1000);
driver();