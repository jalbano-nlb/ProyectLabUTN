var profesores = [
    {id: 1, apeNom: "Juan Pérez", DNI: 75183697, Legajo: 23545, Sede: "Zárate"},
    {id: 2, apeNom: "María González", DNI: 26857190, Legajo: 67891, Sede: "Campana"},
    {id: 3, apeNom: "Martín Bonuccelli", DNI: 65974203, Legajo: 82452, Sede: "Zárate"},
    {id: 4, apeNom: "Ana Martínez", DNI: 12398765, Legajo: 45678, Sede: "Zárate"},
    {id: 5, apeNom: "Pedro Sánchez", DNI: 85973641, Legajo: 98765, Sede: "Campana"},
    {id: 6, apeNom: "Laura López", DNI: 28579036, Legajo: 74185, Sede: "Escobar"},
    {id: 7, apeNom: "Carlos Fernández", DNI: 64357219, Legajo: 56987, Sede: "Zárate"},
    {id: 8, apeNom: "Lucía Ramírez", DNI: 92753641, Legajo: 31542, Sede: "Campana"},
    {id: 9, apeNom: "Gabriel Castro", DNI: 46285391, Legajo: 84562, Sede: "Escobar"},
    {id: 10, apeNom: "Valentina Peralta", DNI: 31879542, Legajo: 96215, Sede: "Zárate"},
    {id: 11, apeNom: "Andrés López", DNI: 57483692, Legajo: 75896, Sede: "Campana"},
    {id: 12, apeNom: "Florencia Rodríguez", DNI: 95128463, Legajo: 21457, Sede: "Escobar"},
    {id: 13, apeNom: "Martín Gómez", DNI: 26783549, Legajo: 98741, Sede: "Zárate"},
    {id: 14, apeNom: "Carolina Mendoza", DNI: 73619842, Legajo: 65287, Sede: "Campana"},
    {id: 15, apeNom: "Sebastián Navarro", DNI: 81593642, Legajo: 14789, Sede: "Escobar"},
    {id: 16, apeNom: "Marcela Silva", DNI: 32649781, Legajo: 36987, Sede: "Zárate"},
    {id: 17, apeNom: "Javier Fernández", DNI: 75813924, Legajo: 78542, Sede: "Campana"},
    {id: 18, apeNom: "Camila Torres", DNI: 49172583, Legajo: 59632, Sede: "Escobar"},
    {id: 19, apeNom: "Gonzalo Romero", DNI: 67295184, Legajo: 87412, Sede: "Zárate"},
    {id: 20, apeNom: "Daniela Ortega", DNI: 51842967, Legajo: 12569, Sede: "Campana"},
    {id: 21, apeNom: "Martín Gimenez", DNI: 26783549, Legajo: 98741, Sede: "Escobar"},
]

