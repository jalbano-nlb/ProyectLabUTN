const userInfo = {
    username: sessionStorage.getItem('usr'),
    type: sessionStorage.getItem('type'),
    apeNom: sessionStorage.getItem('apellidoNombre')
    // sessionStorage.setItem('pwd', _pw);
};
document.getElementById('nombreUser').innerHTML = userInfo.apeNom;
document.title = userInfo.apeNom;

/*Esta funcion es llamada al clickear INGRESAR en la carta de materia con el idMateria correspondiente*/
function ingresarMateria(idMateria) {    
    sessionStorage.setItem('materiaSelected', idMateria);
    
    window.location.href = '/dashboards/alumnos/materias/materia.html'
}

const misCatedras = [
    {id:1, nombre:'Programación III', Modalidad: 'Presencial'},
    {id:2, nombre:'Laboratorio de Programación III', Modalidad: 'Remoto'},
    {id:3, nombre:'Inglés', Modalidad: 'Presencial'},
    // {id:4, nombre:'Base de Datos', Modalidad: 'Remoto'},
]

/*Se define una función llamada generarCatedras que no tiene argumentos. 
Esta función genera dinámicamente las cards del HTML para mostrar las cátedras en el documento. 
Luego, se llama a esta función generarCatedras() para que se ejecute y muestre las cátedras en la página.*/
function generarCatedras (){

    let contenedorCatedras = document.getElementById('contenedor-catedras');

    /*Este bucle for recorre cada elemento en el array misCatedras. En cada iteración, se crea un nuevo elemento <div> 
    utilizando document.createElement('div') y se asigna a la variable divCatedra. */
    for (let i = 0; i < misCatedras.length; i++) {
        let catedra = misCatedras[i];
        let divCatedra = document.createElement('div');
        divCatedra.classList.add('card');
        divCatedra.style.maxWidth = '15rem';
        divCatedra.style.minWidth = '15rem';
        divCatedra.style.textAlign = 'center';
      
        /*se establece el contenido HTML del elemento divCatedra. Se utiliza una sintaxis de plantilla de cadena (template string)
        para crear el contenido con marcadores de posición ${} para acceder a las propiedades de la cátedra actual. 
        Dentro del contenido HTML, se muestran el nombre y la modalidad de la cátedra mediante ${catedra.nombre} y 
        ${catedra.Modalidad} respectivamente. Además, se agrega un botón "Ingresar" 
        con el atributo onclick que llama a la función ingresarMateria() pasando el id de la cátedra actual.*/
        divCatedra.innerHTML = `
          <div class="row" style="">
            <div class="col-12">
              <div class="card-body" style="min-height: 8rem">
                <h5 class="card-title">${catedra.nombre}</h5>
                <p class="card-text">${catedra.Modalidad}</p>
              </div>
              <div class="card-footer">
                <button class="btnCatedra" onclick="ingresarMateria(${catedra.id})">Ingresar</button>
              </div>
            </div>
          </div>
        `;
        contenedorCatedras.appendChild(divCatedra);
      }
}
generarCatedras();

/*Esta función se llama cuando se hace clic en el botón "Ingresar" en una de las tarjetas de cátedra*/
function ingresarMateria(idMateria) {    
  sessionStorage.setItem('materiaSelected', idMateria);
  
  window.location.href = '/dashboards/alumnos/materias/materia.html'
}

function closeSession() {
  sessionStorage.clear();
  window.location.href = '/login/login.html'
}