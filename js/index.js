//////////////////// ARRAY VERDURAS //
const verduras = [{
    id: 1,
    producto: "TOMATE",
    precio: 140,
    img: "./assets/img/tomate.jpg",
    seleccionado: false
  },
  {
    id: 2,
    producto: "LECHUGA",
    precio: 110,
    img: "./assets/img/lechuga.png",
    seleccionado: false

  },
  {
    id: 3,
    producto: "ZANAHORIA",
    precio: 80,
    img: "./assets/img/zanahoriaa.jpg",
    seleccionado: false

  },
  {
    id: 4,
    producto: "REPOLLO",
    precio: 85,
    img: "./assets/img/repollo.jpg",
    seleccionado: false

  }, {
    id: 5,
    producto: "ZAPALLITO",
    precio: 100,
    img: "./assets/img/zapallito.jpg",
    seleccionado: false

  },
  {
    id: 6,
    producto: "BERENJENA",
    precio: 96,
    img: "./assets/img/berenjena.jpg",
    seleccionado: false

  }, {
    id: 7,
    producto: "CEBOLLA",
    precio: 70,
    img: "./assets/img/cebolla.jpg",
    seleccionado: false

  },
  {
    id: 8,
    producto: "PIMIENTO AMARRILLO",
    precio: 280,
    img: "./assets/img/pimiento-amarrillo.jpg",
    seleccionado: false

  }
];
console.log(verduras)


//////////////////// ARRAY FRUTAS //
const frutas = [{
    id: 11,
    producto: "SANDIA",
    precio: 140,
    img: "./assets/img/sandia.jpg",
    seleccionado: false
  },
  {
    id: 12,
    producto: "BANANA",
    precio: 110,
    img: "./assets/img/banana.jpg",
    seleccionado: false

  },
  {
    id: 13,
    producto: "MANZANA ROJA",
    precio: 80,
    img: "./assets/img/manzana.jpg",
    seleccionado: false

  },
  {
    id: 14,
    producto: "NARANJA",
    precio: 85,
    img: "./assets/img/naranja.jpg",
    seleccionado: false

  }, {
    id: 15,
    producto: "FRUTILLA",
    precio: 100,
    img: "./assets/img/frutilla-180x180.jpg",
    seleccionado: false

  },
  {
    id: 16,
    producto: "MANDARINA",
    precio: 96,
    img: "./assets/img/mandarina.jpg",
    seleccionado: false

  }, {
    id: 17,
    producto: "UVA",
    precio: 70,
    img: "./assets/img/uva.jpg",
    seleccionado: false

  },
  {
    id: 18,
    producto: "MELON",
    precio: 280,
    img: "./assets/img/melon.png",
    seleccionado: false

  }
];
console.log(frutas)


//////////////////// ARRAY BOLSONES //
const bolsones = [{
  id: 19,
  producto: "PAPA, ZANOHORIA, CEBOLLA, LECHUGA, BANANA Y TOMATE",
  precio: 480,
  img: "./assets/img/bolsonverdu.png",
  kilos: 6,
  seleccionado: false
}, {
  id: 20,
  producto: "PAPA, PIMIENTO AMARILLO, LECHUGA, CEBOLLA, TOMATE, NARANJA, MANZANA Y BANANA",
  precio: 590,
  img: "./assets/img/bolsonverdu.png",
  kilos: 8,
  seleccionado: false
}, {
  id: 21,
  producto: "PAPA, ZANAHORIA, CEBOLLA, LIMON, TOMATE, REPOLLO, NARANJA, UVA, FRUTILLA Y MANZANA",
  precio: 720,
  img: "./assets/img/bolsonverdu.png",
  kilos: 10,
  seleccionado: false
}];
console.log(bolsones)


/////////////////// ANIMACION //
$('.titulosEncabezado').fadeIn(1500)
////ANIMACION TITULO PROYECTO
$("#verdu").animate({
    rigth: '500px',
    height: '140px',

  },
  3000,
).css({
  "color": "black",
  "font-size": "70px",
})


