import { SZEMELYLISTA } from "./adat.js";



export function listaKiir(lista){
    for (let i = 0; i < lista.length; i++) {
            console.log(lista[i].nev, lista[i].tel)
            
    }
}

export function listaOsszeallit(){
    let txt = "<ul>"
    for (let index = 0; index < SZEMELYLISTA.length; index++) {
            txt += `<li>${SZEMELYLISTA[index].nev} tel: ${SZEMELYLISTA[index].tel}</li>`
    }
    txt += "</ul>"
    return txt
}

export function tablazatbaOsszeallit(){
    let szoveg = `<table><tr><th>Név</th>
                             <th>Tel</th>
                             <th>Barát</th>
                             <th>Kor</th>
                             </tr>`
    for (let index = 0; index < SZEMELYLISTA.length; index++) {
        /* szoveg += `<td>${SZEMELYLISTA[index].nev}</td>` */
        szoveg += `<tr><td>${SZEMELYLISTA[index].nev}</td>
        <td>${SZEMELYLISTA[index].tel}</td>
        <td>${SZEMELYLISTA[index].barat}</td>
        <td>${SZEMELYLISTA[index].kor}</td>
        </tr>`
    }
    return szoveg
}