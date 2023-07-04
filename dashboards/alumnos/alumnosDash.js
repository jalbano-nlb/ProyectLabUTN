const userInfo = {
    username: sessionStorage.getItem('usr'),
    type: sessionStorage.getItem('type'),
    apeNom: sessionStorage.getItem('apellidoNombre')
    // sessionStorage.setItem('pwd', _pw);
};
document.getElementById('nombreUser').innerHTML = userInfo.apeNom;
document.title = userInfo.apeNom;

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

function generarCatedras (){

    let contenedorCatedras = document.getElementById('contenedor-catedras');
    for (let i = 0; i < misCatedras.length; i++) {
        let catedra = misCatedras[i];
        let divCatedra = document.createElement('div');
        divCatedra.classList.add('card');
        divCatedra.style.maxWidth = '15rem';
        divCatedra.style.minWidth = '15rem';
        divCatedra.style.textAlign = 'center';
      
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

function ingresarMateria(idMateria) {    
  sessionStorage.setItem('materiaSelected', idMateria);
  
  window.location.href = '/dashboards/alumnos/materias/materia.html'
}

function closeSession() {
  sessionStorage.clear();
  window.location.href = '/login/login.html'
}