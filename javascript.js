"use strict"

//cia sakom, ka daryti mygtukui po paspaudimo
const pradeti = document.getElementById("mygtukas");
pradeti.addEventListener("click", uzduotiesNumerisVardai);

//cia vieta-lentele, kur sukuriami ir idedami nauji elementai
const vietaVardui = document.getElementById("lentele");


function uzduotiesNumerisVardai() {
    let mokiniuSkaicius = document.getElementById("skaicius").value;
    let numeriai = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    for (let j = 0; j < mokiniuSkaicius; j++) {
            const uzduotiesEilute = document.createElement("tr");
            uzduotiesEilute.id = "vardasUzduotis";
            const uzduotiesLaukas = document.createElement("td");
            const uzduotis = Math.floor(Math.random() * numeriai.length);
            const panaudotiNumeriai = numeriai.splice(uzduotis, 1);
        if (panaudotiNumeriai > 0) {
            uzduotiesLaukas.textContent = panaudotiNumeriai;
            vietaVardui.appendChild(uzduotiesEilute).appendChild(uzduotiesLaukas);
        } else {
            alert("Nepakanka užduočių! Yra tik 20 skirtingų.");
        }
        for (let i = 0; i < mokiniuSkaicius; i++) {
        }
            const vardoTD = document.createElement("td")
            vardoTD.id = "vardas";
            const vardoLaukas = document.createElement("input");
            // const vietaVardui=document.getElementById("vardas");
            //cia nurodom kur(vietaVardui ir ka(vardoLaukas) ideti su appendChild
            vardoLaukas.placeholder = "Vardas";
            vietaVardui.appendChild(uzduotiesEilute).appendChild(vardoLaukas);
    }
}



