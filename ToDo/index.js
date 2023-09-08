submitButton.addEventListener("click", funkcija);

function funkcija(event) {
    event.preventDefault();
    let unoselem = document.getElementById("unosTeksta");
    let unos = unoselem.value;
    if(unos) {
        document.getElementById("lista1").innerHTML += "<li>" + unos + "<button>X</button>" + "</li>";
        unoselem.value = "";
    }
}
unos1.addEventListener("keypress", pretraga);

function pretraga (event) {
    if(event.key === "Enter") {
    let locUnos1 = document.getElementById("unos1");
    let filtrirano = locUnos1.value.toUpperCase();
    let locLista1 = document.getElementById("lista1");
    let locStavka = locLista1.getElementsByTagName("li");
    
    let locDropUl = document.getElementById("ulId");


    for(i = 0; i < locStavka.length; i++) {
        let sadrzaj = locStavka[i].innerText  
        if(locUnos1.value === "") {
            locStavka[i].style.backgroundColor = "";
        } else if
            (sadrzaj.toUpperCase().startsWith(filtrirano)) {
                locStavka[i].style.backgroundColor = "tomato";
                locDropUl.innerHTML += locStavka[i];
                

        } else
            locStavka[i].style.backgroundColor = "";
    }
}


}
