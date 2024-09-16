//countdown
function startCountdown(targetDate, timerId) {
    const timerEl = document.getElementById(timerId);
    const daysEl = timerEl.querySelector(".days");
    const hoursEl = timerEl.querySelector(".hours");
    const minsEl = timerEl.querySelector(".mins");
    const secondsEl = timerEl.querySelector(".seconds");

    function countdown() {
        const currentDate = new Date();
        const totalSeconds = (targetDate - currentDate) / 1000;

        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secondsEl.innerHTML = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    countdown(); // Initial call
    setInterval(countdown, 1000); // Update every second
}
// Navbar
function menu(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function closebtn(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
// Example usage:
const targetDate1 = new Date();
targetDate1.setDate(targetDate1.getDate() + 5);
startCountdown(targetDate1, 'timer1');

const targetDate2 = new Date();
targetDate2.setDate(targetDate2.getDate() + 10);
startCountdown(targetDate2, 'timer2');


// cards button

let scrollcontainer = document.querySelector(".cards-wrap");
let backBtn = document.getElementById("left") 
let nextBtn = document.getElementById("right")

backBtn.addEventListener("click",()=>{
    scrollcontainer.scrollLeft -= 900;
    scrollcontainer.style.scrollBehavior = "smooth"
})
nextBtn.addEventListener("click",()=>{
    scrollcontainer.scrollLeft += 900;
    scrollcontainer.style.scrollBehavior = "smooth"
})
document.addEventListener("DOMContentLoaded", () => {
    let scrollContainer2 = document.querySelector(".cat-cards-wrap");
    let backBtn2 = document.querySelector(".cat-left");
    let nextBtn2 = document.querySelector(".cat-right");

    if (backBtn2 && nextBtn2 && scrollContainer2) { // Check if elements are found
        backBtn2.addEventListener("click", () => {
            scrollContainer2.scrollLeft -= 200; // Adjust scroll distance as needed
        });

        nextBtn2.addEventListener("click", () => {
            scrollContainer2.scrollLeft += 200; // Adjust scroll distance as needed
        });
    } else {
        console.log("One or more elements not found.");
    }
});

const hoverTarget = document.querySelector('.card-1-img');
const changeOpacity = document.querySelector('.content');

// Add 'active' class on hover of hover-target
hoverTarget.addEventListener('mouseover', function() {
    changeOpacity.classList.add('active');
});

// Keep 'active' class when mouse is over change-opacity
changeOpacity.addEventListener('mouseover', function() {
    changeOpacity.classList.add('active');
});

// Remove 'active' class when mouse leaves both hover-target and change-opacity
hoverTarget.addEventListener('mouseout', function() {
    setTimeout(() => {
        if (!changeOpacity.matches(':hover')) {
            changeOpacity.classList.remove('active');
        }
    }, 10);
});

changeOpacity.addEventListener('mouseout', function() {
    setTimeout(() => {
        if (!hoverTarget.matches(':hover')) {
            changeOpacity.classList.remove('active');
        }
    }, 10);
});
document.querySelector("#btt").addEventListener("click", function(event) {
    event.preventDefault();

    document.querySelector("#hero").scrollIntoView({
        behavior: "smooth"
    });
});

function show() {
    var dropdown = document.getElementById("profile-dropdown"); // Get the dropdown element by ID
    var img = document.getElementById("img"); // Get the profile image element by ID
    var closeBtn = document.getElementById("close"); // Get the close button element by ID

    dropdown.style.opacity = "1"; // Make dropdown visible
    dropdown.style.visibility = "visible"; // Ensure dropdown is visible
    img.style.display = "none"; // Hide the profile image
    closeBtn.style.display = "inline"; // Show the close button
}

function unshow() {
    var dropdown = document.getElementById("profile-dropdown"); // Get the dropdown element by ID
    var img = document.getElementById("img"); // Get the profile image element by ID
    var closeBtn = document.getElementById("close"); // Get the close button element by ID

    dropdown.style.opacity = "0"; // Hide dropdown
    dropdown.style.visibility = "hidden"; // Make sure it's not interactive
    img.style.display = "inline"; // Show the profile image again
    closeBtn.style.display = "none"; // Hide the close button
}

