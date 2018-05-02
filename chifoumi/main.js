var actions = {
    1: "Ciseaux",
    2: "Feuille",
    3: "Pierre"
};

function choix(number) {
    var ordi = choixOrdi();
    console.log("Choix ordi = " + actions[ordi]);
    console.log("Notre choix = " + actions[number]);
    if (number == ordi -1 || (number ==3 && ordi == 1)){
        console.log("Gagné");
    } else if (number == ordi){
        console.log("Nul")
    } else {
        console.log("Perdu")
    }
}

function choixOrdi() {
    return Math.floor(Math.random() * 3) + 1;
}