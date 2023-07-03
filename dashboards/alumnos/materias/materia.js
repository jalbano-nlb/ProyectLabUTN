const materiaSelected = parseInt(sessionStorage.getItem('materiaSelected'));
var infoMaterias = [
    { id: 1, nombreMateria: 'Programacion III', horario: 'Martes: 18hs - 22hs', info: 'Fundamentos y desarrollo de software utilizando lenguajes como Python, Java o C++. Se aprenderá a escribir código, entender variables, estructuras de control y funciones. A través de proyectos prácticos, se aplicarán los conocimientos adquiridos para resolver problemas y desarrollar programas informáticos. Se fomentará el pensamiento lógico y la resolución de problemas algorítmicos.'},
    { id: 2, nombreMateria: 'Laboratorio III' , horario: 'Miércoles: 18hs - 22hs', info: 'Aplicación práctica de herramientas y software informático. Uso de sistemas operativos, herramientas de productividad y software especializado. Desarrollo de habilidades prácticas en informática, como administración de redes, seguridad informática y programación. Enfoque en técnicas de resolución de problemas y desarrollo de competencias prácticas.'},
    { id: 3, nombreMateria: 'Inglés III', horario: 'Jueves: 18hs - 22hs', info: 'En esta materia, se busca mejorar las habilidades de comunicación en inglés, tanto oral como escrita. Se estudiará gramática, vocabulario y comprensión auditiva para lograr una mayor fluidez y precisión en el uso del idioma. A través de actividades prácticas, se trabajará en la capacidad de comprender y producir textos en inglés, como artículos, ensayos y presentaciones orales.'},
];

var notasMateria = [

    {id:1, idMateria:1, calificacion: '8', instacia: 'T.P. N°1'},
    {id:2, idMateria:1, calificacion: '10', instacia: 'T.P. N°2'},
    {id:3, idMateria:1, calificacion: '4', instacia: 'Parcial'},
    {id:4, idMateria:1, calificacion: '-', instacia: 'Recuperatorio'},

    {id:5, idMateria:2, calificacion: '2', instacia: 'T.P. N°1'},
    {id:6, idMateria:2, calificacion: '8', instacia: 'T.P. N°2'},
    {id:7, idMateria:2, calificacion: '6', instacia: 'Parcial'},
    {id:8, idMateria:2, calificacion: '-', instacia: 'Recuperatorio'},

    {id:9, idMateria:3, calificacion: '1', instacia: 'T.P. N°1'},
    {id:10, idMateria:3, calificacion: '1', instacia: 'T.P. N°2'},
    {id:11, idMateria:3, calificacion: '3', instacia: 'Parcial'},
    {id:12, idMateria:3, calificacion: '6', instacia: 'Recuperatorio'},
]

var asistencia = [
    {id:1, asiste: 'P'},
    {id:2, asiste: 'A'},
    {id:3, asiste: 'P'},
    {id:4, asiste: ''},
    {id:5, asiste: ''},
    {id:6, asiste: ''}
]

switch (materiaSelected) {
    case 1:
        document.getElementById('nombreMateria').innerHTML = 'Programacion III';
        document.title = 'Programacion III';
        generarInfoCatedras(1);
        generarHorariosCatedras(1);
        generarCalificaciones(1);
        generarClases(1);
        break;
    case 2:
        document.getElementById('nombreMateria').innerHTML = 'Laboratorio III';
        document.title = 'Laboratorio III';
        generarInfoCatedras(2);
        generarHorariosCatedras(2);
        generarCalificaciones(2);
        generarClases(2);
        break;
    case 3:
        document.getElementById('nombreMateria').innerHTML = 'Inglés III';
        document.title = 'Inglés III';
        generarInfoCatedras(3);
        generarHorariosCatedras(3);
        generarCalificaciones(3);
        generarClases(3);
        break;

    default:
        break;
}

function generarInfoCatedras(IDMateria){

    let contenedorIntro = document.getElementById('contenidos');
    let myMateria = infoMaterias.find(obj => obj.id == IDMateria);    
    let pInfoCatedra = document.createElement('p');

    pInfoCatedra.innerHTML = `${myMateria.info}`;
    contenedorIntro.appendChild(pInfoCatedra);
}

function generarHorariosCatedras(IDMateria) {

    let contenedorHorario = document.getElementById('horarios');
    let myMateria = infoMaterias.find(obj => obj.id == IDMateria);    
    let pHSCatedra = document.createElement('p');

    pHSCatedra.innerHTML = `${myMateria.horario}`;
    contenedorHorario.appendChild(pHSCatedra);
}

function generarCalificaciones(IDMateria) {
    
    let contenedorNotas = document.getElementById('notas');
    
    notasMateria.forEach(e => {
        if (e.idMateria === IDMateria){
            let pNotas = document.createElement('p'); 
            pNotas.innerHTML = ` <b>${e.instacia}:</b> ${e.calificacion}`;
            contenedorNotas.appendChild(pNotas);
        }
    });

}

function generarClases(IDMateria){
    
    let contenedorClases = document.getElementById('listaClases');

    asistencia.forEach(e => {
        let _liCard = document.createElement('li');
        _liCard.classList.add('card');

        switch (e.asiste) {
            case 'P':
                _liCard.classList.add('card-presente');
                break;
            case 'A':
                _liCard.classList.add('card-ausente');
                break;
            default:
                _liCard.classList.add('card-pendiente');
                break;
        }
        _liCard.innerHTML = `<h3>Clase: ${e.id}</h3>`;
        contenedorClases.appendChild(_liCard);
    })


    // <li class="card">
    //     <h3>Clase 1</h3>
    // </li>


}

function volverDash() {
    window.location.href = '/dashboards/alumnos/alumnosDash.html';
}