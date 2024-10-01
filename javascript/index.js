/*CICLO*/

    let email;
    do {
    email = prompt("Ingrese su email para recibir ofertas exclusivas:");
    if (!email.includes("@")) {
    alert("Por favor, ingrese un email válido.");
    }
    } while (!email.includes("@"));
    
    alert("Gracias por registrarse. Le enviaremos nuestras mejores ofertas a " + email + ".");

    let TipoPiel  = (prompt("Ingrese su tipo de piel"));
    if(TipoPiel === "Normal"){
        console.log("Te recomendamos productos hidratantes y protector solar");
    }else if (TipoPiel === "Grasa") { 
        console.log("Te recomendamos productos control de brillo y limpieza profunda");
    } else if (TipoPiel === "Sensible") { 
        console.log("Te recomendamos productos suaves y hipoalergénicos");
    } else {
        console.log("Te recomendamos consultar con un experto en belleza");
      }

   function descuento(){
    console.log("Tu código de descuento para tu próxima compra es 123");
   }

   descuento();
