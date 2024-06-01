

function calculaJugada(jugada, numeroRuleta) {
    let increment = -10;

    if (isNaN(jugada)) {
        if (
            (jugada === "parell" && [2, 4, 6, 8, 10].includes(numeroRuleta)) ||
            (jugada === "imparell" && [1, 3, 5, 7, 9].includes(numeroRuleta)) ||
            (jugada === "vermell" && [1, 3, 6, 8, 9].includes(numeroRuleta)) ||
            (jugada === "negre" && [2, 4, 5, 7, 10].includes(numeroRuleta))
        ) {
            increment = 10;
        }
    } else {
        if (jugada == numeroRuleta) {
            increment = 90;
        }
    }

    return increment;
}

export default calculaJugada;