var alumnos = [
    {id: 1, apeNom: "Lucía Fernández", DNI: 43521697, Legajo: 15264, Sede: "Zárate"},
    {id: 2, apeNom: "Pedro Gómez", DNI: 74920518, Legajo: 86491, Sede: "Campana"},
    {id: 3, apeNom: "María Rodríguez", DNI: 62158973, Legajo: 24683, Sede: "Escobar"},
    {id: 4, apeNom: "Luis Pérez", DNI: 97341682, Legajo: 95214, Sede: "Zárate"},
    {id: 5, apeNom: "Carolina Martínez", DNI: 28649175, Legajo: 37456, Sede: "Campana"},
    {id: 6, apeNom: "Javier Sánchez", DNI: 53897462, Legajo: 64897, Sede: "Escobar"},
    {id: 7, apeNom: "Ana López", DNI: 86294157, Legajo: 75963, Sede: "Zárate"},
    {id: 8, apeNom: "Gabriel Torres", DNI: 72465193, Legajo: 93642, Sede: "Campana"},
    {id: 9, apeNom: "Florencia González", DNI: 19582674, Legajo: 21536, Sede: "Escobar"},
    {id: 10, apeNom: "Martín Silva", DNI: 37265948, Legajo: 58642, Sede: "Zárate"},
    {id: 11, apeNom: "Camila Ramírez", DNI: 61854239, Legajo: 96321, Sede: "Campana"},
    {id: 12, apeNom: "Andrés Fernández", DNI: 93745826, Legajo: 12479, Sede: "Escobar"},
    {id: 13, apeNom: "Laura Pérez", DNI: 26547839, Legajo: 45261, Sede: "Zárate"},
    {id: 14, apeNom: "Gonzalo Mendoza", DNI: 49362718, Legajo: 74261, Sede: "Campana"},
    {id: 15, apeNom: "Valentina Torres", DNI: 75891632, Legajo: 89647, Sede: "Escobar"},
    {id: 16, apeNom: "Marcela Rodríguez", DNI: 31657289, Legajo: 32148, Sede: "Zárate"},
    {id: 17, apeNom: "Sebastián López", DNI: 87654321, Legajo: 56789, Sede: "Campana"},
    {id: 18, apeNom: "Daniela Sánchez", DNI: 21938547, Legajo: 98756, Sede: "Escobar"},
    {id: 19, apeNom: "Javier González", DNI: 75129384, Legajo: 65432, Sede: "Zárate"},
    {id: 20, apeNom: "Carolina Martínez", DNI: 43698527, Legajo: 38746, Sede: "Campana"}
  ];

var mostrarTablaProfes = false;
var mostrarTablaAlumno = false;

/* 
    En la funciones verTabs se oculta o muestra según corresponda los elementos correspondientes
    Se ejecuta esta función al clickear en los tabs y así mostrar la info deseada.
    Por defecto, empezamos forzando la visualización de verTabProfes
*/
function verTabProfes() {
    document.getElementById('alumnos').classList.remove('debo-mostrar-bloque');
    document.getElementById('profesores').classList.add('debo-mostrar-bloque');
}
function verTabAlumnos() {
    document.getElementById('profesores').classList.remove('debo-mostrar-bloque');
    document.getElementById('alumnos').classList.add('debo-mostrar-bloque');
}
verTabProfes();
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////PROFES////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function generarTablaProfes(_algunosProfes){
    
    let contenedorBodyQuali = document.getElementById('body-profes');

    contenedorBodyQuali.innerHTML = '';

    /*
        Este bucle for recorre cada elemento en el parámetro recibido _algunosProfes. En cada iteración, se crea un nuevo elemento <tr> 
        utilizando document.createElement('tr') y se asigna a la variable trProfe. 
        Se completa la tabla con la variable stringTable con los datos correspondientes de cada profesor en un th
    */
    for (let i = 0; i < _algunosProfes.length; i++) {
        mostrarTablaProfes = true;
        let profesor = _algunosProfes[i];
        let trProfe = document.createElement('tr');
        let stringTable = '';

        stringTable = stringTable + `<th>${i+1}</th>`;
        stringTable = stringTable + `<th>${profesor.Legajo}</th>`;
        stringTable = stringTable + `<th>${profesor.DNI}</th>`;
        stringTable = stringTable + `<th>${profesor.apeNom}</th>`;
        stringTable = stringTable + `<th>${profesor.Sede}</th>`;

        trProfe.innerHTML = stringTable;
        contenedorBodyQuali.appendChild(trProfe);
    }

    /* 
        Si encontró algún profesor con los parámetros recibidos, entonces muestra el div con la tabla
        de lo contrario, no la muestra (en caso de que ya esté visible, la oculta.)
     */
    if (mostrarTablaProfes) {
        let _cnt = document.getElementById('contenedorTablaProfes');
        _cnt.classList.add('debo-mostrar');
    }else{
        let _cnt = document.getElementById('contenedorTablaProfes');
        _cnt.classList.remove('debo-mostrar');
    }
};

