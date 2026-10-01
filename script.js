function calcularPromedio() {
    // Crea la función que se ejecuta al presionar "Calcular promedio".


    let nombre = document.getElementById("nombre").value;
    // Obtiene el nombre escrito en el campo correspondiente.

    let edad = parseInt(document.getElementById("edad").value);
    // Obtiene la edad y la convierte de texto a número entero.


    let calificacion1 = parseFloat(
        document.getElementById("calificacion1").value
    );
    // Obtiene la primera calificación y la convierte a número decimal.

    let calificacion2 = parseFloat(
        document.getElementById("calificacion2").value
    );
    // Obtiene la segunda calificación y la convierte a número decimal.

    let calificacion3 = parseFloat(
        document.getElementById("calificacion3").value
    );
    // Obtiene la tercera calificación y la convierte a número decimal.

    let calificacion4 = parseFloat(
        document.getElementById("calificacion4").value
    );
    // Obtiene la cuarta calificación y la convierte a número decimal.


    if (
        nombre === "" ||
        isNaN(edad) ||
        isNaN(calificacion1) ||
        isNaN(calificacion2) ||
        isNaN(calificacion3) ||
        isNaN(calificacion4)
    ) {
        // Comprueba que ninguno de los datos obligatorios esté vacío.

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos.";
        // Muestra un mensaje si falta algún dato.

        return;
        // Detiene la función para evitar realizar cálculos incompletos.
    }


    if (
        calificacion1 < 0 || calificacion1 > 10 ||
        calificacion2 < 0 || calificacion2 > 10 ||
        calificacion3 < 0 || calificacion3 > 10 ||
        calificacion4 < 0 || calificacion4 > 10
    ) {
        // Comprueba que las cuatro calificaciones estén dentro de 0 a 10.

        document.getElementById("resultado").innerHTML =
            "Las calificaciones deben estar entre 0 y 10.";
        // Informa al usuario si alguna calificación está fuera del rango.

        return;
        // Detiene la función porque existe una calificación inválida.
    }


    let promedio =
        (calificacion1 + calificacion2 + calificacion3 + calificacion4) / 4;
    // Suma las cuatro calificaciones y divide el resultado entre 4.


    let mensaje = "";
    // Crea una variable vacía donde se guardará el mensaje correspondiente.


    if (promedio >= 9 && promedio <= 10) {
        // Comprueba si el promedio está entre 9 y 10.

        mensaje = "EXCELENTE";
        // Guarda el mensaje correspondiente.

    } else if (promedio >= 8 && promedio < 9) {
        // Comprueba si el promedio está entre 8 y 8.9.

        mensaje = "MUY BIEN";
        // Guarda el mensaje correspondiente.

    } else if (promedio >= 7 && promedio < 8) {
        // Comprueba si el promedio está entre 7 y 7.9.

        mensaje = "BIEN";
        // Guarda el mensaje correspondiente.

    } else if (promedio >= 6.5 && promedio < 7) {
        // Comprueba si el promedio está entre 6.5 y 6.9.

        mensaje = "PIENSA EN CONTA";
        // Guarda el mensaje correspondiente.

    } else if (promedio >= 6 && promedio < 6.5) {
        // Comprueba si el promedio está entre 6 y 6.4.

        mensaje = "DATE DE BAJA";
        // Guarda el mensaje correspondiente.

    } else {
        // Si ninguna condición anterior se cumple, el promedio está entre 0 y 5.9.

        mensaje = "VETE A TURISMO";
        // Guarda el mensaje correspondiente.
    }


    document.getElementById("resultado").innerHTML =
        "<strong>Alumno:</strong> " + nombre +
        "<br><strong>Edad:</strong> " + edad +
        "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
        "<br><br>" + mensaje;
    // Muestra en pantalla el nombre, edad, promedio y mensaje del alumno.
}


