const interface = require ('readline-sync');

  // suma, resta, multiplicacion, salir
 let response = "";
   do { 
     console.log ("1,-Suma ");
     console.log ("2,-Resta");
     console.log ("3,-Multiplicacion");
     console.log ("4,-Division");
     console.log ("5,-Salir ");
     response= interface.question (" Que operacion deseas realizar, escribe el numero: ");

      if (response!="5") {
     
         const firsNumber= interface.question("Dame el primer numero: ");
         const seconNumber= interface.question("Dame el segundo numero: ");

          switch (response ) {
          case "1":
             var result = parseInt(firsNumber) + parseInt(seconNumber); 
             console.log("El Resultado es:" +result);
          break;
          case "2":
             var result = parseInt(firsNumber) - parseInt(seconNumber); 
             console.log("El Resultado es:" +result);
          break;   
          case "3":
             var result = parseInt(firsNumber) * parseInt(seconNumber); 
             console.log("El Resultado es:" +result);
          break;
          case "4":
             var result = parseInt(firsNumber) / parseInt(seconNumber); 
             console.log("El Resultado es:" +result);
          break;
          default:
          break;
        } 
        interface.question("Presiona Enter para continuar ")
    }   
} while (response!="5"); 
