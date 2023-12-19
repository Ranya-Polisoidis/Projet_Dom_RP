// ###########################################################################################################################################################################################
// Carousel
// ###########################################################################################################################################################################################

let btnCarouselAll=document.querySelectorAll(".btnCarouselAll")
let btnCarousel1=btnCarouselAll[0]
let btnCarousel2=btnCarouselAll[1]
let btnCarousel3=btnCarouselAll[2]
let btnCarousel4=btnCarouselAll[3]
let btnCarousel5=btnCarouselAll[4]
// contrairement à l'accordion je vais crée + dans le html que dans mon js

let divCarousel1=document.querySelector(".divCarousel1")
let divCarousel2=document.querySelector(".divCarousel2")
let divCarousel3=document.querySelector(".divCarousel3")
let divCarousel4=document.querySelector(".divCarousel4")
let divCarousel5=document.querySelector(".divCarousel5")

btnCarousel1.addEventListener("click", function () {
    divCarousel1.style.display="flex"
    divCarousel2.style.display="none"
    divCarousel3.style.display="none"
    divCarousel4.style.display="none"
    divCarousel5.style.display="none"

    btnCarousel1.style.backgroundColor="rgb(89, 80, 193)"
    btnCarousel2.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel3.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel4.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel5.style.backgroundColor="rgb(249, 248, 255)"
})


btnCarousel2.addEventListener("click", function () {
    divCarousel1.style.display="none"
    divCarousel2.style.display="flex"
    divCarousel3.style.display="none"
    divCarousel4.style.display="none"
    divCarousel5.style.display="none"

    btnCarousel1.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel2.style.backgroundColor="rgb(89, 80, 193)"
    btnCarousel3.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel4.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel5.style.backgroundColor="rgb(249, 248, 255)"
})

btnCarousel3.addEventListener("click", function () {
    divCarousel1.style.display="none"
    divCarousel2.style.display="none"
    divCarousel3.style.display="flex"
    divCarousel4.style.display="none"
    divCarousel5.style.display="none"
    
    btnCarousel1.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel2.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel3.style.backgroundColor="rgb(89, 80, 193)"
    btnCarousel4.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel5.style.backgroundColor="rgb(249, 248, 255)"
})

btnCarousel4.addEventListener("click", function () {
    divCarousel1.style.display="none"
    divCarousel2.style.display="none"
    divCarousel3.style.display="none"
    divCarousel4.style.display="flex"
    divCarousel5.style.display="none"

    btnCarousel1.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel2.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel3.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel4.style.backgroundColor="rgb(89, 80, 193)"
    btnCarousel5.style.backgroundColor="rgb(249, 248, 255)"
})

btnCarousel5.addEventListener("click", function () {
    divCarousel1.style.display="none"
    divCarousel2.style.display="none"
    divCarousel3.style.display="none"
    divCarousel4.style.display="none"
    divCarousel5.style.display="flex"

    btnCarousel1.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel2.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel3.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel4.style.backgroundColor="rgb(249, 248, 255)"
    btnCarousel5.style.backgroundColor="rgb(89, 80, 193)"
})


// let divPartieTexteGeneraleAll=document.querySelectorAll(".divPartieTexteGeneraleAll")
// console.log(divPartieTexteGeneraleAll);


// // petit animation
// divPartieTexteGeneraleAll.forEach(element => {
//     element.addEventListener("mouseover", function () {
//         element.style.color="rgba(255, 255, 255, 0.292)"
//         element.addEventListener("mouseout", function () {
//             // element.style.color="red"
//             element.style.color="rgba(255, 255, 255, 0.882)"
//         })
//     })
// });



export {btnCarousel1,btnCarousel2,btnCarousel3,btnCarousel4,btnCarousel5}