const input = document.querySelector('#input');
const btn = document.querySelector('.button');
const lengthOpt = document.getElementById('lengthComment');
const volumeOpt = document.getElementById('volumeComment');
const massOpt = document.getElementById('massComment');

function conversion(value){
    digit = Number(value.value);
    meter = digit / 3.28084;
    feet = 3.28084 * digit;
    litre = digit * 3.78541;
    gallon = digit / 3.78541;
    kilogram = digit / 2.20462;
    pounds = digit * 2.20462;
};
btn.addEventListener('click', ()=>{
    conversion(input)
    lengthOpt.innerHTML = `${digit} feet is ${(meter).toFixed(2)} meters <br> ${digit} meters is ${feet.toFixed(2)} feet.`
    volumeOpt.innerHTML = `${digit} gallon is ${litre.toFixed(2)} litres <br> ${digit} litres is ${gallon.toFixed(2)} gallons` 
    massOpt.innerHTML = `${digit} pounds is ${kilogram.toFixed(2)} kilograms <br> ${digit} kilograms is ${pounds.toFixed(2)} pounds`
})