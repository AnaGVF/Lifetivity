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

    // #7
    var correcto_7 = correcto.cloneNode(true);

    // #8
    var correcto_8 = correcto.cloneNode(true);

    // #9
    var correcto_9 = correcto.cloneNode(true);

    // #10
    var correcto_10 = correcto.cloneNode(true);

// Respuestas Incorrectas 

    // #1
    var incorrecto = document.createElement("div");
    incorrecto.classList.add("alert");
    incorrecto.classList.add("alert-danger");
    incorrecto.style.width = "100%";
    incorrecto.style.marginTop = "20px";
    incorrecto.textContent = "¡Oh no! Tu respuesta es incorrecta. Recuerda que una persona con liderazgo sabe trabajar individualmente y en equipo para crear y fomentar ideas.";

    // #2
    var incorrecto_2 = incorrecto.cloneNode(true);
    incorrecto_2.textContent = "¡Oh no! Tu respuesta es incorrecta. Generalmente los líderes toman riesgos y dan pasos repentinos para alcanzar sus metas.";

    // #3
    var incorrecto_3 = incorrecto.cloneNode(true);
    incorrecto_3.textContent = "¡Oh no! Tu respuesta es incorrecta. Las personas exitosas aprovechan al máximo su tiempo. Ya sea ratos libres, entre labores o los fines de semana, el tiempo es oro para ellas.";

    // #4
    var incorrecto_4 = incorrecto.cloneNode(true);
    incorrecto_4.textContent = "¡Oh no! Tu respuesta es incorrecta. Los líderes tienen mente abierta para poder escuchar a su equipo y a las personas que los rodean y así poder tomar decisiones oportunas.";
    
    // #5
    var incorrecto_5 = incorrecto.cloneNode(true);
    incorrecto_5.textContent = "¡Oh no! Tu respuesta es incorrecta. Recuerda que las personas exitosas siempre tienen hambre de conocimiento y desean aprender cada día algo. El conocimiento es oro para ellas y les ayuda a tener una visión más amplia del mundo y de las personas que las rodean.";

    // #6
    var incorrecto_6 = incorrecto.cloneNode(true);
    incorrecto_6.textContent = "¡Oh no! Tu respuesta es incorrecta. La paciencia es una virtud que ayuda a los líderes a tomar decisiones con calma y sabiduría. A veces el pensar dos veces sobre una decisión ayuda a que no se cometan errores catastróficos irreparables.";

    // #7
    var incorrecto_7 = incorrecto.cloneNode(true);
    incorrecto_7.textContent = "¡Oh no! Tu respuesta es incorrecta. Un lider debe tener una actitud positiva y ver siempre con buena cara hacia el futuro. La negatividad no ayudará en nada, sólo hará que el equipo esté desmotivado y desanimado.";

    // #8
    var incorrecto_8 = incorrecto.cloneNode(true);
    incorrecto_8.textContent = "¡Oh no! Tu respuesta es incorrecta. Recuerda que una persona exitosa debe ser persistente ante las metas que quiera alcanzar. Querer es poder. Si un lider no pone esfuerzo y ganas de su parte, no podrá alcanzar las metas preestablecidas. Las metas se obtienen con mucho trabajo, perseverancia y dedicación.";

    // #9
    var incorrecto_9 = incorrecto.cloneNode(true);
    incorrecto_9.textContent = "¡Oh no! Tu respuesta es incorrecta. La comunicación es la clave de buenas decisiones. Si no se tiene una buena comunicación entre los miembros del equipo, las ideas y metas podrían ser implementadas incorrectamente y generar resultados confusos.";

    // #10
    var incorrecto_10 = incorrecto.cloneNode(true);
    incorrecto_10.textContent = "¡Oh no! Tu respuesta es incorrecta. Las personas exitosas deben generar confianza entre la población para poder recibir apoyo de ésta.";

    // Función de Calificar 
    function submit() {
        // Pregunta #1
        if (document.getElementById('pregunta1').value == 'equipo') {
            document.getElementById("retroalimentacion").appendChild(correcto);
            document.getElementById("retroalimentacion").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion").appendChild(incorrecto);
            document.getElementById("retroalimentacion").classList.add("w-100");
        }

        // Pregunta #2
        if (document.getElementById('pregunta2').value == 'arriesgada') {
            document.getElementById("retroalimentacion_2").appendChild(correcto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_2").appendChild(incorrecto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
        }

        // Pregunta #3
        if (document.getElementById('pregunta3').value == 'tiempo') {
            document.getElementById("retroalimentacion_3").appendChild(correcto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_3").appendChild(incorrecto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
        }

        // Pregunta #4
        if (document.getElementById('pregunta4').value == 'abierta') {
            document.getElementById("retroalimentacion_4").appendChild(correcto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_4").appendChild(incorrecto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
        }

        // Pregunta #5
        if (document.getElementById('pregunta5').value == 'conocimiento') {
            document.getElementById("retroalimentacion_5").appendChild(correcto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_5").appendChild(incorrecto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
        }

        // Pregunta #6
        if (document.getElementById('pregunta6').value == 'paciencia') {
            document.getElementById("retroalimentacion_6").appendChild(correcto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_6").appendChild(incorrecto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
        }

        // Pregunta #7
        if (document.getElementById('pregunta7').value == 'positiva') {
            document.getElementById("retroalimentacion_7").appendChild(correcto_7);
            document.getElementById("retroalimentacion_7").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_7").appendChild(incorrecto_7);
            document.getElementById("retroalimentacion_7").classList.add("w-100");
        }

        // Pregunta #8
        if (document.getElementById('pregunta8').value == 'persistente') {
            document.getElementById("retroalimentacion_8").appendChild(correcto_8);
            document.getElementById("retroalimentacion_8").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_8").appendChild(incorrecto_8);
            document.getElementById("retroalimentacion_8").classList.add("w-100");
        }

        // Pregunta #9
        if (document.getElementById('pregunta9').value == 'comunicacion') {
            document.getElementById("retroalimentacion_9").appendChild(correcto_9);
            document.getElementById("retroalimentacion_9").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_9").appendChild(incorrecto_9);
            document.getElementById("retroalimentacion_9").classList.add("w-100");
        }

        // Pregunta #10
        if (document.getElementById('pregunta10').value == 'confianza') {
            document.getElementById("retroalimentacion_10").appendChild(correcto_10);
            document.getElementById("retroalimentacion_10").classList.add("w-100");
            calificacion++;
        } else {
            document.getElementById("retroalimentacion_10").appendChild(incorrecto_10);
            document.getElementById("retroalimentacion_10").classList.add("w-100");
        }
        
        document.getElementById("calificacion").textContent = calificacion;

        if(calificacion >= 6) {
            document.getElementById("calificacion").style.color = "green";
        } else {
            document.getElementById("calificacion").style.color = "red";
        }
        
    }