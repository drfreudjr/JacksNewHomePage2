const cl = console.log;

window.onload = function () {           // onload wrapper

function loadImages () {        // hust get em in there
    for (i = 0; i <4; ++i) {
        image = document.createElement('img')
        image.src = './images/image1.jpg'
        imageArray[i] = image
        document.getElementById('container').appendChild(image)
    }
}
loadImages()


// const carouselSlide = document.querySelector('.carousel-slide')
// const carouselImages = document.querySelectorAll('.carousel-slide img')

// // buttons
// const prevButton = document.querySelector('#prevButton')
// const nextButton = document.querySelector('#nextButton')

// // counter
// let counter = 1;
// const size = carouselImages[0]. clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)';

// //Button Listeners

// nextButton.addEventListener('click', ()=>{
//     if (counter >= carouselImages.length -1) return
//     carouselSlide.style.transition = "transform 0.4s ease-in-out"
//     counter++
//     carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)';
// })

// prevButton.addEventListener('click', ()=>{
//     if (counter<=0) return
//     carouselSlide.style.transition = "transform 0.4s ease-in-out"
//     counter--
//     carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)';
// })

// carouselSlide.addEventListener('transitionend', () =>{
//     if (carouselImages[counter].id === 'lastClone') {
//         carouselSlide.style.transition = 'none'
//         counter = carouselImages.length -2
//         carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)';       
//     }
//     if (carouselImages[counter].id === 'firstClone') {
//         carouselSlide.style.transition = 'none'
//         counter = carouselImages.length -counter
//         carouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)';       
//     }
// })

}   // end onload wrapper