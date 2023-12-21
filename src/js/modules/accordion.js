/* ########################################################################################################################################################################################## */
/* Accordion */
/* ########################################################################################################################################################################################### */


let btnAccordionAllSection8=document.querySelectorAll(".btnAccordionAllSection8")

let btnAccordion1=btnAccordionAllSection8[0]
console.log(btnAccordion1);
let btnAccordion2=btnAccordionAllSection8[1]
let btnAccordion3=btnAccordionAllSection8[2]
let btnAccordion4=btnAccordionAllSection8[3]
let btnAccordion5=btnAccordionAllSection8[4]


let pQuestionAllSection8=document.querySelectorAll(".pQuestionAllSection8")

let pQuestion1=pQuestionAllSection8[0]
let pQuestion2=pQuestionAllSection8[1]
let pQuestion3=pQuestionAllSection8[2]
let pQuestion4=pQuestionAllSection8[3]
let pQuestion5=pQuestionAllSection8[4]


let pReponsesAllSection8=document.querySelectorAll(".pReponsesAllSection8")

let pReponses1=pReponsesAllSection8[0]
let pReponses2=pReponsesAllSection8[1]
let pReponses3=pReponsesAllSection8[2]
let pReponses4=pReponsesAllSection8[3]
let pReponses5=pReponsesAllSection8[4]


let iconeFlecheAllSection8=document.querySelectorAll(".iconeFlecheAllSection8")

let iconeFleche1=iconeFlecheAllSection8[0]
let iconeFleche2=iconeFlecheAllSection8[1]
let iconeFleche3=iconeFlecheAllSection8[2]
let iconeFleche4=iconeFlecheAllSection8[3]
let iconeFleche5=iconeFlecheAllSection8[4]



btnAccordion1.addEventListener("click", function () {
    if(pReponses1.style.display == "none"){
        pReponses1.style.display="block" // ici en block !
        iconeFleche1.classList="iconeFlecheAllSection8 fa-solid fa-angle-up"
        pQuestion1.style.color="rgba(86, 58, 250, 0.9)"
        iconeFleche1.style.color="rgba(86, 58, 250, 0.9)"

        pReponses2.style.display="none"
        iconeFleche2.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion2.style.color="rgb(36, 37, 38)"
        iconeFleche2.style.color="rgb(36, 37, 38)"
        pReponses3.style.display="none"
        iconeFleche3.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion3.style.color="rgb(36, 37, 38)"
        iconeFleche3.style.color="rgb(36, 37, 38)"
        pReponses4.style.display="none"
        iconeFleche4.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion4.style.color="rgb(36, 37, 38)"
        iconeFleche4.style.color="rgb(36, 37, 38)"
        pReponses5.style.display="none"
        iconeFleche5.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion5.style.color="rgb(36, 37, 38)"
        iconeFleche5.style.color="rgb(36, 37, 38)"
    } else {
        pReponses1.style.display="none"
        iconeFleche1.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion1.style.color="rgb(36, 37, 38)"
        iconeFleche1.style.color="rgb(36, 37, 38)"

    }
})

btnAccordion2.addEventListener("click", function () {
    if(pReponses2.style.display == "none"){
        pReponses2.style.display="block" // ici en block !
        iconeFleche2.classList="iconeFlecheAllSection8 fa-solid fa-angle-up"
        pQuestion2.style.color="rgba(86, 58, 250, 0.9)"
        iconeFleche2.style.color="rgba(86, 58, 250, 0.9)"

        pReponses1.style.display="none"
        iconeFleche1.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion1.style.color="rgb(36, 37, 38)"
        iconeFleche1.style.color="rgb(36, 37, 38)"
        pReponses3.style.display="none"
        iconeFleche3.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion3.style.color="rgb(36, 37, 38)"
        iconeFleche3.style.color="rgb(36, 37, 38)"
        pReponses4.style.display="none"
        iconeFleche4.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion4.style.color="rgb(36, 37, 38)"
        iconeFleche4.style.color="rgb(36, 37, 38)"
        pReponses5.style.display="none"
        iconeFleche5.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion5.style.color="rgb(36, 37, 38)"
        iconeFleche5.style.color="rgb(36, 37, 38)"
    } else {
        pReponses2.style.display="none"
        iconeFleche2.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion2.style.color="rgb(36, 37, 38)"
        iconeFleche2.style.color="rgb(36, 37, 38)"
    }
})

