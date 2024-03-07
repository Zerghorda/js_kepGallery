import { KEPEK } from "./adatok.js";
import { htmlOsszeAllit } from "./fuggvenyek.js";

/*1. feladat:  galéria kisképeinek elhelyezése */
/* fogd meg a .galeria elemet */
const galeriaELEM = document.getElementsByClassName("galeria")[0];
console.log(galeriaELEM);
galeriaELEM.innerHTML = htmlOsszeAllit(KEPEK);
/* írd bele az összeálíltott html képsorozatot */

/*2. feladat  A .nagykep divben lévő img elem megfogása */
const nagykepIMGELEM = document.querySelector(".nagykep img");
console.log(nagykepIMGELEM);
/* A .nagykep div megfogása */
const nagykepDIVELEM = document.querySelector(".nagykep");
/*3. feladat-  eseménykezelő hozzáadása a kisképekhez  */
/* Az előzőekben létrehozott kisképek megfogása (querySelectorAll) - ez egy lista lesz */
const kiskepekELEMEK = document.querySelectorAll(".kep");
/* eseménykezelő hozzáadása a kisképekhez, ciklussal */
for (let index = 0; index < kiskepekELEMEK.length; index++) {
  kiskepekELEMEK[index].addEventListener("click", function (event) {
    nagykepIMGELEM.src = event.target.src;
  });
}
/* Az eseménykezelő függvényében: ha a kisképre kattintunk, akkor a nagykép src attribútumát le kell cserélni a kiskép src attribútumában megadott elérési útvonalra  */

let aktIndex = 0;
/* 4. feladat .bal és a .jobb gombokra kattintva léptessük a galériát */
const jobbgombELEM = document.querySelector(".jobb");
jobbgombELEM.addEventListener("click", function () {
  aktIndex++;
  aktIndex = aktIndex % KEPEK.length;
  nagykepIMGELEM.src = KEPEK[aktIndex].kep;
});
const balgombELEM = document.querySelector(".bal");
balgombELEM.addEventListener("click", function () {
  aktIndex--;
  if (aktIndex === -1) {
    aktIndex = KEPEK.length - 1;
    nagykepIMGELEM.src = KEPEK[aktIndex].kep;
  }
  nagykepIMGELEM.src = KEPEK[aktIndex].kep;
});
