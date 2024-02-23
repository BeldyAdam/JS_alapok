import { SZEMELYLISTA } from "./adat.js";
import { listaKiir, listaOsszeallit, tablazatbaOsszeallit } from "./fuggvenyek.js";

listaKiir(SZEMELYLISTA)

/* Megfogom a lista div elemet */
/* const LISTAELEM = document.getElementById("lista") */
const LISTAELEM = document.querySelector("#lista")
console.log(LISTAELEM)
/* Módosítom a tartalmát */
/* LISTAELEM.innerHTML = `<h3>BAROM</h3>` */
const TABLAZATBA = document.querySelector(".tablazat")
TABLAZATBA.innerHTML = tablazatbaOsszeallit()
/* LISTAELEM.innerHTML = listaOsszeallit()
         */