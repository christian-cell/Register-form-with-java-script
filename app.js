/*INDICE:


*/

//aqui creo una serie de eventos para que se produzca un efecto 
//de colores cuando el mouse pase sobre los diferentes divs
var formulario = document.querySelector('form');
formulario.addEventListener('mouseover',function(){
    formulario.style.backgroundColor="#0a3d62";
});

formulario.addEventListener('mouseout',function(){
    formulario.style.backgroundColor="#60a3bc";
});

var nombre = document.getElementById('nombre');
 nombre.addEventListener('mouseover',function(){
     nombre.style.backgroundColor="#f5f6fa";
 });

 nombre.addEventListener('mouseout',function(){
     nombre.style.backgroundColor="#95afc0";
 });

 var apell = document.getElementById('apellidos');
 apell.addEventListener('mouseover',function(){
     apell.style.backgroundColor="#f5f6fa";
 });

 apellidos.addEventListener('mouseout',function(){
     apellidos.style.backgroundColor="#95afc0";
 });


var naci = document.getElementById('nacimiento');
naci.addEventListener('mouseover',function(){
    naci.style.backgroundColor="#f5f6fa"
});
naci.addEventListener('mouseout',function(){
    naci.style.backgroundColor="#95afc0";
});

var dire = document.getElementById('direccion');
dire.addEventListener('mouseover',function(){
    dire.style.backgroundColor="#f5f6fa";
});

dire.addEventListener('mouseout',function(){
    dire.style.backgroundColor="#95afc0";
});

var num = document.getElementById('numero');
num.addEventListener('mouseover',function(){
    num.style.backgroundColor="#f5f6fa";
});

num.addEventListener('mouseout',function(){
    num.style.backgroundColor="#95afc0";
});

var number = document.getElementById('numeropi');
number.addEventListener('mouseover',function(){
    number.style.backgroundColor="#f5f6fa";
});

number.addEventListener('mouseout',function(){
    number.style.backgroundColor="#95afc0";
});

var local = document.getElementById('localidad');
local.addEventListener('mouseover',function(){
    local.style.backgroundColor="#f5f6fa";
});

local.addEventListener('mouseout',function(){
    local.style.backgroundColor="#95afc0";
});

var dni = document.getElementById('dni');
dni.addEventListener('mouseover',function(){
    dni.style.backgroundColor="#f5f6fa";
});

dni.addEventListener('mouseout',function(){
    dni.style.backgroundColor="#95afc0";
});





//Aqui voy a construir unas clases usando el metodo constructor

class form{
    constructor(nombre , apellidos , nacimiento , direccion , numero , numeropi , localidad , dni){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.nacimiento = nacimiento;
        this.direccion  = direccion;
        this.numero = numero;
        this.numeropi = numeropi;
        this.localidad = localidad;
        this.dni = dni;
    }
}


