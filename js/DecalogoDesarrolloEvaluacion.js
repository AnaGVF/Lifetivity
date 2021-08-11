var calificacion = 0;

// Respuestas Correctas 

    // #1
    var correcto = document.createElement("div");
    correcto.classList.add("alert");
    correcto.classList.add("alert-success");
    correcto.style.width = "100%";
    correcto.style.marginTop = "20px";
    correcto.textContent = "¡Correcto!";
    correcto.style.fontSize = "small";

    // #2
    var correcto_2 = correcto.cloneNode(true);

    // #3
    var correcto_3 = correcto.cloneNode(true);

    // #4
    var correcto_4 = correcto.cloneNode(true);

    // #5
    var correcto_5 = correcto.cloneNode(true);

    // #6
    var correcto_6 = correcto.cloneNode(true);

    // #7
    var correcto_7 = correcto.cloneNode(true);

    // #8
    var correcto_8 = correcto.cloneNode(true);

    // #9
    var correcto_9 = correcto.cloneNode(true);

    // #10
    var correcto_10 = correcto.cloneNode(true);

    // #11
    var correcto_11 = correcto.cloneNode(true);

    // #12
    var correcto_12 = correcto.cloneNode(true);


// Respuestas Incorrectas 

    // #1
    var incorrecto = document.createElement("div");
    incorrecto.classList.add("alert");
    incorrecto.classList.add("alert-danger");
    incorrecto.style.width = "100%";
    incorrecto.style.marginTop = "20px";
    incorrecto.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es Orden.";
    incorrecto.style.fontSize = "small";

    // #2
    var incorrecto_2 = incorrecto.cloneNode(true);
    incorrecto_2.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es Limpieza.";

    // #3
    var incorrecto_3 = incorrecto.cloneNode(true);
    incorrecto_3.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es Puntualidad.";

    // #4
    var incorrecto_4 = incorrecto.cloneNode(true);
    incorrecto_4.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es Responsabilidad.";

    // #5
    var incorrecto_5 = incorrecto.cloneNode(true);
    incorrecto_5.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es Deseo de superación.";

    // #6
    var incorrecto_6 = incorrecto.cloneNode(true);
    incorrecto_6.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es Honradez.";

    // #7
    var incorrecto_7 = incorrecto.cloneNode(true);
    incorrecto_7.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es Respeto al derecho de los demás.";

    // #8
    var incorrecto_8 = incorrecto.cloneNode(true);
    incorrecto_8.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es Respeto a la ley y a los reglamentos.";

    // #9
    var incorrecto_9 = incorrecto.cloneNode(true);
    incorrecto_9.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es amor al trabajo.";

    // #10
    var incorrecto_10 = incorrecto.cloneNode(true);
    incorrecto_10.textContent = "¡Oh no! Tu respuesta es incorrecta. La respuesta correcta es Afán por el ahorro y la inversión.";

    // #11
    var incorrecto_11 = incorrecto.cloneNode(true);
    incorrecto_11.textContent = "¡Oh no! Tu respuesta es incorrecta. La frase correcta es 'No dejes para mañana lo que puedes hacer hoy'. Recuerda siempre intentar poner tus prioridades en alto y aprovechar al máximo el tiempo de cada día.";

    // #12
    var incorrecto_12 = incorrecto.cloneNode(true);
    incorrecto_12.textContent = "¡Oh no! Tu respuesta es incorrecta. El practicar un idioma cada día mejora la capacidad de memoria, la toma de decisiones y abre un nuevo mundo de cultura global para explorar.";


    // Función de Calificar 
    function submit() {
        // Pregunta 9
        var input_9 = document.getElementById("amor").value;
        if(input_9 == 9) {
            document.getElementById("retroalimentacion_9").appendChild(correcto_9);
            document.getElementById("retroalimentacion_9").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_9").appendChild(incorrecto_9);
            document.getElementById("retroalimentacion_9").classList.add("w-100");
        }

        // Pregunta 4
        var input_4 = document.getElementById("responsabilidad").value;
        if(input_4 == 4) {
            document.getElementById("retroalimentacion_4").appendChild(correcto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_4").appendChild(incorrecto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
        }

        // Pregunta 6
        var input_6 = document.getElementById("honradez").value;
        if(input_6 == 6) {
            document.getElementById("retroalimentacion_6").appendChild(correcto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_6").appendChild(incorrecto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
        }

        // Pregunta 2
        var input_2 = document.getElementById("limpieza").value;
        if(input_2 == 2) {
            document.getElementById("retroalimentacion_2").appendChild(correcto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_2").appendChild(incorrecto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
        }

        // Pregunta 10
        var input_10 = document.getElementById("ahorro").value;
        if(input_10 == 10) {
            document.getElementById("retroalimentacion_10").appendChild(correcto_10);
            document.getElementById("retroalimentacion_10").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_10").appendChild(incorrecto_10);
            document.getElementById("retroalimentacion_10").classList.add("w-100");
        }

        // Pregunta 1
        var input_1 = document.getElementById("orden").value;
        if(input_1 == 1) {
            document.getElementById("retroalimentacion_1").appendChild(correcto);
            document.getElementById("retroalimentacion_1").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_1").appendChild(incorrecto);
            document.getElementById("retroalimentacion_1").classList.add("w-100");
        }

        // Pregunta 3
        var input_3 = document.getElementById("puntualidad").value;
        if(input_3 == 3) {
            document.getElementById("retroalimentacion_3").appendChild(correcto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_3").appendChild(incorrecto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
        }

        // Pregunta 5
        var input_5 = document.getElementById("superacion").value;
        if(input_5 == 5) {
            document.getElementById("retroalimentacion_5").appendChild(correcto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_5").appendChild(incorrecto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
        }

        // Pregunta 8
        var input_8 = document.getElementById("ley").value;
        if(input_8 == 8) {
            document.getElementById("retroalimentacion_8").appendChild(correcto_8);
            document.getElementById("retroalimentacion_8").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_8").appendChild(incorrecto_8);
            document.getElementById("retroalimentacion_8").classList.add("w-100");
        }

        // Pregunta 7
        var input_7 = document.getElementById("derecho").value;
        if(input_7 == 7) {
            document.getElementById("retroalimentacion_7").appendChild(correcto_7);
            document.getElementById("retroalimentacion_7").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_7").appendChild(incorrecto_7);
            document.getElementById("retroalimentacion_7").classList.add("w-100");
        }

        // Pregunta #11
        if ($('#hoy').is(':checked')) {
            document.getElementById("retroalimentacion_11").appendChild(correcto_11);
            document.getElementById("retroalimentacion_11").classList.add("w-100");
            calificacion++;
        } else if ($('#nunca').is(':checked') || $('#maniana').is(':checked') || $('#mal').is(':checked')) {
            document.getElementById("retroalimentacion_11").appendChild(incorrecto_11);
            document.getElementById("retroalimentacion_11").classList.add("w-100");
        }

        // Pregunta #12
        if ($('#memoria').is(':checked')) {
            document.getElementById("retroalimentacion_12").appendChild(correcto_12);
            document.getElementById("retroalimentacion_12").classList.add("w-100");
            calificacion++;
        } else if ($('#distraccion').is(':checked') || $('#maldad').is(':checked') || $('#pereza').is(':checked')) {
            document.getElementById("retroalimentacion_12").appendChild(incorrecto_12);
            document.getElementById("retroalimentacion_12").classList.add("w-100");
        }
        
        var calificacionFinal = (calificacion/12)*10;

        document.getElementById("calificacion").textContent = calificacionFinal;

        if(calificacion >= 6) {
            document.getElementById("calificacion").style.color = "green";
        } else {
            document.getElementById("calificacion").style.color = "red";
        }
        
    }