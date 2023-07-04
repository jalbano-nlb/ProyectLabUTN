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

var mostrarTablaProfes = false;

function generarTablaProfes(_algunosProfes){
    
    let contenedorBodyQuali = document.getElementById('body-profes');

    contenedorBodyQuali.innerHTML = '';

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

    if (mostrarTablaProfes) {
        let _cnt = document.getElementById('contenedorTablaProfes');
        _cnt.classList.add('debo-mostrar');
    }else{
        let _cnt = document.getElementById('contenedorTablaProfes');
        _cnt.classList.remove('debo-mostrar');
    }
};

function searchProfes(){    

    let _cnt = document.getElementById('contenedorTablaProfes');
    _cnt.classList.remove('debo-mostrar');
    let profesFiltrados = profesores.filter(filtrarProfesor);
    generarTablaProfes(profesFiltrados);
}

function filtrarProfesor(profesor) {

    let _filtros = {
        legajo: document.getElementById('inputLeg').value,
        nombre: document.getElementById('inputName').value,
        dni: document.getElementById('inputDNI').value,
        sede: document.getElementById('inputSede').value,
    };

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

    let nuevoProfe = {
        Legajo: document.getElementById('inputLegNuevo').value,
        apeNom: document.getElementById('inputNameNuevo').value,
        DNI: document.getElementById('inputDNINuevo').value,
        Sede: document.getElementById('inputSedeNuevo').value,
    };
    profesores.push(nuevoProfe);
    clearFormProfes();
    ocultarFormularioProfe();
}

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

