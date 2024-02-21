let t = document.getElementById("timer");

function updateTime() {
    const date = new Date();
    t.innerHTML = date.toLocaleString();
}

updateTime();

setInterval(updateTime, 1000); 