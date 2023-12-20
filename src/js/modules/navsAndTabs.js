// ###########################################################################################################################################################################################
// Navs and tabs
// ###########################################################################################################################################################################################


let btnAllSection6 = document.querySelectorAll(".btnAllSection6")

let btn1NavsAndTabs = btnAllSection6[0]
let btn2NavsAndTabs = btnAllSection6[1]
let btn3NavsAndTabs = btnAllSection6[2]

let divIA = document.querySelector(".divIA")
let divDev = document.querySelector(".divDev")
let divUIUX = document.querySelector(".divUIUX")

btn1NavsAndTabs.addEventListener("click", function () {
    divIA.style.display = "block "
    divDev.style.display = "none"
    divUIUX.style.display = "none"


    btn1NavsAndTabs.style.textDecorationColor="rgb(55, 56, 58)"
    btn2NavsAndTabs.style.textDecorationColor="rgb(142, 144, 150)"
    btn3NavsAndTabs.style.textDecorationColor="rgb(142, 144, 150)"
})

btn2NavsAndTabs.addEventListener("click", function () {
    divIA.style.display = "none"
    divDev.style.display = "block"
    divUIUX.style.display = "none"

    btn1NavsAndTabs.style.textDecorationColor="rgb(142, 144, 150)"
    btn2NavsAndTabs.style.textDecorationColor="rgb(55, 56, 58)"
    btn3NavsAndTabs.style.textDecorationColor="rgb(142, 144, 150)"
})

btn3NavsAndTabs.addEventListener("click", function () {
    divIA.style.display = "none"
    divDev.style.display = "none"
    divUIUX.style.display = "block"

    btn1NavsAndTabs.style.textDecorationColor="rgb(142, 144, 150)"
    btn2NavsAndTabs.style.textDecorationColor="rgb(142, 144, 150)"
    btn3NavsAndTabs.style.textDecorationColor="rgb(55, 56, 58)"
})

export {btn1NavsAndTabs,btn2NavsAndTabs,btn3NavsAndTabs }