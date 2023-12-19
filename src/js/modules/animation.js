/* ########################################################################################################################################################################################### */
/* Animation */
/* ########################################################################################################################################################################################### */

let divCube1AllSection3=document.querySelectorAll(".divCube1AllSection3")

let cube1=divCube1AllSection3[0]
let cube2=divCube1AllSection3[1]
let cube3=divCube1AllSection3[2]
let cube4=divCube1AllSection3[3]
let cube5=divCube1AllSection3[4]
let cube6=divCube1AllSection3[5]

let iconeGuitar=document.querySelector(".iconeGuitar")
let iconeGame=document.querySelector(".iconeGame")
let iconeClock=document.querySelector(".iconeClock")

let iconePc=document.querySelector(".iconePc")
let iconeBuild=document.querySelector(".iconeBuild")
let iconeCoffee=document.querySelector(".iconeCoffee")


// ici abosulment les séparer pour l'utiliser sinon animation fct pas (comme pour mes div)
let h3AllSection3=document.querySelectorAll(".h3AllSection3")

let h3_1=h3AllSection3[0]
let h3_2=h3AllSection3[1]
let h3_3=h3AllSection3[2]
let h3_4=h3AllSection3[3]
let h3_5=h3AllSection3[4]
let h3_6=h3AllSection3[5]


let pAllSection3=document.querySelectorAll(".pAllSection3")

let p_1=pAllSection3[0] 
let p_2=pAllSection3[1]
let p_3=pAllSection3[2]
let p_4=pAllSection3[3]
let p_5=pAllSection3[4]
let p_6=pAllSection3[5]

cube1.addEventListener("mouseover", function () {
    cube1.style.backgroundColor="rgb(78, 181, 255)" 

    iconeGuitar.style.color="white"
    h3_1.style.color="white"
    p_1.style.color="white"
    cube1.addEventListener("mouseout", function () {
        cube1.style.backgroundColor="white" 

        iconeGuitar.style.color="rgb(78, 181, 255)"
        h3_1.style.color="rgb(40, 64, 89)"
        p_1.style.color="rgb(72, 73, 76)"
    })
})

cube2.addEventListener("mouseover", function () {
    cube2.style.backgroundColor="rgb(253, 166, 109)" 

    iconeGame.style.color="white"
    h3_2.style.color="white"
    p_2.style.color="white"
    cube2.addEventListener("mouseout", function () {
        cube2.style.backgroundColor="white" 

        iconeGame.style.color="rgb(253, 166, 109)"
        h3_2.style.color="rgb(40, 64, 89)"
        p_2.style.color="rgb(72, 73, 76)"
    })
})

cube3.addEventListener("mouseover", function () {
    cube3.style.backgroundColor="rgb(230, 0, 104)" 

    iconeClock.style.color="white"
    h3_3.style.color="white"
    p_3.style.color="white"
    cube3.addEventListener("mouseout", function () {
        cube3.style.backgroundColor="white" 

        iconeClock.style.color="rgb(230, 0, 104)"
        h3_3.style.color="rgb(40, 64, 89)"
        p_3.style.color="rgb(72, 73, 76)"
    })
})

cube4.addEventListener("mouseover", function () {
    cube4.style.backgroundColor="rgb(254, 186, 42)" 

    iconePc.style.color="white"
    h3_4.style.color="white"
    p_4.style.color="white"
    cube4.addEventListener("mouseout", function () {
        cube4.style.backgroundColor="white" 

        iconePc.style.color="rgb(254, 186, 42)"
        h3_4.style.color="rgb(40, 64, 89)"
        p_4.style.color="rgb(72, 73, 76)"
    })
})

cube5.addEventListener("mouseover", function () {
    cube5.style.backgroundColor="rgb(253, 87, 40)" 

    iconeBuild.style.color="white"
    h3_5.style.color="white"
    p_5.style.color="white"
    cube5.addEventListener("mouseout", function () {
        cube5.style.backgroundColor="white" 

        iconeBuild.style.color="rgb(253, 87, 40)"
        h3_5.style.color="rgb(40, 64, 89)"
        p_5.style.color="rgb(72, 73, 76)"
    })
})

cube6.addEventListener("mouseover", function () {
    cube6.style.backgroundColor="rgb(20, 218, 206)" 

    iconeCoffee.style.color="white"
    h3_6.style.color="white"
    p_6.style.color="white"
    cube6.addEventListener("mouseout", function () {
        cube6.style.backgroundColor="white" 

        iconeCoffee.style.color="rgb(20, 218, 206)"
        h3_6.style.color="rgb(40, 64, 89)"
        p_6.style.color="rgb(72, 73, 76)"
    })
})



export{cube1,cube2,cube3,cube4,cube5,cube6}


