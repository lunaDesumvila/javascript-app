//////////////////// PRECIOS BARATOS POR KILO //
const baratos = verduras.filter(producto => producto.precio < 100);
console.log(baratos);

//////////////////// VERDURA BUSQUEDA //
const buscarCebolla = verduras.find(producto => producto.id === 7);
console.log(buscarCebolla);

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

////////////////// BOTONES PARA SUMAR AL CARRITO  //
$(document).ready(function () {
  console.log("el dom esta listo")

  $('.btnSumarCarrito').click(function (event) {
    const buttonClickeado = event.target;
    console.log(buttonClickeado.id);
    const sumarVerdura = verduras.find((verduraItem) => verduraItem.id === parseInt(buttonClickeado.id));
    const sumarFruta = frutas.find((frutasItem) => frutasItem.id === parseInt(buttonClickeado.id));

    if (sumarVerdura) {
      sumarVerdura.seleccionado = true;
      swal("Listo!", "Se agrego al carrito", "success");
      console.log(verduras);
    } else {
      sumarFruta.seleccionado = true;
      swal("Listo!", "Se agrego al carrito", "success");
      console.log(frutas);
    }

  })
})

////////////////// BOTON CARRITO NAVEGADOR //
$(document).ready(function () {
  console.log("el dom esta listo")
  $('#miCarrito').click(function () {
    console.log("Respuesta a un click");

    ////VERDURAS
    const verdurasCarrito = verduras.filter((verduraItem) => verduraItem.seleccionado);
    console.log(verdurasCarrito);
    sessionStorage.setItem('verdurasCarrito', JSON.stringify(verdurasCarrito));
    let totalVerduras = 0;

    for (const verdura of verdurasCarrito) {
      totalVerduras += parseFloat(verdura.precio);
      $('#verdurasCompradas').append(`
                  <div class="col-lg-6">
                  <div class="card" style="width: 28rem; text-align: center; margin: 2px; background-color: rgb(238, 168, 18)">
                    <div class="card-body">
                      <h3 class="card-title"> ${verdura.producto} $${verdura.precio} </h3>
                    </div>
                    </div>
                  </div>`)
    }

    ///-FRUTAS
    const frutasCarrito = frutas.filter((frutaItem) => frutaItem.seleccionado);
    console.log(frutasCarrito);
    sessionStorage.setItem('frutasCarrito', JSON.stringify(frutasCarrito));
    let totalFrutas = 0;

    for (const frutas of frutasCarrito) {
      totalFrutas += parseFloat(frutas.precio);
      $('#verdurasCompradas').append(`
                    <div class="col-lg-6">
                    <div class="card" style="width: 28rem; text-align: center; margin: 2px; background-color: rgb(238, 168, 18)">
                      <div class="card-body">
                        <h3 class="card-title"> ${frutas.producto} $${frutas.precio} </h3>
                      </div>
                      </div>
                    </div>`)
    }

    ///-PRECIO TOTAL 
    const total = totalVerduras + totalFrutas;
    const envio = total + 200
    $('#carritoTotal').append(`<h2>Total:$ ${total} <br>  Con envío: $${envio}</h2>
    `)

  });
})