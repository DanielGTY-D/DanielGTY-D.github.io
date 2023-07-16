const proyectoContenido = document.querySelectorAll(".proyecto__contenido");

proyectoContenido.forEach(function (elemt) {
  const btnRepositorio = elemt.querySelector(".proyecto__boton--repositorio");
  const btnDemo = elemt.querySelector(".proyecto__boton--demo");

  elemt.addEventListener("mousemove", function (e) {
    const element = e.target;

    if (element.classList.contains("proyecto__boton--repositorio")) {
      btnRepositorio.classList.remove("proyecto__boton--repositorio");
      btnRepositorio.classList.add("proyecto__boton--demo");

      btnDemo.classList.remove("proyecto__boton--demo");
      btnDemo.classList.add("proyecto__boton--repositorio");
    }
  });

  elemt.addEventListener("mouseout", function (e) {
    const element = e.target;

    if (element.classList.contains("proyecto__boton--demo")) {
      btnRepositorio.classList.remove("proyecto__boton--demo");
      btnRepositorio.classList.add("proyecto__boton--repositorio");

      btnDemo.classList.remove("proyecto__boton--repositorio");
      btnDemo.classList.add("proyecto__boton--demo");
    }
  });

  elemt.addEventListener("mousemove", function (e) {
    const element = e.target;

    if (element.classList.contains("proyecto__boton--demo")) {
      btnDemo.classList.remove("proyecto__boton--demo");
      btnDemo.classList.add("proyecto__boton--repositorio");

      btnRepositorio.classList.remove("proyecto__boton--repositorio");
      btnRepositorio.classList.add("proyecto__boton--demo");
    }
  });

  elemt.addEventListener('mouseout', function(e) {
    const element = e.target;

    if(element.classList.contains('proyecto__boton--repositorio')) {
        btnDemo.classList.remove("proyecto__boton--repositorio");
        btnDemo.classList.add("proyecto__boton--demo");
  
        btnRepositorio.classList.remove("proyecto__boton--demo");
        btnRepositorio.classList.add("proyecto__boton--repositorio");
    }
  })
});
