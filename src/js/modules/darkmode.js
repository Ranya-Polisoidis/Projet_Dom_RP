// ###########################################################################################################################################################################################
// DarkMode
// ###########################################################################################################################################################################################


// Bouton Month et Year (animation)
let divCercle2=document.querySelector(".divCercle2")
let cercle2=document.querySelector(".cercle2")

let pJourBtnSection7=document.querySelector(".pJourBtnSection7")
let pNuitBtnSection7=document.querySelector(".pNuitBtnSection7")

divCercle2.addEventListener("click", function () {
    cercle2.style.left=="2rem"
    pJourBtnSection7.style.color="rgb(142, 144, 150)"
    pNuitBtnSection7.style.color="rgba(86, 58, 250, 0.9)"
    if(cercle2.style.left=="2rem"){
        cercle2.style.left="0rem"
        pJourBtnSection7.style.color="rgba(86, 58, 250, 0.9)"
        pNuitBtnSection7.style.color="rgb(142, 144, 150)"
    } else {
        cercle2.style.left="2rem"
        pJourBtnSection7.style.color="rgb(142, 144, 150)"
        pNuitBtnSection7.style.color="rgba(86, 58, 250, 0.9)"
    }
})


// darkMode
let btnMonthYearSection7Deuxième=document.querySelectorAll(".btnMonthYearSection7")[0]

// --> fond
let navHeader=document.querySelector(".navHeader")
let fondImageHeader=document.querySelector(".fondImageHeader")
let divSection2=document.querySelector(".divSection2")
let divSection8=document.querySelector(".divSection8")
let divFooter=document.querySelector(".divFooter")

let divSection1=document.querySelector(".divSection1")
let divSection4=document.querySelector(".divSection4")
let divSection6=document.querySelector(".divSection6")

let divSection5=document.querySelector(".divSection5")
let divSection3=document.querySelector(".divSection3")
let divSection7=document.querySelector(".divSection7")
let divSection9=document.querySelector(".divSection9")

// --> texte
// mixin
let h1Mixin=document.querySelectorAll(".h1Mixin")
let divSurlignerh1Mixin=document.querySelectorAll(".divSurlignerh1Mixin")
let pAllMixin=document.querySelectorAll(".pAllMixin")

// section 1
let h1Section1=document.querySelector(".h1Section1")
let h3Section1=document.querySelector(".h3Section1")
let pAllSection1=document.querySelectorAll(".pAllSection1")
let spanAllSection1=document.querySelectorAll(".spanAllSection1")
// section4
let iconeSection4=document.querySelectorAll(".iconeSection4")
// section 7
let businessBgcMauve=document.querySelector(".businessBgcMauve")



