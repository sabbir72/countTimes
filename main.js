const digitaltime="18 feb 2022";
const daysId= document.getElementById("days");
const  hoursId= document.getElementById("hours");
const minsId= document.getElementById("mins");
const secId= document.getElementById("sec");

function  countdown() {
    const dgday= new  Date(digitaltime);
    const courrentday = new Date();
    const totaltime =(dgday-courrentday)/1000;
    const days=Math.floor(totaltime/3600/24);
    const hours =Math.floor((totaltime/3600)%24);
    const mins =Math.floor((totaltime/60)%60);
    const sec =Math.floor((totaltime)%60);
     daysId.innerHTML = days;
     hoursId.innerHTML = hours;
     minsId.innerHTML = mins;
     secId.innerHTML = sec;

}
 
countdown();
setInterval(countdown,1000);