class UI {
    addForm(newForm){
         const infoList = document.getElementById('info-list');        //accedo al div "info-list" donde aparecera los datos
         const element = document.createElement('div');                 //del usuario una vez de a submit para que los compruebe
         element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">                                        <!--aqui diseño el contenedor que tendra-->
                    <strong>Nombre</strong>: ${newForm.nombre}                 <!--otro contenedor dentro que mostrar la-->
                    <strong>Apellidos</strong>: ${newForm.apellidos}           <!--info que el usuario salvo para que la-->
                    <strong>Año De Nacimiento</strong>:${newForm.nacimiento}   <!--compruebe y lo borre si quiere corre-->
                    <strong>Direccion</strong>:${newForm.direccion}            <!--gir algo-->
                    <strong>Portal</strong>:${newForm.numero}
                    <strong>Numero De Piso</strong>:${newForm.numeropi}
                    <strong>Localidad</strong>:${newForm.localidad}
                    <strong>dni</strong>:${newForm.dni}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
          `;    
          infoList.appendChild(element);        
    }      //por ultimo en eventos del DOM "abajo" llamare este evento

          


    resetForm() {
        document.getElementById('formulario').reset();           //aqui cree el evento reset para el div con ID formulario
                                                               //y lo llamo abajo en el apartado de eventos del DOM
    }


    deleteForm(element){                                 //en esta linea voy a definir el evento para el boton "delete"
               if(element.name === 'delete'){
                   element.parentElement.parentElement.parentElement.remove();
                   this.showMessage('Formulario Eliminado', 'success'); //aqui muestro un mensaje cuando el usuario elimina el formulario
               }                                   //lo que yo quiero borrar es el div info-list que es el padre de un div
                                                  //a su vez este div es padre de otro div que a su vez es padre de delete
    }
                                                  //capturo el evento abajo en eventos del DOM

    showMessage(message,cssClass){                          //aqui configuro el mensaje "añadiendo formulario" y le doy dos
          const div = document.createElement('div');        //parametros "message" y una clase de bootswacht
          div.className = `alert alert-${cssClass}mt-4`;         //en esta linea concateno la clase de css con la bootswacht
          div.appendChild(document.createTextNode(message))   //aqui creo un nodo que contendra un texto y digo que sera
                                                               //hijo de div.
          const cont = document.getElementById('contenedor');      //aqui le indico donde insertar el mensaje dentro
         var formu = document.getElementById('formulario');        //del div contenedor pero antes que el div formulario
          cont.insertBefore(div,formu);                             //solo que da llamrlo en eventos del DOM     
          
          setTimeout(function(){
              document.querySelector('.alert').remove();            //aqui añado un nuevo metodo con funcion anonima
          }, 3000);                                                 //dos parametros :1 la unica etiqueta que empieza por alert
    }                                                               // a la que aplico el evento remove y 2 el tiempo 3 sec

}                          


//Eventos del DOM

//En este primer evento atrapo cada uno de los ID de mi formulario
//en una constante ID ,creo un evento de la clase submit .


var formu = document.getElementById('formulario');
formu.addEventListener('submit', function(e){                     //aqui capturo el dato que me da cada vez que ejecuto 
   const nombre = document.getElementById('nombre').value;        //ese dato se llama evento "e"
   const apellidos = document.getElementById('apellidos').value;
   const nacimiento = document.getElementById('nacimiento').value;
   const direccion = document.getElementById('direccion').value;
   const numero = document.getElementById('numero').value;
   const numeropi = document.getElementById('numeropi').value;
   const localidad = document.getElementById('localidad').value;
   const dni = document.getElementById('dni').value;
   

   
  
   

    //una vez el usuario hace submit necesito crear un nuevo formulario con estos valores dentro y
    // lo guardo dentro de una constante para verlo por pantalla voy a crear un div dentro del objeto add form de arriba
   const newForm = new form(nombre , apellidos , nacimiento , direccion , numero , numeropi , localidad , dni);


   const ui = new UI();   //aqui creo una clase nueva UI que ya lleva dentro los metodos add form , reset form ...


    // en la linea de abajo le digo a la consola que si el valor de algunos de los campos esta vacio muestre este mensaje
   if (nombre === '' || apellidos === '' || nacimiento === '' || direccion === '' || numero === '' || numeropi === '' || localidad === '' || dni === ''){
       return ui.showMessage('Completa Todos Los Campos','danger');
   }
     //con un return le digo que este evento se retorne y no continue al mensaje de producto añadido

   ui.addForm(newForm);   //accedo a su metodo addForm y le doy los valores de newForm para que los muestre
   ui.resetForm();        //en esta linea le digo a la consola que despues de hacer submit se resetee el formulario

   ui.showMessage('Formulario Añadido', 'success color:black');

   //cada vez que el user le da a "save" el cuestionario se refresca
   //para prevenir ese comportamiento por defecto uso este comando
   e.preventDefault();
   
});
var dele = document.getElementById('info-list');
dele.addEventListener('click',function(e){        //en el click quiero recibir el objeto del evento "e" use console.log
 const ui = new UI();
 ui.deleteForm(e.target)                                     //(e.taget)para ver qu esta capturando dentro de este div
                                                              // y veo que tiene una propiedad llamada name
});