// var lampBtn = document.querySelector('.main-page-selection-lamp-box');
// lampBtn.onmouseover= function () {
     
//     lampBtn.style.backgroundColor = 'white';
//     console.log(lampBtn)
    
// }


var lamp1 = document.querySelector('.main-page-selection-lamp-box_1');
var lamp2 = document.querySelector('.main-page-selection-lamp-box_2');
var lamp3 = document.querySelector('.main-page-selection-lamp-box_3');

var img = document.querySelector('.main-page-lamp');
var exampleLamp = document.querySelector('.main-page-img-example-box');
var exampleLight = document.querySelector('.main-page-selection-light-box_bright');
var exampleDark = document.querySelector('.main-page-selection-light-box_dark');
var exampleImg = document.querySelector('.main-page-img-example');
var option = document.querySelector('.main-page-option');



lamp1.addEventListener('mouseover', (event)=>{
    event.target.classList.toggle('main-page-selection-lamp-box_grey');   
})

lamp1.addEventListener('mouseout', (event)=>{
    event.target.classList.toggle('main-page-selection-lamp-box_grey')
})

lamp2.addEventListener('mouseover', (event)=>{
    event.target.classList.toggle('main-page-selection-lamp-box_grey');   
})

lamp2.addEventListener('mouseout', (event)=>{
    event.target.classList.toggle('main-page-selection-lamp-box_grey')
})

lamp3.addEventListener('mouseover', (event)=>{
    event.target.classList.toggle('main-page-selection-lamp-box_grey');   
})

lamp3.addEventListener('mouseout', (event)=>{
    event.target.classList.toggle('main-page-selection-lamp-box_grey')
})

lamp1.addEventListener('click', (event)=>{
    event.target.classList.add('main-page-selection-lamp-box_white');
    img.classList.add('main-page-lamp_1');
    img.classList.remove('main-page-lamp_2');
    img.classList.remove('main-page-lamp_3');
    lamp2.classList.remove('main-page-selection-lamp-box_white');
    lamp3.classList.remove('main-page-selection-lamp-box_white');3
    exampleLove('main-page-img-example-box-2')
    exampleLamp.classList.remamp.classList.add('main-page-img-example-box-1');
    exampleLamp.classList.remove('main-page-img-example-box-3')
    option.innerHTML = `
    <p class="main-page-option-box"><b>Material:</b> Copper</p>
    <p class="main-page-option-box">
      <b>Dimensions (cm):</b> H 33 x W 15 x D 15
    </p>
    <p class="main-page-option-box"><b>Net Weight:</b> 2,5 kg</p>
    <p class="main-page-option-box">
      <b>Electrification:</b><br />
      LED 10W | G9 | 220-240V | 50 Hz
    </p>
  `;

    
})

lamp2.addEventListener('click', (event)=>{
    event.target.classList.add('main-page-selection-lamp-box_white');
    img.classList.add('main-page-lamp_2');
    img.classList.remove('main-page-lamp_1');
    img.classList.remove('main-page-lamp_3');
    lamp1.classList.remove('main-page-selection-lamp-box_white');
    lamp3.classList.remove('main-page-selection-lamp-box_white');
    exampleLamp.classList.add('main-page-img-Lamp-box-2');
    exampleLamp.classList.remove('main-page-img-example-box-1')
    exampleLamp.classList.remove('main-page-img-example-box-3');
    option.innerHTML = `
    <p class="main-page-option-box"><b>Material:</b> Anything</p>
    <p class="main-page-option-box">
      <b>Dimensions (cm):</b> H 100 x W 10 x D 10
    </p>
    <p class="main-page-option-box"><b>Net Weight:</b> 10 kg</p>
    <p class="main-page-option-box">
      <b>Electrification:</b><br />
      LED 10W | G9 | 220-240V | 50 Hz
    </p>
  `;;
    
})

lamp3.addEventListener('click', (event)=>{
    event.target.classList.add('main-page-selection-lamp-box_white');
    img.classList.add('main-page-lamp_3');
    img.classList.remove('main-page-lamp_1');
    img.classList.remove('main-page-lamp_2');
    lamp1.classList.remove('main-page-selection-lamp-box_white');
    lamp2.classList.remove('main-page-selection-lamp-box_white');
    exampleLamp.classList.add('main-page-img-example-box-3');
    exampleLamp.classList.remove('main-page-img-example-box-1')
    exampleLamp.classList.remove('main-page-img-example-box-2')
    option.innerHTML = `
    <p class="main-page-option-box"><b>Material:</b> Metal</p>
    <p class="main-page-option-box">
      <b>Dimensions (cm):</b> H 45 x W 12 x D 12
    </p>
    <p class="main-page-option-box"><b>Net Weight:</b> 2,4 kg</p>
    <p class="main-page-option-box">
      <b>Electrification:</b><br />
      LED 10W | G9 | 220-240V | 50 Hz
    </p>
  `;;
})

exampleLight.addEventListener('click', ()=>{
    
    exampleImg.classList.add('main-page-img-example_light');
    exampleImg.classList.remove('main-page-img-example_dark')
    
})

exampleDark.addEventListener('click', ()=>{
    
    exampleImg.classList.add('main-page-img-example_dark');
    exampleImg.classList.remove('main-page-img-example_light')
    
})