/* feladat jelenítsük meg kis kártyák formájában a virágok neveit és képeit
kell: 
objektumlista - adat.js
KEPEK mappa
Virag osztály - egyetlen virág megjelenításe

*/
import { viragLista } from "./adat.js";
import AdminViragok from "./AdminViragok.js";
import Viragok from "./Viragok.js";

document.getElementById("virag").addEventListener("click", () => {
    document.querySelector("article").innerHTML = ""
    new Viragok(viragLista, document.querySelector("article"))
})
document.getElementById("admin").addEventListener("click", () => {
    document.querySelector("article").innerHTML = ""
    new AdminViragok(viragLista, document.querySelector("article"))
})

window.addEventListener("kivalaszt", (event) => {
    console.log(event.detail)
})
window.addEventListener("torol", (event) => {
    console.log(event.detail)
})


/* legyen egy admin felület, ahol táblázatosan listázom a virágokat és ott legyen egy űrlap is, ahol új virágot tudok felvinni 
Minden virág mellett legyen egy törlés gomb is. 
osztályok:
AdminViragSor - egyetlen egy virág a táblázatban
AdminViragok - táblázat az összes sorral.  - ez példányosítja az AdminViragSor
main-ben példányosítjuk az AdminViragok- at. 


Urlap - itt lenne a felviteli űrlap

*/