//////////////////// SECCION VERDURAS //
for (let element of verduras) {
  $("#ventaVerduras").append(`
              <div class="col-lg-3 col-sm-12 ">
                <div class="img1 col producto mb-5 animate__animated animate__backInDown">
                      <img data-aos="fade-right" class="producto__imagen mx-auto d-block rounded"
                      src=${element.img} >
                      <p class="text-center">${element.producto}</p>
                      <p class="text-center">$ ${element.precio}</p>
                      <p class="text-center">1kg</p>
                      <button  id = ${element.id} type="button" class="btn btnSumarCarrito btn-outline-success btn-rounded mx-auto d-block fw-bold" data-mdb-ripple-color="dark">Sumar al carro
                        <svg xmlns="http://www.w3.org/2000/svg" class="producto__icon" width="50" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <circle cx="6" cy="19" r="2"></circle>
                          <circle cx="17" cy="19" r="2"></circle>
                          <path d="M17 17h-11v-14h-2"></path>
                          <path d="M6 5l14 1l-1 7h-13"></path>
                        </svg>
                      </button>
                </div>
              </div>
              `)
}


//////////////////// SECCION FRUTAS //
for (let element of frutas) {
  $("#ventaFrutas").append(`
              <div class="col-lg-3 col-sm-12 ">
                <div class="img1 col producto mb-5 animate__animated animate__backInDown">
                        <img data-aos="fade-right" class="producto__imagen mx-auto d-block rounded"
                        src=${element.img} >
                        <p class="text-center">${element.producto}</p>
                        <p class="text-center">$ ${element.precio}</p>
                        <p class="text-center">1kg</p>
                        <button  id = ${element.id} type="button" class="btn btnSumarCarrito btn-outline-success btn-rounded mx-auto d-block fw-bold" data-mdb-ripple-color="dark">Sumar al carro
                          <svg xmlns="http://www.w3.org/2000/svg" class="producto__icon" width="50" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="6" cy="19" r="2"></circle>
                            <circle cx="17" cy="19" r="2"></circle>
                            <path d="M17 17h-11v-14h-2"></path>
                            <path d="M6 5l14 1l-1 7h-13"></path>
                          </svg>
                        </button>
                </div>
              </div>    
              `)
}


//////////////////// SECCION BOLSONES //
for (let element of bolsones) {
  $("#ventaBolsones").append(`
              <div class="col-lg-4 col-sm-12 ">
                <div class="img1 col producto mb-5 animate__animated animate__backInDown">
                      <img data-aos="fade-right" class="producto__imagen mx-auto d-block rounded"
                      src=${element.img} >
                      <p class="text-center">${element.producto}</p>
                      <p class="text-center">$ ${element.precio}</p>
                      <p class="text-center">${element.kilos} kg</p>
                      <button  id = ${element.id} type="button" class="btn btnSumarCarrito btn-outline-success btn-rounded mx-auto d-block fw-bold" data-mdb-ripple-color="dark">Sumar al carro
                        <svg xmlns="http://www.w3.org/2000/svg" class="producto__icon" width="50" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                          <circle cx="6" cy="19" r="2"></circle>
                          <circle cx="17" cy="19" r="2"></circle>
                          <path d="M17 17h-11v-14h-2"></path>
                          <path d="M6 5l14 1l-1 7h-13"></path>
                        </svg>
                      </button>
                </div>
              </div>
              `)
}


////////////////// BOTONES PARA SUMAR AL CARRITO  //
$('.btnSumarCarrito').click(function (event) {
  const buttonClickeado = event.target;
  console.log(buttonClickeado.id);
  const sumarVerdura = verduras.find((verduraItem) => verduraItem.id === parseInt(buttonClickeado.id));
  const sumarFruta = frutas.find((frutasItem) => frutasItem.id === parseInt(buttonClickeado.id));
  const sumarbolsones = bolsones.find((bolsonItem) => bolsonItem.id === parseInt(buttonClickeado.id));

  if (sumarVerdura) {
    sumarVerdura.seleccionado = true;
    swal("Listo!", "Se agrego al carrito", "success");
    console.log(verduras);
  } else if (sumarFruta) {
    sumarFruta.seleccionado = true;
    swal("Listo!", "Se agrego al carrito", "success");
    console.log(frutas);
  } else {
    sumarbolsones.seleccionado = true;
    swal("Listo!", "Se agrego al carrito", "success");
    console.log(bolsones);
  }
})


