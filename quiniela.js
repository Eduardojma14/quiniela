// Resultados reales de los partidos (simulados)
const resultadosReales = [
    { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 2, goles2: 1 },
    { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 3, goles2: 1 },
    { equipo1: 'Francia', equipo2: 'España', goles1: 1, goles2: 2 },
    { equipo1: 'Japon', equipo2: 'China', goles1: 0, goles2: 0 },
    { equipo1: 'Italia', equipo2: 'Holanda', goles1: 1, goles2: 3 },
];

// Predicciones de los participantes
const predicciones = {
    Luis: [
        { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 2, goles2: 0 },
        { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 1, goles2: 1 },
        { equipo1: 'Francia', equipo2: 'España', goles1: 0, goles2: 2 },
        { equipo1: 'Japon', equipo2: 'China', goles1: 0, goles2: 2 },
        { equipo1: 'Italia', equipo2: 'Holanda', goles1: 2, goles2: 2 },
    ],
    Eduardo: [
        { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 1, goles2: 4 },
        { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 3, goles2: 0 },
        { equipo1: 'Francia', equipo2: 'España', goles1: 2, goles2: 2 },
        { equipo1: 'Japon', equipo2: 'China', goles1: 2, goles2: 1 },
        { equipo1: 'Italia', equipo2: 'Holanda', goles1: 3, goles2: 2 },
    ],
    Taty: [
        { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 2, goles2: 0 },
        { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 1, goles2: 1 },
        { equipo1: 'Francia', equipo2: 'España', goles1: 3, goles2: 2 },
        { equipo1: 'Japon', equipo2: 'China', goles1: 2, goles2: 2 },
        { equipo1: 'Italia', equipo2: 'Holanda', goles1: 1, goles2: 3 },
    ],
    Mamá: [
        { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 1, goles2: 2 },
        { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 0, goles2: 1 },
        { equipo1: 'Francia', equipo2: 'España', goles1: 2, goles2: 3 },
        { equipo1: 'Japon', equipo2: 'China', goles1: 1, goles2: 1 },
        { equipo1: 'Italia', equipo2: 'Holanda', goles1: 2, goles2: 2 },
    ],
    Papá: [
        { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 2, goles2: 1 },
        { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 1, goles2: 1 },
        { equipo1: 'Francia', equipo2: 'España', goles1: 3, goles2: 2 },
        { equipo1: 'Japon', equipo2: 'China', goles1: 1, goles2: 1 },
        { equipo1: 'Italia', equipo2: 'Holanda', goles1: 2, goles2: 3 },
    ],
    Luisito: [
        { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 2, goles2: 2 },
        { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 4, goles2: 3 },
        { equipo1: 'Francia', equipo2: 'España', goles1: 1, goles2: 0 },
        { equipo1: 'Japon', equipo2: 'China', goles1: 3, goles2: 1 },
        { equipo1: 'Italia', equipo2: 'Holanda', goles1: 2, goles2: 1 },
    ],
    Leito: [
        { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 2, goles2: 3 },
        { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 0, goles2: 1 },
        { equipo1: 'Francia', equipo2: 'España', goles1: 4, goles2: 3 },
        { equipo1: 'Japon', equipo2: 'China', goles1: 3, goles2: 2 },
        { equipo1: 'Italia', equipo2: 'Holanda', goles1: 0, goles2: 3 },
    ],
    Dante: [
        { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 2, goles2: 4 },
        { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 2, goles2: 2 },
        { equipo1: 'Francia', equipo2: 'España', goles1: 2, goles2: 0 },
        { equipo1: 'Japon', equipo2: 'China', goles1: 1, goles2: 0 },
        { equipo1: 'Italia', equipo2: 'Holanda', goles1: 1, goles2: 2 },
    ],
    Toto: [
        { equipo1: 'Brasil', equipo2: 'Argentina', goles1: 1, goles2: 1 },
        { equipo1: 'Venezuela', equipo2: 'Chile', goles1: 2, goles2: 3 },
        { equipo1: 'Francia', equipo2: 'España', goles1: 2, goles2: 2 },
        { equipo1: 'Japon', equipo2: 'China', goles1: 2, goles2: 3 },
        { equipo1: 'Italia', equipo2: 'Holanda', goles1: 2, goles2: 1 },
    ],
};

