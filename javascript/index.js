 //carrito de compras. suma y resta.
 const PRODUCTOS_ARRAY =[
    {
        id: 1,
        nombre: "crema facial",
        precio: 6000,
        imagen: "img/cremafacial.png"
    },
    {
        id: 2,
        nombre: "crema para manos",
        precio: 5400,
        imagen: "img/cremamanos.png"
    },
    {
        id: 3,
        nombre: "máscara de arcilla",
        precio: 8900,
        imagen: "img/mascara.png"
    },
    {
        id: 4,
        nombre: "gel de limpieza",
        precio: 12450,
        imagen: "img/limpieza.png"
    },
   
]

let carrito = [];

function mostrarProductos(){
    const PRODUCTOS_SECTION = document.getElementById("productos");
    PRODUCTOS_ARRAY.forEach(producto =>{
        const CARD_DIV = document.createElement("div")
        CARD_DIV.className = "productos-card";
        CARD_DIV.innerHTML = 
        `
        <figure>
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image"/>
        </figure>
        <div class="productos-contenido">
        <h2>${producto.nombre}</h2>
        <p>$ ${producto.precio}</p>
        <a href="#" onclick="añadirCarrito(${producto.id})">Añadir</a>
        <a href="#" onclick="eliminarDelCarrito(${producto.id})">Eliminar</a>
        </div>
        `;   
        PRODUCTOS_SECTION.appendChild(CARD_DIV)
    });
}

function añadirCarrito(id){
    const producto = PRODUCTOS_ARRAY.find(prod => prod.id === id);

    if(producto){
        carrito.push(producto);
        console.log(`Añadiste: ${producto.nombre} - Precio: ${producto.precio}`);
    }

    mostrarCarrito();
}

function eliminarDelCarrito(id){
    const index = carrito.findIndex(prod => prod.id === id);

    if (index !== -1) {
        const productoEliminado = carrito.splice(index, 1)[0];
        console.log(`Eliminaste: ${productoEliminado.nombre}`);
    }
    
    mostrarCarrito();
}

function mostrarCarrito(){
    console.log("Carrito:");

    let total = 0;
    carrito.forEach(producto => {
        console.log(`${producto.nombre} - Precio: ${producto.precio}`);
        total += producto.precio;
    });

    console.log(`Total: ${total}`);
}

mostrarProductos();

//PreEntrega1
let email;
do {
email = prompt("Ingrese su email para recibir ofertas exclusivas:");
if (!email.includes("@")) {
alert("Por favor, ingrese un email válido.");
}
} while (!email.includes("@"));

alert("Gracias por registrarse. Le enviaremos nuestras mejores ofertas a " + email + ".");

let tipoPiel  = (prompt("Ingrese su tipo de piel"));
if(tipoPiel === "Normal"){
    console.log("Te recomendamos productos hidratantes y protector solar");
}else if (tipoPiel === "Grasa") { 
    console.log("Te recomendamos productos control de brillo y limpieza profunda");
} else if (tipoPiel === "Sensible") { 
    console.log("Te recomendamos productos suaves y hipoalergénicos");
} else {
    console.log("Te recomendamos consultar con un experto en belleza");
  }

function aplicarDescuento(){
console.log("Tu código de descuento para tu próxima compra es 123");
}

aplicarDescuento();



