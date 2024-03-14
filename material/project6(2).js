const calc = () => {
    let rs = document.getElementById('Rs').value;
    let tip = document.getElementById('tip').value;

    let fm = parseFloat(tip) + 100;
    let fm2 = parseFloat(rs)*fm/100;
    
    document.getElementById('res').innerHTML = `The final Amount is ${fm2}`
}