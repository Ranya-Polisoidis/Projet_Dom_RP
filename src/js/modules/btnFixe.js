/* ########################################################################################################################################################################################### */
/* Bouton Fixe */
/* ########################################################################################################################################################################################### */


let btnFixeFooter=document.querySelector(".btnFixeFooter")

btnFixeFooter.addEventListener("mouseover", function () {
    btnFixeFooter.style.backgroundColor="rgba(123,47,226)"; 
    btnFixeFooter.addEventListener("mouseout", function () {
        btnFixeFooter.style.backgroundColor="rgba(86, 58, 250)" 
    })
})

export {btnFixeFooter}
