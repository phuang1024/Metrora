let TEMPO = 100;


function updateSystem() {
    TEMPO = Math.round(TEMPO);
    TEMPO = Math.max(Math.min(TEMPO, 300), 30);
    document.getElementById("tempo").innerHTML = TEMPO;
    document.getElementById("ph").innerHTML = "pH: " + getPh(TEMPO).toFixed(2);
}


function addTempo(n) {
    TEMPO += n;
    updateSystem();
}

function getPh(n) {
    return Math.log(n) / Math.log(2) * 10;
}

function setPh(n) {
    TEMPO = Math.pow(2, n / 10);
    updateSystem();
}

function addPh(n) {
    setPh(getPh(TEMPO) + n);
}


updateSystem();
