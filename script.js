"use strict";



function show() {
    let inp = document.getElementById('inp');
    let inpvalue = document.getElementById('inp').value
    let btn = document.getElementById('btn');
    let num = Number(inpvalue);
    let resultt=document.getElementById('result');
    let rdmword='q$w#e^r!tyu%io@pas&dfghjkl*zxcvbnm';
    console.log(num);
    let pass = '';
    let text='';
    // let rdm= Math.round(Math.random * num);
    for (let i = 0; i < num; i++) {
        pass +=rdmword.charAt(Math.round(Math.random()*num));

    }
    console.log(pass);
    result.innerHTML=pass;
}