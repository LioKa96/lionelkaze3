 
var tabNumeros = ["770000001","770000002", "770000003", "770000004","770000005"];
var tabSoldes = [50000, 100, 2000000,30000, 50000];
var tabCodes = ["1234","5678","9012","3456","7890"];
var nbreNum=5;
var numCourant;

 function menu() {
   var textMenu = ""+
    "-----------MENU SENMONEY---------\n"+
    "Taper le numero du service choisi\n"+
    "1 : Solde du compte\n"+
    "2 : Transfert d'argent\n"+
    "3 : Paiement de facture\n"+
    "4 : Options";
    
    var rep = window.prompt(textMenu);
    return rep;

 }

 function afficheSolde(num) {
    var indice = tabNumeros.indexOf(num);
    if(indice != -1){
        var code = window.prompt("Donnez votre code: ");
        if(code==tabCodes[indice]){
            alert("Votre solde est de : "+tabSoldes[indice]);
        }
    }else{
        alert("Votre numéro est n'existe pas!")
    }
   
 }

 function main(){
     var rep = menu();
     var numCourant = document.getElementById("num").value;
     switch(rep){
        case "1":
            afficheSolde(numCourant);
            break;

     }

function etapeSuivant(){
    alert("Voulez vous retourner au menu principal?");
 }
}
