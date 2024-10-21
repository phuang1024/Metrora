let TEMPO = 100;


function updateSystem() {
    TEMPO = Math.round(TEMPO);
    TEMPO = Math.max(Math.min(TEMPO, 300), 30);
    document.getElementById("tempo").innerHTML = TEMPO;
    document.getElementById("ph").innerHTML = "pH: " + getPh(TEMPO).toFixed(2);
    document.getElementById("fact").innerHTML = getFact(TEMPO);
    document.getElementById("barbell").innerHTML = calcBarbell(TEMPO);
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


function calcBarbell(n) {
    if (n == 135) {
        return "Churn Knee Bam Vos plate.";
    }

    n -= 45;
    let s = "bar, ";
    while (n >= 90) {
        s += "plate, ";
        n -= 90;
    }
    while (n >= 50) {
        s += "25, ";
        n -= 50;
    }
    while (n >= 20) {
        s += "10, ";
        n -= 20;
    }
    while (n >= 10) {
        s += "5, ";
        n -= 10;
    }
    while (n >= 5) {
        s += "2.5, ";
        n -= 5;
    }
    if (n > 0) {
        s += "(+" + n + "), ";
    }

    // remove trailing comma
    s = s.substring(0, s.length - 2);

    return s;
}


updateSystem();
