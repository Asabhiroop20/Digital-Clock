function ClockTime(){
    const  hour=document.getElementById("hour");
    const  minute=document.getElementById("minute");
    const  second=document.getElementById("second");
    const  session=document.getElementById("session");
    const d = new Date();
    var hrs = d.getHours();
    var mins = d.getMinutes();
    var sec = d.getSeconds();
    if (hrs>=12){

        session.textContent="PM";
    }
    else{
        session.textContent="AM";
    }
    if (hrs>12){
        hrs=hrs-12;
    }
    else{
        hrs=hrs;
    }
    mins = mins < 10 ? '0' + mins : mins;
    sec = sec < 10 ? '0' + sec : sec;
    
    hour.textContent=hrs;
    minute.textContent=mins;
    second.textContent=sec;
    
}
setInterval(ClockTime,1000);
ClockTime();
