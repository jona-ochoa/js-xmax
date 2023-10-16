const $form = document.querySelector("#carta-a-santa");

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }

  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }

  if (!/^[A-Za-z,\._ ]+$/i.test(nombre)) {
    return "El campo nombre solo acepta letras";
  }

  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Este campo no debe estar vacío";
  } else {
    return "";
  }
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "Este campo no puede estar vacío";
  } else if (descripcionRegalo.length >= 100) {
    return "Este campo debe tener menos de 100 caracteres";
  } else if (!/^[A-z0-9,\._ ]+$/i.test(descripcionRegalo)) {
    return "El campo descricion solo debe tener numeros y letras";
  } else {
    return "";
  }
}

function validarFormulario(e) {
  const $form = document.querySelector("#carta-a-santa");

  const nombre = $form.nombre.value;
  const ciudad = $form.ciudad.value;
  const descripcionRegalo = $form["descripcion-regalo"].value;

  const errorNombre = validarNombre(nombre);
  const errorCiudad = validarCiudad(ciudad);
  const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

  const errores = {
    nombre: errorNombre,
    ciudad: errorCiudad,
    "descripcion-regalo": errorDescripcionRegalo,
  };

  const esExito = manejarErrores(errores) === '';

  if (esExito) {
    $form.className = 'oculto';
    document.querySelector('#exito').className = '';
  }

  e.preventDefault();
}

function manejarErrores(errores) {
  const llaves = Object.keys(errores);
  const $errores = document.querySelector("#errores");
  let cantidadErrores = 0;

  llaves.forEach(function (llave) {
    const error = errores[llave];

    if (error) {
      cantidadErrores++;
      $form[llave].className = "error";
      const $error = document.createElement("li");

      $error.innerText = error;
      $errores.appendChild($error);
    } else {
      // borrar el campo adecuado
      $form[llave].className = "";
    }
    return cantidadErrores;
  });
}

$form.onsubmit = validarFormulario;
