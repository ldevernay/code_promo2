var tries;
var triedLetters;
var word;
var wordArray;

var result;
var resultArray;

init();

function init() {
    tries = 10;
    triedLetters = [];
    word = randomWord();
    wordArray = word.split('');

    result = '';
    for (i = 0; i < word.length; i++) {
        if (word[i] == ' ') {
            result += " ";
        }
        else {
            result += '-';
        }
    }
    resultArray = result.split('');
    console.log(result);

    console.log(word);
}

function randomWord() {
    var dico = ["crayon", "stylo", "feutre", "pointe", "mine", "gomme", "dessin", "coloriage", "rayure", "peinture", "pinceau", "couleur", "craie", "papier", "feuille", "cahier", "carnet", "carton", "ciseaux", "decoupage", "pliage", "pli", "colle", "affaire", "boite", "casier", "caisse", "trousse", "cartable", "jouet", "jeu", "pion", "de", "domino", "puzzle", "cube", "perle", "chose", "forme : carre", "rond", "pate à modeler", "tampon", "livre", "histoire", "bibliotheque", "image", "album", "titre", "bande dessinee", "conte", "dictionnaire", "magazine", "catalogue", "page", "ligne", "mot", "enveloppe", "etiquette", "carte d’appel : affiche", "alphabet", "appareil", "camescope", "cassette", "cede", "cederom", "chaine", "chanson", "chiffre", "contraire", "difference", "doigt", "ecran", "ecriture", "film", "fois", "idee", "instrument", "intrus", "lettre", "liste", "magnetoscope", "main", "micro", "modele", "musique", "nom", "nombre", "orchestre", "ordinateur", "photo", "point", "poster", "pouce", "prenom", "question", "radio", "sens", "tambour", "telecommande", "telephone", "television", "trait", "trompette", "voix", "xylophone", "zero"];
    return dico[Math.floor(Math.random() * dico.length)].toLocaleUpperCase();
}

function sendLetter() {
    var letter = document.getElementById("letter").value.toUpperCase();
    if (letter.length != 1) {
        if (letter == word) {
            alert("Gagné! Le mot était bien : " + word)
            init();
            return;
        } else {
            alert("Perdu! Le mot était : " + word);
            init();
        }
    } else if (triedLetters.indexOf(letter) != -1) {
        alert("Lettre déjà essayée");
    } else if (word.indexOf(letter) == -1) {
        tries--;
        triedLetters.push(letter);
        alert("Loupé! Il reste " + tries + " essais.");
    } else {
        triedLetters.push(letter);
        for (i = 0; i < wordArray.length; i++) {
            if (wordArray[i] == letter) {
                resultArray[i] = letter;
            }
        }
        var state = resultArray.join('');

        if (resultArray.join('') == word) {
            alert("Gagné! Le mot était bien : " + word)
            init();
            return;
        }

        alert("Bien joué, tu en es là : " + state + " Il reste " + tries + " essais.");
    }
    if (tries == 0) {
        alert("Perdu! Le mot était : " + word);
        init();
    }
}


