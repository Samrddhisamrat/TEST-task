let frames = document.querySelectorAll('.slider .slider-line .slide')
let sliderLine = document.querySelector('.slider-line')


let count = 0;
let width;

function init() {
   width = document.querySelector('.slider').offsetWidth;
   sliderLine.style.width = width * frames.length + 'px'
   frames.forEach(item => {
      item.style.width = width + 'px'
      item.style.height = 'auto'
   });
   rollSlider();
}


window.addEventListener('resize', init)
init()

document.querySelector('.slider-next').addEventListener('click', () => {
   count++;
   if (count >= frames.length) {
      count = 0;
   }
   rollSlider();
})

document.querySelector('.slider-prev').addEventListener('click', () => {
   count--;
   if (count < 0) {
      count = frames.length - 1;
   }
   rollSlider()
})

function rollSlider() {
   sliderLine.style.transform = 'translate(-'+ count * width +'px'
}