function searchProfes(){    

    /* Comienzo ocultando la tabla para luego evaluar si mostrarla o no en la funcion generarTablaProfes() */
    let _cnt = document.getElementById('contenedorTablaProfes');
    _cnt.classList.remove('debo-mostrar');
    /* Se busca dentro del array profesores mediante el método .filer() enviando como parámetro la funcion filtrarProfesor*/
    let profesFiltrados = profesores.filter(filtrarProfesor);
    generarTablaProfes(profesFiltrados);
}

function filtrarProfesor(profesor) {

    // cargo en una variable todos los filtros seleccionados
    let _filtros = {
        legajo: document.getElementById('inputLeg').value,
        nombre: document.getElementById('inputName').value,
        dni: document.getElementById('inputDNI').value,
        sede: document.getElementById('inputSede').value,
    };

    // en caso de que no encuentre coincidencia retorno false lo que NO será agregado a la respuesta
    if (_filtros.legajo && profesor.Legajo != _filtros.legajo) {
      return false;
    }
    if (_filtros.nombre && !profesor.apeNom.toLowerCase().includes(_filtros.nombre.toLowerCase())) {
      return false;
    }
    if (_filtros.dni && profesor.DNI != _filtros.dni) {
      return false;
    }
    if (_filtros.sede && profesor.Sede != _filtros.sede) {
      return false;
    }
    return true;
}

function confirmAddProfe (){

    // cargo en una variable todos los datos ingresados para dar el alta
    let nuevoProfe = {
        Legajo: document.getElementById('inputLegNuevo').value,
        apeNom: document.getElementById('inputNameNuevo').value,
        DNI: document.getElementById('inputDNINuevo').value,
        Sede: document.getElementById('inputSedeNuevo').value,
    };

    //Se agrega al array profesores el nuevo profesor ingresado
    profesores.push(nuevoProfe);
    clearFormProfes();
    ocultarFormularioProfe();
}

/* Esta función es llamada al clickear NUEVO en los filtros de profesores
    Ocultará la tabla de busqueda y mostrará el formulario de alta. */
function mostrarFormularioProfe() {

    let _cntTabla = document.getElementById('contenedorTablaProfes');
        _cntTabla.classList.remove('debo-mostrar');

    let _cnt = document.getElementById('contenedorFormProfes');
        _cnt.classList.add('debo-mostrar');
}

function ocultarFormularioProfe(){
    let _cnt = document.getElementById('contenedorFormProfes');
        _cnt.classList.remove('debo-mostrar');
}

function clearFormProfes(){
    document.getElementById('inputLegNuevo').value = ''
    document.getElementById('inputNameNuevo').value = ''
    document.getElementById('inputDNINuevo').value = ''
    document.getElementById('inputSedeNuevo').value = ''
}

function cancelAddProfe(){
    clearFormProfes();
    ocultarFormularioProfe();
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////ALUMNOS////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generarTablaAlumnos(_algunosAlumnos){
    
    let contenedorBodyAlumnos = document.getElementById('body-alumnos');

    contenedorBodyAlumnos.innerHTML = '';

    /*
        Este bucle for recorre cada elemento en el parámetro recibido _algunosAlumnos. En cada iteración, se crea un nuevo elemento <tr> 
        utilizando document.createElement('tr') y se asigna a la variable trAlumno. 
        Se completa la tabla con la variable stringTable con los datos correspondientes de cada alumno en un th
    */
    for (let i = 0; i < _algunosAlumnos.length; i++) {
        mostrarTablaAlumno = true;
        let alumno = _algunosAlumnos[i];
        let trAlumno = document.createElement('tr');
        let stringTable = '';

        stringTable = stringTable + `<th>${i+1}</th>`;
        stringTable = stringTable + `<th>${alumno.Legajo}</th>`;
        stringTable = stringTable + `<th>${alumno.DNI}</th>`;
        stringTable = stringTable + `<th>${alumno.apeNom}</th>`;
        stringTable = stringTable + `<th>${alumno.Sede}</th>`;

        trAlumno.innerHTML = stringTable;
        contenedorBodyAlumnos.appendChild(trAlumno);
    }

    /* 
        Si encontró algún alumno con los parámetros recibidos, entonces muestra el div con la tabla
        de lo contrario, no la muestra (en caso de que ya esté visible, la oculta.)
     */
    if (mostrarTablaAlumno) {
        let _cnt = document.getElementById('contenedorTablaAlumnos');
        _cnt.classList.add('debo-mostrar');
    }else{
        let _cnt = document.getElementById('contenedorTablaAlumnos');
        _cnt.classList.remove('debo-mostrar');
    }
};

