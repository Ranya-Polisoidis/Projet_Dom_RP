/* ########################################################################################################################################################################################## */
/* Section 7 (js) */
/* ########################################################################################################################################################################################### */

let btnMonthYearSection7=document.querySelector(".btnMonthYearSection7")

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
    pMontant1.innerHTML="0&nbsp;&nbsp;"
    pMontant2.innerHTML="190&nbsp;"
    pMontant3.innerHTML="290&nbsp;"
    pMontant4.innerHTML="490&nbsp;"

    spanMontant1.innerHTML="/&nbsp;year"
    spanMontant2.innerHTML="/&nbsp;year"
    spanMontant3.innerHTML="/&nbsp;year"
    spanMontant4.innerHTML="/&nbsp;year"

    btnMonthYearSection7.addEventListener("click", function () {
        if(pMontant2.innerHTML=="190&nbsp;"){
            pMontant1.innerHTML="0&nbsp;&nbsp;"
            pMontant2.innerHTML="19&nbsp;"
            pMontant3.innerHTML="29&nbsp;"
            pMontant4.innerHTML="49&nbsp;"

            spanMontant1.innerHTML="/&nbsp;month"
            spanMontant2.innerHTML="/&nbsp;month"
            spanMontant3.innerHTML="/&nbsp;month"
            spanMontant4.innerHTML="/&nbsp;month"

        } else {
            pMontant1.innerHTML="0&nbsp;&nbsp;"
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

export {btnMonthYearSection7}

