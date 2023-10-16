function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre('123123') === 'El campo nombre solo acepta letras',
    "Validar nombre no validó que el nombre solo tenga letras"
  )

  console.assert(
    validarNombre('Jonatan') === '',
    "Validar Nombre falló con un nombre válido"
  )
}


function probarValidarCiudad(){
    console.assert(
        validarCiudad('Buenos Aires') === '',
        'Validar ciudad falló con una ciudad válida',
    )

    console.assert(
        validarCiudad('') === 'Este campo debe tener al menos 1 caracter',
        'Validar ciudad no validó que ciudad no sea vacío',
    )
}


function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo('') === 'Este campo debe tener al menos 1 caracter',
        'Validar descripcion regalo no validó que el comportamiento no sea vacío',
    )

    console.assert(
        validarDescripcionRegalo('asdasdasdasdasdasdsajdhasjkdhjashdjashdljasklhdlkashdklhasjldhasljdhasjlhdjlashdjlashjdhalsjhdjlashdjlashjldhasjlhdasdjlahsjdhasjldhasjdh ashdlasjdhlasjdhasd ') === 'Este campo debe tener menos de 100 caracteres',
        'Validar descripcion regalo no validó que el campo no sea muy largo',
    )

    console.assert(
        validarDescripcionRegalo('.,.,.,.,') === 'El campo descripcion solo debe tener letras y numeros',
        "Validar descripcion regalo no validó que solo acepta letras y numeros"
    )

    console.assert(
        validarDescripcionRegalo('Regalo') === '',
        'Validar descripcion regalo falló con una descripcion válida',
    )
}

probarValidarNombre();
probarValidarCiudad()
probarValidarDescripcionRegalo()
