function ShowMoreFunction() {
    var less = document.getElementById('ShowLess');
    var more = document.getElementById('ShowMore');
    var myBtn = document.getElementById('ShowMoreBtn');

    if (less.style.display == "none") {
        less.style.display = "inline";
        myBtn.innerHTML = "Više";
        more.style.display = "none";
    } else {
        less.style.display = "none";
        myBtn.innerHTML = "Manje";
        more.style.display = "inline";
    }

}



function alertProvera() {
    var email = document.forms["mojaForma"]["mail"];
    var tel = document.forms["mojaForma"]["brTel"];
    var karte = document.forms["mojaForma"]["brKarata"];
    var film = document.forms["mojaForma"]["izborFilma"];
    var radio = document.forms["mojaForma"]["radio"];

    if (email.value === "" || email.value === null) {
        window.alert("Unesite E-Mail adresu!");
        email.style.borderColor = "red";
        email.focus();
        return false;
    }

    if (tel.value === "" || tel.value === null) {
        window.alert("Unesite broj telefona!");
        tel.style.borderColor = "red";
        tel.focus();
        return false;
    }

    if (karte.value === "" || karte.value === null) {
        window.alert("Izaberite broj karata!");
        karte.style.borderColor = "red";
        karte.focus();
        return false;
    }

    if (film.value === "" || film.value === null) {
        window.alert("Izaberite film!");
        film.style.borderColor = "red";
        film.focus();
        return false;
    }

    if (radio.value === "" || radio.value === null) {
        window.alert("Izaberite vreme projekcije");
        radio.focus();
        return false;
    }

    else {
        window.alert("Uspešno ste rezervisali film! Vidimo se!");
        localStorageForm();
        br++;
        return true;
    }




}

function localStorageForm() {
    event.preventDefault();

    var email = document.getElementById('mail').value;
    var tel = document.getElementById('brTel').value;
    var karte = document.getElementById('brKarata').value;
    var film = document.getElementById('izborFilma').value;


    const radioButtons = document.querySelectorAll('input[name="radio"]');

    let vrednost;

    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            vrednost = radioButton.value;
            break;
        }
    }


    localStorage.setItem('is_mail', email);
    localStorage.setItem('is_brTel', tel);
    localStorage.setItem('is_brKarata', karte);
    localStorage.setItem('is_izborFilma', film);
    localStorage.setItem('is_radio', vrednost);

    localStorageShow();
}


function localStorageShow() {

    var tabela = document.getElementsByTagName("body");
    var row = 1;

    var mail = localStorage.is_mail;
    var tel = localStorage.getItem('is_brTel');
    var karte = localStorage.getItem('is_brKarata');
    var film = localStorage.getItem('is_izborFilma');
    var radio = localStorage.getItem('is_radio');

    tabela.innerHTML = "<table> <tr> <th>E-Mail Adresa</th> <th>Broj telefona</th> <th>Broj karata</th> <th>Naziv Filma</th> <th>Vreme produkcije</th> </tr> </table>"

}

var vals = [];
var keys = [];
var niz = [];

function read(storage, keys, vals, display) {
    keys.length = 0;
    vals.length = 0;
    let idx = 0;
    while (storage.key(idx)) {

        let k = storage.key(idx);
        let v = storage.getItem(k);

        keys.push(k);
        vals.push(v);

        idx++;


    }

    var newRow = display.insertRow(1);

    var cel1 = newRow.insertCell(0);
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3);
    var cel5 = newRow.insertCell(4);
    var cel6 = newRow.insertCell(5);

    cel1.innerHTML = vals[2];
    cel2.innerHTML = vals[3];
    cel3.innerHTML = vals[0];
    cel4.innerHTML = vals[4];
    cel5.innerHTML = vals[1];

    cel6.innerHTML = "<button onClick='brisanje(this)' class='btnObrisi'> Obriši </button>";



}


function clearStorage() {
    localStorage.clear();
}



function brisanje(red) {

    var x = red.parentNode.parentNode;
    x.remove();

}