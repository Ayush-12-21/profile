setInterval(() => {
    const d = new Date();
    const htime = d.getHours();
    const mtime = d.getMinutes();
    const stime = d.getSeconds();
    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime;

    const hourElement = document.getElementById('hour');  
    const minuteElement = document.getElementById('minute');  
    const secondElement = document.getElementById('second');  

    hourElement.style.transform = `rotate(${hrotation}deg)`;
    minuteElement.style.transform = `rotate(${mrotation}deg)`;
    secondElement.style.transform = `rotate(${srotation}deg)`;
}, 1000);
