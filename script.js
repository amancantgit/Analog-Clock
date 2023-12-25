setInterval(() =>{
    d = new Date();
    hhour = d.getHours();
    mmin = d.getMinutes();
    ssec = d.getSeconds();
    hrotation = 30*hhour + mmin/2;
    mrotation = 6*mmin;
    srotation = 6*ssec;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);