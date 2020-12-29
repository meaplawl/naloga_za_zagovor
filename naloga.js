/**
JAVASCRIPT 
**/
class kandidat {
    constructor(ime, priimek, mail, datum, spol, naslov, izobrazba, znanje){
        this.ime = ime;
        this.priimek = priimek;
        this.mail = mail;
        this.datum = datum;
        this.spol = spol;
        this.naslov = naslov;
        this. izobrazba = izobrazba;
        this.znanje = znanje;
    }
}

//document.getElementById("gumb").addEventListener("click", onClick); //eventlistener na gumb, da ob kliku zažene formo
var vloga = new kandidat();

function onClick(){
    vloga.ime = document.getElementById("name").value;
    vloga.priimek = document.getElementById("priimek").value;
    vloga.mail = document.getElementById("email").value;
    vloga.datum = document.getElementById("datumrojstva").value;
    if (document.querySelector('input[name="spol"]:checked').value == 1){
        vloga.spol="moški";
    } else {
        vloga.spol ="ženski";
    }

    console.log(vloga);
}
