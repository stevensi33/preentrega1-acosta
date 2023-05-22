function preguntados() {

    let nombre = prompt("¿Cual es tu nombre?");
    let puntaje = 0;
    let intentos = 0;
    let continuar = ""
    do {

        alert(`Bienvenido ${nombre} a Preguntados`);
        intentos++;
        puntaje = 0;

        // Pregunta 1
        const respuesta1 = prompt("¿En qué año se descubrió América?");
        if (respuesta1.toLowerCase() === "1492") {
            puntaje++;
            alert("¡Respuesta correcta!");
        } else {
            alert("Respuesta incorrecta. La respuesta correcta es 1492.");
        }

        // Pregunta 2
        const respuesta2 = prompt("¿Cuál es la capital de Francia?");
        if (respuesta2.toLowerCase() === "paris") {
            puntaje++;
            alert("¡Respuesta correcta!");
        } else {
            alert("Respuesta incorrecta. La respuesta correcta es París.");
        }

        // Pregunta 3
        const respuesta3 = prompt("¿Cuál es el río más largo del mundo?");
        if (respuesta3.toLowerCase() === "amazonas") {
            puntaje++;
            alert("¡Respuesta correcta!");
        } else {
            alert("Respuesta incorrecta. La respuesta correcta es Amazonas.");
        }

        // Pregunta 4
        const respuesta4 = prompt("¿Cuál es el símbolo químico del oro?");
        if (respuesta4.toLowerCase() === "au") {
            puntaje++;
            alert("¡Respuesta correcta!");
        } else {
            alert("Respuesta incorrecta. La respuesta correcta es Au.");
        }

        // Pregunta 5
        const respuesta5 = prompt("¿Cuál es el planeta más grande del sistema solar?");
        if (respuesta5.toLowerCase() === "jupiter") {
            puntaje++;
            alert("¡Respuesta correcta!");
        } else {
            alert("Respuesta incorrecta. La respuesta correcta es Júpiter.");
        }

        alert("Tu puntaje es: " + puntaje + "/5");
        if (puntaje < 5) {
            continuar = prompt("deseas volver a intentarlo \n - Si \n - No")
        } else {
            alert(`felicidades lo has superado, tu puntaje es ${puntaje}, lo hiciste en ${intentos} intentos`)
            break;
        }

        if (continuar.toLowerCase() === "si") {
            continue;
        } else {
            break;
        }


    } while (puntaje !== 5)

}
// Llamar a la función para comenzar el juego
preguntados();
