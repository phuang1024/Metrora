let TEMPO = 100;


function updateSystem() {
    document.getElementById("tempo").innerHTML = TEMPO;
}


function tempoAddOne() {
    TEMPO += 1;
    updateSystem();
}

function tempoSubOne() {
    TEMPO -= 1;
    updateSystem();
}

function tempoAddFive() {
    TEMPO += 5;
    updateSystem();
}

function tempoSubFive() {
    TEMPO -= 5;
    updateSystem();
}


updateSystem();
