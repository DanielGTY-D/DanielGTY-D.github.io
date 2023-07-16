document.addEventListener("DOMContentLoaded", function () {


  const formulario = document.querySelector(".formulario");
  const formularioCampos = document.querySelector(".formulario__campos");
  const inputNombre = document.querySelector(".campo__input--nombre");
  const inputEmail = document.querySelector(".campo__input--email");
  const inputAsunto = document.querySelector(".campo__input--asunto");
  const inputMensaje = document.querySelector(".campo__textarea");
  const botonEnviar = document.querySelector(".formulario__boton");
  const spinner = document.querySelector('#spinner');

  inputNombre.addEventListener("blur", validar);
  inputEmail.addEventListener("blur", validar);
  inputAsunto.addEventListener("blur", validar);
  inputMensaje.addEventListener("blur", validar);
  botonEnviar.addEventListener('click', function(e) {
    e.preventDefault();
    botonEnviar.classList.add('hidden');
    spinner.classList.remove('hidden');

    setTimeout(() => {
        botonEnviar.classList.remove('hidden');
        spinner.classList.add('hidden');
        resetearFormulario();

        formularioEnviado(formularioCampos, 'El formulario fue enviado correctamente');
    }, 3000);
  })


  const formularioInfo = {
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  };

  function validar(e) {
    const campo = e.target.id;

    if (e.target.value.trim() === "") {
      mostrarAlerta(`El campo ${campo} es obligatorio`, formularioCampos);
      formularioInfo[e.target.name] = '';
      comprobarEmail();
      return;
    }

    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email no es valido", formularioCampos);
      formularioInfo[e.target.name] = '';
      comprobarEmail();
      return;
    }

    //limpiar la alerta
    limpiarAlerta(formularioCampos);

    //asignar los valores
    formularioInfo[e.target.name] = e.target.value.trim().toLowerCase();

    //comprobar el objeto;
    console.log(formularioInfo);
    comprobarEmail();
  }

  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    // generar alerta HTML
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("btn-alert");

    // Inyectar el error al formulario
    referencia.appendChild(error);
  }

  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".btn-alert");
    if (alerta) {
      alerta.remove();
    }
  }

  function comprobarEmail() {
    if (Object.values(formularioInfo).includes('')) {
      botonEnviar.classList.remove("formulario__boton--enabled");
      botonEnviar.classList.add("formulario__boton--disabled");
      botonEnviar.disabled = true;
      return;
    }

    botonEnviar.classList.remove("formulario__boton--disabled");
    botonEnviar.classList.add('formulario__boton--enabled');
    botonEnviar.disabled = false;
  }

  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function resetearFormulario() {
    formularioInfo.nombre = '';
    formularioInfo.email = '';
    formularioInfo.asunto = '';
    formularioInfo.mensaje = '';

    formulario.reset();
    comprobarEmail();
  }

  function formularioEnviado(referencia, mensaje) {
    const enviado = document.createElement('P');
    enviado.textContent = mensaje;
    enviado.classList.add('enviado');

    referencia.appendChild(enviado);

    setTimeout(() => {
        enviado.remove();
    }, 3000);
  }
});
