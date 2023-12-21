/* ########################################################################################################################################################################################## */
/* Section 7 (js) */
/* ########################################################################################################################################################################################### */


// Bouton Month et Year (animation)
let divCercle=document.querySelector(".divCercle")
let cercle=document.querySelector(".cercle")

let pMonthBtnSection7=document.querySelector(".pMonthBtnSection7")
let pYearBtnSection7=document.querySelector(".pYearBtnSection7")

divCercle.addEventListener("click", function () {
    cercle.style.left=="2rem"
    pMonthBtnSection7.style.color="rgb(142, 144, 150)"
    pYearBtnSection7.style.color="rgba(86, 58, 250, 0.9)"
    if(cercle.style.left=="2rem"){
        cercle.style.left="0rem"
        pMonthBtnSection7.style.color="rgba(86, 58, 250, 0.9)"
        pYearBtnSection7.style.color="rgb(142, 144, 150)"
    } else {
        cercle.style.left="2rem"
        pMonthBtnSection7.style.color="rgb(142, 144, 150)"
        pYearBtnSection7.style.color="rgba(86, 58, 250, 0.9)"
    }
})


// Changement de mon contenue des montants
let btnMonthYearSection7=document.querySelectorAll(".btnMonthYearSection7")[1]

let pMontantAllSection7 = document.querySelectorAll('.pMontantAllSection7')
let pMontant1=pMontantAllSection7[0]
let pMontant2=pMontantAllSection7[1]
let pMontant3=pMontantAllSection7[2]
let pMontant4=pMontantAllSection7[3]


let spanMontantAllSection7=document.querySelectorAll(".spanMontantAllSection7")
let spanMontant1=spanMontantAllSection7[0]
let spanMontant2=spanMontantAllSection7[1]
let spanMontant3=spanMontantAllSection7[2]
let spanMontant4=spanMontantAllSection7[3]


btnMonthYearSection7.addEventListener("click", function () {
    pMontant1.innerHTML="0&nbsp;"
    pMontant2.innerHTML="190&nbsp;"
    pMontant3.innerHTML="290&nbsp;"
    pMontant4.innerHTML="490&nbsp;"

    spanMontant1.innerHTML="/&nbsp;year"
    spanMontant2.innerHTML="/&nbsp;year"
    spanMontant3.innerHTML="/&nbsp;year"
    spanMontant4.innerHTML="/&nbsp;year"

    btnMonthYearSection7.addEventListener("click", function () {
        if(pMontant2.innerHTML=="190&nbsp;"){
            pMontant1.innerHTML="0&nbsp;"
            pMontant2.innerHTML="19&nbsp;"
            pMontant3.innerHTML="29&nbsp;"
            pMontant4.innerHTML="49&nbsp;"

            spanMontant1.innerHTML="/&nbsp;month"
            spanMontant2.innerHTML="/&nbsp;month"
            spanMontant3.innerHTML="/&nbsp;month"
            spanMontant4.innerHTML="/&nbsp;month"

        } else {
            pMontant1.innerHTML="0&nbsp;"
            pMontant2.innerHTML="190&nbsp;"
            pMontant3.innerHTML="290&nbsp;"
            pMontant4.innerHTML="490&nbsp;"

            spanMontant1.innerHTML="/&nbsp;year"
            spanMontant2.innerHTML="/&nbsp;year"
            spanMontant3.innerHTML="/&nbsp;year"
            spanMontant4.innerHTML="/&nbsp;year"
        }
    })
})


export {divCercle,btnMonthYearSection7}