btnAccordion3.addEventListener("click", function () {
    if(pReponses3.style.display == "none"){
        pReponses3.style.display="block" // ici en block !
        iconeFleche3.classList="iconeFlecheAllSection8 fa-solid fa-angle-up"
        pQuestion3.style.color="rgba(86, 58, 250, 0.9)"
        iconeFleche3.style.color="rgba(86, 58, 250, 0.9)"

        pReponses1.style.display="none"
        iconeFleche1.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion1.style.color="rgb(36, 37, 38)"
        iconeFleche1.style.color="rgb(36, 37, 38)"
        pReponses2.style.display="none"
        iconeFleche2.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion2.style.color="rgb(36, 37, 38)"
        iconeFleche2.style.color="rgb(36, 37, 38)"
        pReponses4.style.display="none"
        iconeFleche4.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion4.style.color="rgb(36, 37, 38)"
        iconeFleche4.style.color="rgb(36, 37, 38)"
        pReponses5.style.display="none"
        iconeFleche5.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion5.style.color="rgb(36, 37, 38)"
        iconeFleche5.style.color="rgb(36, 37, 38)"
    } else {
        pReponses3.style.display="none"
        iconeFleche3.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion3.style.color="rgb(36, 37, 38)"
        iconeFleche3.style.color="rgb(36, 37, 38)"
    }
})

btnAccordion4.addEventListener("click", function () {
    if(pReponses4.style.display == "none"){
        pReponses4.style.display="block" // ici en block !
        iconeFleche4.classList="iconeFlecheAllSection8 fa-solid fa-angle-up"
        pQuestion4.style.color="rgba(86, 58, 250, 0.9)"
        iconeFleche4.style.color="rgba(86, 58, 250, 0.9)"

        pReponses1.style.display="none"
        iconeFleche1.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion1.style.color="rgb(36, 37, 38)"
        iconeFleche1.style.color="rgb(36, 37, 38)"
        pReponses2.style.display="none"
        iconeFleche2.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion2.style.color="rgb(36, 37, 38)"
        iconeFleche2.style.color="rgb(36, 37, 38)"
        pReponses3.style.display="none"
        iconeFleche3.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion3.style.color="rgb(36, 37, 38)"
        iconeFleche3.style.color="rgb(36, 37, 38)"
        pReponses5.style.display="none"
        iconeFleche5.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion5.style.color="rgb(36, 37, 38)"
        iconeFleche5.style.color="rgb(36, 37, 38)"
    } else {
        pReponses4.style.display="none"
        iconeFleche4.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion4.style.color="rgb(36, 37, 38)"
        iconeFleche4.style.color="rgb(36, 37, 38)"
    }
})

btnAccordion5.addEventListener("click", function () {
    if(pReponses5.style.display == "none"){
        pReponses5.style.display="block" // ici en block !
        iconeFleche5.classList="iconeFlecheAllSection8 fa-solid fa-angle-up"
        pQuestion5.style.color="rgba(86, 58, 250, 0.9)"
        iconeFleche5.style.color="rgba(86, 58, 250, 0.9)"
        
        pReponses1.style.display="none"
        iconeFleche1.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion1.style.color="rgb(36, 37, 38)"
        iconeFleche1.style.color="rgb(36, 37, 38)"
        pReponses2.style.display="none"
        iconeFleche2.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion2.style.color="rgb(36, 37, 38)"
        iconeFleche2.style.color="rgb(36, 37, 38)"
        pReponses3.style.display="none"
        iconeFleche3.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion3.style.color="rgb(36, 37, 38)"
        iconeFleche3.style.color="rgb(36, 37, 38)"
        pReponses4.style.display="none"
        iconeFleche4.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion4.style.color="rgb(36, 37, 38)"
        iconeFleche4.style.color="rgb(36, 37, 38)"
    } else {
        pReponses5.style.display="none"
        iconeFleche5.classList="iconeFlecheAllSection8 fa-solid fa-angle-down"
        pQuestion5.style.color="rgb(36, 37, 38)"
        iconeFleche5.style.color="rgb(36, 37, 38)"
    }
})









export {btnAccordion1,btnAccordion2,btnAccordion3,btnAccordion4,btnAccordion5}
