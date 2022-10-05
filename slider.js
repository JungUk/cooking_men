// let curPos = 0;
// let position = 0;
// const IMAGE_WIDTH = 640;
// const prevBtn = document.querySelector(".prev");
// const nextBtn = document.querySelector(".next");
// const images = document.querySelector(".images");

// function prev() {
//   if(curPos > 0) {
//     nextBtn.removeAttribute("disabled");
//     position += IMAGE_WIDTH;
//     images.style.transform = `translateX(${position}px)`;
//     images.style.transition = `opacity 500ms ease-in-out`;
//     curPos = curPos - 1;
//   }

//   if(curPos == 0) {
//     prevBtn.setAttribute('disabled', 'true');
//   }
// }

// function next() {
//   if(curPos < 3) {
//     prevBtn.removeAttribute("disabled");
//     position -= IMAGE_WIDTH;
//     images.style.transform = `translateX(${position}px)`;
//     images.style.transition = `background-color 0.3s ease-in-out 0s`;
//     curPos = curPos + 1;
//   }
  
//   if(curPos == 3) {
//     nextBtn.setAttribute('disabled', 'true');
//   }
// }

// function init() {
//   prevBtn.setAttribute('disabled', 'true');
//   prevBtn.addEventListener("click", prev);
//   nextBtn.addEventListener("click", next);
// }

// init();

  const SHOWING_CLASS = "showing";
  const firstSlide = document.querySelector(".slider__item:first-child");
  
  function slide() {
    
    const currentSlide = document.querySelector(`.${SHOWING_CLASS}`);
    console.log(currentSlide);
    
    if(currentSlide) {
      currentSlide.classList.remove(SHOWING_CLASS);
      const nextSlide = currentSlide.nextElementSibling;
      if (nextSlide) {
        nextSlide.classList.add(SHOWING_CLASS);
      } else {
        firstSlide.classList.add(SHOWING_CLASS);
      }
    } else {
      firstSlide.classList.add(SHOWING_CLASS);
    }
    // console.log(currentSlide);
  }
  
  slide();
  setInterval(slide, 2000);