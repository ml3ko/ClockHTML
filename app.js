function StartClock(){
    ///////Holy shit 
    var TimeRN = new Date();
    var y = TimeRN.getFullYear();
    var mon = TimeRN.getMonth() + 1;
    var d = TimeRN.getDate();
    var hrs = TimeRN.getHours();
    var min = TimeRN.getMinutes();
    var sec = TimeRN.getSeconds();
    min = checkTime(min);
    d = checkTime(d)
    mon = checkTime(mon)
    sec = checkTime(sec);
    ////// There is more ?????????
    var year = (y +'').split('');
    var month = (mon +'').split('');
    var day = (d +'').split('');
    var hour = (hrs +'').split('');
    var minute = (min +'').split('');
    var second = (sec +'').split('');
//////////// OK now we good 
document.getElementById('clock').innerHTML = `<img src='/${hour[0]}.png'><img src='/${hour[1]}.png'>
<img src='/c.png'>
<img src='/${minute[0]}.png'><img src='/${minute[1]}.png'>
<img src='/c.png'>
<img src='/${second[0]}.png'><img src='/${second[1]}.png'>
<br>
<img src='/${month[0]}.png'><img src='/${month[1]}.png'>
<img src='/d.png'>
<img src='/${day[0]}.png'><img src='/${day[1]}.png'>
<img src='/d.png'>
<img src='/${year[0]}.png'><img src='/${year[1]}.png'><img src='/${year[2]}.png'><img src='/${year[3]}.png'>
`
setTimeout(StartClock, 1000);
}


function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