////////////////// BOTON CARRITO NAVEGADOR //
$('#miCarrito').click(function () {
  console.log("Respuesta a un click");
  $('.textoCarrito').show()
  $('.carritoInsumos').show()

  //////PARA Q NO SE REPITA EL CARRITO
  const hijos = $(".eliminar")
  console.log(hijos)
  for (const hijo of hijos) {
    hijo.remove()
  }
  ////VERDURAS
  const verdurasCarrito = verduras.filter((verduraItem) => verduraItem.seleccionado);
  console.log(verdurasCarrito);
  sessionStorage.setItem('verdurasCarrito', JSON.stringify(verdurasCarrito));
  let totalVerduras = 0;

  for (const verdura of verdurasCarrito) {
    totalVerduras += parseFloat(verdura.precio);
    $('#verdurasCompradas').append(`
                  <div class="col-lg-6 eliminar">
                      <div class="card " style="width: 20rem; text-align: center; margin: 2px; background-color: rgb(108, 189, 162)">
                        <div class="card-body " >
                          <h3 class="card-title"> ${verdura.producto} $${verdura.precio} </h3>
                        </div>
                      </div>
                  </div>
                  `)
  }
  ////FRUTAS
  const frutasCarrito = frutas.filter((frutaItem) => frutaItem.seleccionado);
  console.log(frutasCarrito);
  sessionStorage.setItem('frutasCarrito', JSON.stringify(frutasCarrito));
  let totalFrutas = 0;

  for (const frutas of frutasCarrito) {
    totalFrutas += parseFloat(frutas.precio);
    $('#verdurasCompradas').append(`
                    <div class="col-lg-6 eliminar">
                        <div class="card" style="width: 20rem; text-align: center; margin: 2px; background-color: rgb(216, 146, 16)">
                            <div class="card-body">
                              <h3 class="card-title"> ${frutas.producto} $${frutas.precio} </h3>
                            </div>
                        </div>
                    </div>`)
  }
  ////BOLSONES
  const bolsonCarrito = bolsones.filter((bolsonItem) => bolsonItem.seleccionado);
  console.log(bolsonCarrito);
  sessionStorage.setItem('bolsonCarrito', JSON.stringify(bolsonCarrito));
  let totalbolson = 0;

  for (const bolson of bolsonCarrito) {
    totalbolson += parseFloat(bolson.precio);
    $('#verdurasCompradas').append(`
                      <div class="col-lg-6 eliminar">
                          <div class="card" style="width: 20rem; text-align: center; margin: 2px; background-color: rgb(216, 146, 16)">
                              <div class="card-body">
                                <h3 class="card-title"> ${bolson.producto} $${bolson.precio} </h3>
                              </div>
                          </div>
                      </div>`)
  }

  ///-PRECIO TOTAL 
  const total = totalVerduras + totalFrutas + totalbolson;
  const envio = total + 200
  $('#carritoTotal').append(`<h2 class="eliminar">Total:$ ${total} <br>  Con envío: $${envio}</h2>
    `)


});


$('.btnEliminarProducto').click(function () {

  const eliminarProd = $('.basura')
  for (const hijo of eliminarProd) {
    hijo.remove()
  }

})

//////RESTAURANTES QUE NOS COMPRAN
const URLJSON = "json/restaurantes.json"
$.getJSON(URLJSON, function (respuesta, estado) {
  if (estado === "success") {
    let misDatos = respuesta;
    const hijosResto = $(".imgResto");
    console.log(hijosResto)
    for (const hijo of hijosResto) {
      hijo.remove();
    }
    for (const dato of misDatos) {
      $("#restaurantes").append(` <div class="col-lg-6 imgResto" >
                                        <a href="${dato.link}" target="_blank">
                                        <img src="${dato.img}">
                                        </a>
                                  </div>`)
    }
  }
});