function searchAlumnos(){    

    /* Comienzo ocultando la tabla para luego evaluar si mostrarla o no en la funcion generarTablaAlumnos() */
    let _cnt = document.getElementById('contenedorTablaAlumnos');
    _cnt.classList.remove('debo-mostrar');
    /* Se busca dentro del array alumnos mediante el método .filer() enviando como parámetro la funcion filtrarAluno*/
    let alumnosFiltrados = alumnos.filter(filtrarAlumno);
    generarTablaAlumnos(alumnosFiltrados);
}

function filtrarAlumno(alumno) {

    // cargo en una variable todos los filtros seleccionados
    let _filtros = {
        legajo: document.getElementById('inputLegAlumn').value,
        nombre: document.getElementById('inputNameAlumn').value,
        dni: document.getElementById('inputDNIAlumn').value,
        sede: document.getElementById('inputSedeAlumn').value,
    };

    // en caso de que no encuentre coincidencia retorno false lo que NO será agregado a la respuesta
    if (_filtros.legajo && alumno.Legajo != _filtros.legajo) {
      return false;
    }
    if (_filtros.nombre && !alumno.apeNom.toLowerCase().includes(_filtros.nombre.toLowerCase())) {
      return false;
    }
    if (_filtros.dni && alumno.DNI != _filtros.dni) {
      return false;
    }
    if (_filtros.sede && alumno.Sede != _filtros.sede) {
      return false;
    }
    return true;
}

function confirmAddAlumno (){

    // cargo en una variable todos los datos ingresados para dar el alta
    let nuevoAlumno = {
        Legajo: document.getElementById('inputLegNuevoAlumn').value,
        apeNom: document.getElementById('inputNameNuevoAlumn').value,
        DNI: document.getElementById('inputDNINuevoAlumn').value,
        Sede: document.getElementById('inputSedeNuevoAlumn').value,
    };
    //Se agrega al array alumnos el nuevo profesor ingresado
    alumnos.push(nuevoAlumno);
    clearFormAlumnos();
    ocultarFormularioAlumno();
}

/* Esta función es llamada al clickear NUEVO en los filtros de alumnos
    Ocultará la tabla de busqueda y mostrará el formulario de alta. */
function mostrarFormularioAlumno() {

    let _cntTabla = document.getElementById('contenedorTablaAlumnos');
        _cntTabla.classList.remove('debo-mostrar');

    let _cnt = document.getElementById('contenedorFormAlumnos');
        _cnt.classList.add('debo-mostrar');
}

function clearFormAlumnos(){
    document.getElementById('inputLegNuevoAlumn').value = ''
    document.getElementById('inputNameNuevoAlumn').value = ''
    document.getElementById('inputDNINuevoAlumn').value = ''
    document.getElementById('inputSedeNuevoAlumn').value = ''
}

function ocultarFormularioAlumno(){
    let _cnt = document.getElementById('contenedorFormAlumnos');
        _cnt.classList.remove('debo-mostrar');
}

function cancelAddAlumno(){
    clearFormAlumnos();
    ocultarFormularioAlumno();
}


function closeSession() {
    sessionStorage.clear();
    window.location.href = '/login/login.html'
  }