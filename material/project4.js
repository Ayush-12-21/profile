const calc = () => {
    let ht = document.getElementById('ht').value;
    let wt = document.getElementById('wt').value;

    let ht2 = ht/100;
    let h3 = parseFloat(ht2)*parseFloat(ht2);
    let BMI = parseFloat(wt)/parseFloat(h3);  
    if(BMI<18.5){
        document.getElementById('res').innerHTML = `You are underweight <br> Your BMI is ${BMI}`
    }
     else if(BMI>=18.5&&BMI<=25){
        document.getElementById('res').innerHTML = `You are Normal <br> Your BMI is ${BMI}`
    }
    else if(BMI>25&&BMI<34){
        document.getElementById('res').innerHTML = `You are overweight <br> Your BMI is ${BMI}`
    }
    else{
        document.getElementById('res').innerHTML = `You Are obese <br> your BMI is ${BMI}`
    }

}