// Función para calcular los puntos de un partido
function calcularPuntos(real, prediccion) {
    const golesReal1 = real.goles1;
    const golesReal2 = real.goles2;
    const golesPred1 = prediccion.goles1;
    const golesPred2 = prediccion.goles2;

    // Puntos por resultado exacto
    if (golesReal1 === golesPred1 && golesReal2 === golesPred2) {
        return 5;
    }

    // Puntos por acertar el ganador y uno de los resultados
    const ganadorReal = golesReal1 > golesReal2 ? 1 : golesReal1 < golesReal2 ? 2 : 0;
    const ganadorPred = golesPred1 > golesPred2 ? 1 : golesPred1 < golesPred2 ? 2 : 0;

    if (ganadorReal === ganadorPred) {
        if (golesReal1 === golesPred1 || golesReal2 === golesPred2) {
            return 4;
        } else {
            return 3;
        }
    }

    // Puntos por acertar solo uno de los resultados
    if (golesReal1 === golesPred1 || golesReal2 === golesPred2) {
        return 1;
    }

    // Si no acierta nada
    return 0;
}

// Función para calcular los puntos totales de un participante
function calcularPuntosTotales(participante, resultadosReales, predicciones) {
    let puntosTotales = 0;
    for (let i = 0; i < resultadosReales.length; i++) {
        const puntosPartido = calcularPuntos(resultadosReales[i], predicciones[participante][i]);
        puntosTotales += puntosPartido;
    }
    return puntosTotales;
}

// Mostrar los resultados reales en la página
const resultadosRealesDiv = document.getElementById('resultados-reales');

for (const resultado of resultadosReales) {
    const resultadoDiv = document.createElement('div');
    resultadoDiv.className = 'resultado-real';
    resultadoDiv.innerHTML = `
        <p>${resultado.equipo1} ${resultado.goles1} - ${resultado.goles2} ${resultado.equipo2}</p>
    `;
    resultadosRealesDiv.appendChild(resultadoDiv);
}

// Calcular y mostrar los puntos de cada participante
const participantes = ['Luis', 'Eduardo', 'Taty', 'Mamá', 'Papá', 'Luisito', 'Leito', 'Dante', 'Toto'];
const resultados = {};

for (const participante of participantes) {
    const puntos = calcularPuntosTotales(participante, resultadosReales, predicciones);
    resultados[participante] = puntos;
}

// Ordenar los participantes de mayor a menor
const participantesOrdenados = participantes.sort((a, b) => resultados[b] - resultados[a]);

// Mostrar los resultados en la página
const resultadosDiv = document.getElementById('resultados');
let maxPuntos = 0;
let ganador = '';

for (const participante of participantes) {
    const puntos = resultados[participante];
    const participanteDiv = document.createElement('div');
    participanteDiv.className = 'participante';
    participanteDiv.textContent = `${participante}: ${puntos} puntos`;

    if (puntos > maxPuntos) {
        maxPuntos = puntos;
        ganador = participante;
    }

    resultadosDiv.appendChild(participanteDiv);
}

// Resaltar al ganador
const ganadorDiv = Array.from(document.querySelectorAll('.participante')).find(div => 
    div.textContent.includes(ganador)
);

if (ganadorDiv) {
    ganadorDiv.classList.add('ganador');
}

// Mostrar las predicciones en la página
const prediccionesDiv = document.getElementById('predicciones');

for (const participante of participantes) {
    const prediccionParticipante = document.createElement('div');
    prediccionParticipante.className = 'prediccion';
    prediccionParticipante.innerHTML = `<h3>${participante}</h3>`;

    for (let i = 0; i < predicciones[participante].length; i++) {
        const partido = predicciones[participante][i];
        prediccionParticipante.innerHTML += `
            <p>${partido.equipo1} ${partido.goles1} - ${partido.goles2} ${partido.equipo2}</p>
        `;
    }

    prediccionesDiv.appendChild(prediccionParticipante);
}