btnMonthYearSection7Deuxième.addEventListener("click", function () {


    // --> fond
    navHeader.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"
    fondImageHeader.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"
    divSection2.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"
    divSection8.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"
    divFooter.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"

    divSection1.style.backgroundColor="rgba(76, 68, 118, 0.9)"
    divSection4.style.backgroundColor="rgba(76, 68, 118, 0.9)"
    divSection6.style.backgroundColor="rgba(76, 68, 118, 0.9)"

    divSection5.style.backgroundColor="rgba(114, 103, 165, 0.9)"
    divSection3.style.backgroundColor="rgba(114, 103, 165, 0.9)"
    divSection7.style.backgroundColor="rgba(114, 103, 165, 0.9)"
    divSection9.style.backgroundColor="rgba(114, 103, 165, 0.9)"


    // --> texte
    // mixin
    h1Mixin.forEach((element) => {
        element.style.color="white"
    });
    divSurlignerh1Mixin.forEach((element) => {
        element.style.border="2px solid white"
    });
    pAllMixin.forEach((element) => {
        element.style.color="white"
    });
    // section 1
    h1Section1.style.color="white"
    h3Section1.style.color="white"
    pAllSection1.forEach((element) => {
        element.style.color="white"
    });
    spanAllSection1.forEach((element) => {
        element.style.color="white"
        element.style.border="2px solid white"
    });
    // section 4
    iconeSection4.forEach((element) => {
        element.style.color="rgba(151, 138, 209, 0.9)"
    });
    // section 7
    businessBgcMauve.style.backgroundColor="rgba(76, 68, 118, 0.9)"


    btnMonthYearSection7Deuxième.addEventListener("click", function () {
        if(h1Section1.style.color=="white"){
            // --> fond
            navHeader.style.background = "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%), center center no-repeat"
            fondImageHeader.style.background = "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%), center center no-repeat"
            divSection2.style.background = "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%), center center no-repeat"
            divSection8.style.background = "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%), center center no-repeat"
            divFooter.style.background = "linear-gradient(45deg, rgba(86, 58, 250, 0.9) 0%, rgba(116, 15, 214, 0.9) 100%), center center no-repeat"
    
            divSection1.style.backgroundColor="white"
            divSection4.style.backgroundColor="white"
            divSection6.style.backgroundColor="white"
    
            divSection5.style.backgroundColor="rgb(249, 248, 255)"
            divSection3.style.backgroundColor="rgb(249, 248, 255)"
            divSection7.style.backgroundColor="rgb(249, 248, 255)"
            divSection9.style.backgroundColor="rgb(249, 248, 255)"
    
    
            // --> texte
            // mixin
            h1Mixin.forEach((element) => {
                element.style.color="rgb(55, 56, 58)"
            });
            divSurlignerh1Mixin.forEach((element) => {
                element.style.border="2px solid rgba(86, 58, 250, 0.9)"
            });
            pAllMixin.forEach((element) => {
                element.style.color="rgb(72, 73, 76)"
            });
            // section 1
            h1Section1.style.color="rgb(40, 64, 89)"
            h3Section1.style.color="rgb(60, 60, 60)"
            pAllSection1.forEach((element) => {
                element.style.color="rgb(60, 60, 60)"
            });
            spanAllSection1.forEach((element) => {
                element.style.color="rgba(86, 58, 250, 0.9)"
                element.style.border="2px solid rgba(86, 58, 250, 0.9)"
            });
            // section 4
            iconeSection4.forEach((element) => {
                element.style.color="rgba(86, 58, 250, 0.9)"
            });
            // section 7
            businessBgcMauve.style.backgroundColor="rgba(86, 58, 250, 0.9)"
        } else {
            // --> fond
            navHeader.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"
            fondImageHeader.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"
            divSection2.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"
            divSection8.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"
            divFooter.style.background = "linear-gradient(45deg, rgba(23, 16, 57, 0.9) 0%, rgba(101, 27, 175, 0.9) 100%), center center no-repeat"
    
            divSection1.style.backgroundColor="rgba(76, 68, 118, 0.9)"
            divSection4.style.backgroundColor="rgba(76, 68, 118, 0.9)"
            divSection6.style.backgroundColor="rgba(76, 68, 118, 0.9)"
    
            divSection5.style.backgroundColor="rgba(114, 103, 165, 0.9)"
            divSection3.style.backgroundColor="rgba(114, 103, 165, 0.9)"
            divSection7.style.backgroundColor="rgba(114, 103, 165, 0.9)"
            divSection9.style.backgroundColor="rgba(114, 103, 165, 0.9)"
    
    
            // --> texte
            // mixin
            h1Mixin.forEach((element) => {
                element.style.color="white"
            });
            divSurlignerh1Mixin.forEach((element) => {
                element.style.border="2px solid white"
            });
            pAllMixin.forEach((element) => {
                element.style.color="white"
            });
            // section 1
            h1Section1.style.color="white"
            h3Section1.style.color="white"
            pAllSection1.forEach((element) => {
                element.style.color="white"
            });
            spanAllSection1.forEach((element) => {
                element.style.color="white"
                element.style.border="2px solid white"
            });
            // section 4
            iconeSection4.forEach((element) => {
                element.style.color="rgba(151, 138, 209, 0.9)"
            });
            // section 7
            businessBgcMauve.style.backgroundColor="rgba(76, 68, 118, 0.9)"
        }
    })


})


export {divCercle2,btnMonthYearSection7Deuxième}