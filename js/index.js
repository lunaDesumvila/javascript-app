//////////////////// PRECIOS BARATOS POR KILO //
const baratos = verduras.filter(producto => producto.precio < 100);
console.log(baratos);


//////////////////// VERDURA BUSQUEDA //
const buscarCebolla = verduras.find(producto => producto.id === 7);
console.log(buscarCebolla);


//////////////////// DOM //

//////////////////// SECCION VERDURAS //
const section = document.querySelector(`.contenedor`)
section.className = 'row'
console.log(section)

let divVerduras = document.createElement('div');
divVerduras.className = 'col-lg-12'
divVerduras.innerHTML = `
  <h2 class="titulosEncabezado" id="verduras1">verduras</h2>
`
section.appendChild(divVerduras)
console.log(divVerduras)

for (let element of verduras) {
  let div = document.createElement('div');
  div.className = ' col-lg-3 img4 col producto mb-5 animate__animated animate__backInDown'
  div.innerHTML = `
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
    `
  section.appendChild(div);
}

//////////////////// SECCION FRUTAS //

let divFrutas = document.createElement('div');
divFrutas.className = 'col-lg-12'
divFrutas.innerHTML = `
  <h3 class="titulosEncabezado" id="frutas1">frutas</h3>
`
section.appendChild(divFrutas)
console.log(divFrutas)

for (let element of frutas) {
  let div = document.createElement('div');
  div.className = ' col-lg-3 img4 col producto mb-5 animate__animated animate__backInDown'
  div.innerHTML = `
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
    `
  section.appendChild(div);
}

////////////////// BOTONES PARA SUMAR AL CARRITO  //
const buttons = document.getElementsByClassName('btnSumarCarrito');

for (const button of buttons) {
  button.addEventListener('click', (event) => {
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
};




////////////////// BOTON CARRITO NAVEGADOR //
const btnGuardar = document.getElementById('miCarrito');

btnGuardar.addEventListener("click", () => {

  ////VERDURAS
  const verdurasCarrito = verduras.filter((verduraItem) => verduraItem.seleccionado);
  console.log(verdurasCarrito);
  sessionStorage.setItem('verdurasCarrito', JSON.stringify(verdurasCarrito));

  const verdurasCompradas = document.getElementById('verdurasCompradas');
  for (const verdura of verdurasCarrito) {
    const element = document.createElement('div');
    element.className = 'col-lg-6'
    element.innerHTML = `
    <div class="card" style="width: 28rem; text-align: center; margin: 2px; background-color: rgb(238, 168, 18)">
      <div class="card-body">
        <h3 class="card-title"> ${verdura.producto} $${verdura.precio} </h3>
      </div>
    </div>`

    verdurasCompradas.appendChild(element);
  }

  ///FRUTAS
  const frutasCarrito = frutas.filter((frutaItem) => frutaItem.seleccionado);
  console.log(frutasCarrito);
  sessionStorage.setItem('frutasCarrito', JSON.stringify(frutasCarrito));

  const frutasCompradas = document.getElementById('verdurasCompradas');
  for (const frutas of frutasCarrito) {
    const fruta = document.createElement('div');
    fruta.className = 'col-lg-6'
    fruta.innerHTML = `
    <div class="card" style="width: 28rem; text-align: center; margin: 2px; background-color: rgb(238, 168, 18)">
      <div class="card-body">
        <h3 class="card-title"> ${frutas.producto} $${frutas.precio} </h3>
      </div>
    </div>`

    frutasCompradas.appendChild(fruta);
  }


  ///////NUEVO ARRAY--PRECIO TOTAL?
  const arraysEnCarrito = verdurasCarrito.concat(frutasCarrito)
  console.log(arraysEnCarrito)
  const guardar = (clave, valor) => {
    sessionStorage.setItem(clave, valor)
  }
  for (const precios of arraysEnCarrito) {
    guardar(precios.precio, JSON.stringify(precios))
    console.log(precios.precio)

  }



})