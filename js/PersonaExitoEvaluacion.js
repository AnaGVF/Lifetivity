var calificacion = 0;

// Respuestas Correctas 

    // #1
    var correcto = document.createElement("div");
    correcto.classList.add("alert");
    correcto.classList.add("alert-success");
    correcto.style.width = "100%";
    correcto.style.marginTop = "20px";
    correcto.textContent = "¡Correcto!";

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

// Respuestas Incorrectas 

    // #1
    var incorrecto = document.createElement("div");
    incorrecto.classList.add("alert");
    incorrecto.classList.add("alert-danger");
    incorrecto.style.width = "100%";
    incorrecto.style.marginTop = "20px";
    incorrecto.textContent = "¡Oh no! Tu respuesta es incorrecta. Recuerda que las personas proactivas asumen la responsabilidad y se eligen su propia actitud y respuesta ante las circunstancias.";

    // #2
    var incorrecto_2 = incorrecto.cloneNode(true);
    incorrecto_2.textContent = "¡Oh no! Tu respuesta es incorrecta. Las personas deben tener una misión personal para programar su futuro, ya que de esta manera la persona puede enfocarse en sus pasiones, talentos, sueños y deseos.";

    // #3
    var incorrecto_3 = incorrecto.cloneNode(true);
    incorrecto_3.textContent = "¡Oh no! Tu respuesta es incorrecta. Es importante escuchar para poder comprender diversos puntos de vista y ser empáticos con las personas.";

    // #4
    var incorrecto_4 = incorrecto.cloneNode(true);
    incorrecto_4.textContent = "¡Oh no! Tu respuesta es incorrecta. La comunicación es importante para poder escuchar, reflexionar, responder y cooperar en un equipo.";
    
    // #5
    var incorrecto_5 = incorrecto.cloneNode(true);
    incorrecto_5.textContent = "¡Oh no! Tu respuesta es incorrecta. Recuerda que los 4 aspectos importantes del 7mo hábito son: cuerpo, espiritual, cognitivo y emocional.";

    // #6
    var incorrecto_6 = incorrecto.cloneNode(true);
    incorrecto_6.textContent = "¡Oh no! Tu respuesta es incorrecta. Stephen Covey fue el escritor del libro 'Los 7 hábitos de la gente altamente efectiva' en el año de 1989.";

    // Función de Calificar 
    function submit() {
        // Pregunta #1
        if ($('#responsabilidad').is(':checked')) {
            document.getElementById("retroalimentacion").appendChild(correcto);
            document.getElementById("retroalimentacion").classList.add("w-100");
            calificacion++;
        } else if ($('#enojo').is(':checked') || $('#pereza').is(':checked') || $('#negatividad').is(':checked')) {
            document.getElementById("retroalimentacion").appendChild(incorrecto);
            document.getElementById("retroalimentacion").classList.add("w-100");
        }

        // Pregunta #2
        if ($('#mision').is(':checked')) {
            document.getElementById("retroalimentacion_2").appendChild(correcto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
            calificacion++;
        } else if ($('#flojera').is(':checked') || $('#odio').is(':checked') || $('#empeno').is(':checked')) {
            document.getElementById("retroalimentacion_2").appendChild(incorrecto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
        }

        // Pregunta #3
        if ($('#escuchar').is(':checked')) {
            document.getElementById("retroalimentacion_3").appendChild(correcto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
            calificacion++;
        } else if ($('#saltar').is(':checked') || $('#gritar').is(':checked') || $('#ignorar').is(':checked')) {
            document.getElementById("retroalimentacion_3").appendChild(incorrecto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
        }

        // Pregunta #4
        if ($('#comunicacion').is(':checked')) {
            document.getElementById("retroalimentacion_4").appendChild(correcto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
            calificacion++;
        } else if ($('#peleas').is(':checked') || $('#inasistencia').is(':checked') || $('#distracciones').is(':checked')) {
            document.getElementById("retroalimentacion_4").appendChild(incorrecto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
        }

        // Pregunta #5
        if ($('#emocional').is(':checked')) {
            document.getElementById("retroalimentacion_5").appendChild(correcto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
            calificacion++;
        } else if ($('#hambre').is(':checked') || $('#olvido').is(':checked') || $('#confusion').is(':checked')) {
            document.getElementById("retroalimentacion_5").appendChild(incorrecto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
        }

        // Pregunta #6
        if ($('#stephen').is(':checked')) {
            document.getElementById("retroalimentacion_6").appendChild(correcto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
            calificacion++;
        } else if ($('#bill').is(':checked') || $('#carlos').is(':checked') || $('#hawking').is(':checked')) {
            document.getElementById("retroalimentacion_6").appendChild(incorrecto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
        }

        
        document.getElementById("calificacion").textContent = calificacion;

        if(calificacion >= 6) {
            document.getElementById("calificacion").style.color = "green";
        } else {
            document.getElementById("calificacion").style.color = "red";
        }
        
    }