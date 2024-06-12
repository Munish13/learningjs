const endDate = "12 June 2024 10:00 AM";

// document.getElementById("end-date").innerText = endDate;
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let minuets = document.getElementById("minuets");
let seconds = document.getElementById("seconds");

function clock() {
    const end = new Date(endDate);
    const now = new Date();

    // console.log(end);
    // console.log(now);
    let diff = (end - now) / 1000;
    if (diff < 0) return;
    // console.log(diffrence);
    // convert into days
    days.value = Math.floor(diff / 3600 / 24);
    hours.value = Math.floor((diff / 3600) % 24);
    minuets.value = Math.floor((diff / 3600) % 60);
    seconds.value = Math.floor((diff) % 60);
    // console.log(days);


}

clock();

setInterval(() => {
    clock()
}, 1000)