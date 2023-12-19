/* ########################################################################################################################################################################################### */
/* Dropdown */
/* ########################################################################################################################################################################################### */


let lidDropdown=document.querySelector(".liDropdownNavHeader")

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

let ulLien=document.createElement("ul")

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// link1
let liLink1=document.createElement("li")
let aLink1=document.createElement("a")
let texteLink1=document.createTextNode("Link 1")
aLink1.setAttribute("href","")
// a modifier
aLink1.href="#rien"
aLink1.appendChild(texteLink1)
liLink1.appendChild(aLink1)

console.log(liLink1);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// link2
let liLink2=document.createElement("li")
let aLink2=document.createElement("a")
let texteLink2=document.createTextNode("Link 2")
aLink2.setAttribute("href","")
// a modifier
aLink2.href="#rien"
aLink2.appendChild(texteLink2)
liLink2.appendChild(aLink2)

console.log(liLink2);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// link3
let liLink3=document.createElement("li")
let aLink3=document.createElement("a")
let texteLink3=document.createTextNode("Link 3")
aLink3.setAttribute("href","")
// a modifier
aLink3.href="#rien"
aLink3.appendChild(texteLink3)
liLink3.appendChild(aLink3)

console.log(liLink3);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// link4
let liLink4=document.createElement("li")
let aLink4=document.createElement("a")
let texteLink4=document.createTextNode("Link 4")
aLink4.setAttribute("href","")
// a modifier
aLink4.href="#rien"
aLink4.appendChild(texteLink4)
liLink4.appendChild(aLink4)

console.log(liLink4);

// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

ulLien.appendChild(liLink1)
ulLien.appendChild(liLink2)
ulLien.appendChild(liLink3)
ulLien.appendChild(liLink4)

lidDropdown.appendChild(ulLien)

console.log(ulLien);


ulLien.style.fontSize="25px"
ulLien.style.listStyleType="none"

ulLien.style.position="absolute" // pour pas qu'il sois dans la nav (car je les crées dedsans (ce qui est juste))
ulLien.style.paddingTop="50px"


// ulLien.style.display="flex"
// ulLien.style.flexDirection="column"
// ulLien.style.alignItems="center"
// ulLien.style.justifyContent="center"



// aLink1.style.textDecoration="none"
// aLink2
// aLink3
// aLink4


// .ul{
//     font-size: 25px;
//     list-style-type: none;
//     display: flex;
//     align-items: center;
//     justify-content: space-around;
// }

// a{
//     text-decoration: none;
//     color: rgba(255, 255, 255, 0.882);
// }

// a:hover{
//     text-decoration: none;
//     color:rgba(255, 255, 255, 0.292)
// }


ulLien.style.display="none";

lidDropdown.addEventListener("click",function () {
    if(ulLien.style.display==="none"){
        ulLien.style.display="block"
    } else {
        ulLien.style.display="none";
    }
})


// exporter tjr en fin
export {lidDropdown}