function agregarAlumno() {
    // Crea la función que se ejecuta al presionar el botón "Agregar".


    let nombre = document.getElementById("nombre").value;
    // Obtiene el nombre del alumno.

    let edad = document.getElementById("edad").value;
    // Obtiene la edad escrita por el usuario.

    let calificacion1 = document.getElementById("calificacion1").value;
    // Obtiene la primera calificación.

    let calificacion2 = document.getElementById("calificacion2").value;
    // Obtiene la segunda calificación.

    let calificacion3 = document.getElementById("calificacion3").value;
    // Obtiene la tercera calificación.

    let calificacion4 = document.getElementById("calificacion4").value;
    // Obtiene la cuarta calificación.


    if (
        nombre === "" ||
        edad === "" ||
        calificacion1 === "" ||
        calificacion2 === "" ||
        calificacion3 === "" ||
        calificacion4 === ""
    ) {
        // Comprueba que todos los campos tengan información.

        document.getElementById("resultado").innerHTML =
            "Por favor, completa todos los datos antes de agregar al alumno.";
        // Muestra un aviso si falta algún dato.

        return;
        // Detiene la función si el formulario está incompleto.
    }


    if (
        parseFloat(calificacion1) < 0 || parseFloat(calificacion1) > 10 ||
        parseFloat(calificacion2) < 0 || parseFloat(calificacion2) > 10 ||
        parseFloat(calificacion3) < 0 || parseFloat(calificacion3) > 10 ||
        parseFloat(calificacion4) < 0 || parseFloat(calificacion4) > 10
    ) {
        // Comprueba nuevamente que las cuatro calificaciones estén entre 0 y 10.

        document.getElementById("resultado").innerHTML =
            "Las calificaciones deben estar entre 0 y 10.";
        // Muestra un mensaje si alguna calificación no es válida.

        return;
        // Detiene la función si existe una calificación incorrecta.
    }


    let promedio =
        (
            parseFloat(calificacion1) +
            parseFloat(calificacion2) +
            parseFloat(calificacion3) +
            parseFloat(calificacion4)
        ) / 4;
    // Convierte las calificaciones a números, las suma y calcula el promedio.


    let mensaje = "";
    // Crea la variable donde se almacenará la clasificación del promedio.


    if (promedio >= 9) {
        // Comprueba si el promedio es igual o mayor a 9.

        mensaje = "EXCELENTE";
        // Asigna la clasificación excelente.

    } else if (promedio >= 8) {
        // Comprueba si el promedio es igual o mayor a 8.

        mensaje = "MUY BIEN";
        // Asigna la clasificación muy bien.

    } else if (promedio >= 7) {
        // Comprueba si el promedio es igual o mayor a 7.

        mensaje = "BIEN";
        // Asigna la clasificación bien.

    } else if (promedio >= 6.5) {
        // Comprueba si el promedio es igual o mayor a 6.5.

        mensaje = "PIENSA EN CONTA";
        // Asigna la clasificación correspondiente.

    } else if (promedio >= 6) {
        // Comprueba si el promedio es igual o mayor a 6.

        mensaje = "DATE DE BAJA";
        // Asigna la clasificación correspondiente.

    } else {
        // Si no se cumple ninguna condición anterior, el promedio es menor a 6.

        mensaje = "VETE A TURISMO";
        // Asigna la última clasificación.
    }


    document.getElementById("resultado").innerHTML =
        "<strong>Alumno agregado:</strong> " + nombre +
        "<br><strong>Edad:</strong> " + edad +
        "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
        "<br><br>" + mensaje;
    // Muestra los datos del alumno después de presionar "Agregar".
}


function limpiar() {
    // Crea la función encargada de borrar la información del formulario.


    document.getElementById("nombre").value = "";
    // Borra el nombre.

    document.getElementById("edad").value = "";
    // Borra la edad.

    document.getElementById("calificacion1").value = "";
    // Borra la primera calificación.

    document.getElementById("calificacion2").value = "";
    // Borra la segunda calificación.

    document.getElementById("calificacion3").value = "";
    // Borra la tercera calificación.

    document.getElementById("calificacion4").value = "";
    // Borra la cuarta calificación.


    document.getElementById("resultado").innerHTML = "";
    // Borra el resultado que estaba mostrado en pantalla.
}
