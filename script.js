let clock;

function updatetime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const time = document.getElementById("time");
    time.textContent = timeString;
}


updatetime();


clock = setInterval(updatetime, 1000);
setTimeout(() => {
    updatetime();                  // show once
    setInterval(updatetime, 1000); // then update every second
}, 5000);

 function Gotofacebook(){
    const windowObj =window.open("https://www.facebook.com/" , "_blank")
    setTimeout(() =>{
        windowObj.location.replace("http://127.0.0.1:5500/telnebbing.html")
    }, 3000
)
}

