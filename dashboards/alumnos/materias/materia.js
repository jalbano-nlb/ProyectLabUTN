const materiaSelected = parseInt(sessionStorage.getItem('materiaSelected'));
var infoMaterias = [
    { id: 1, nombreMateria: 'Programacion III'},
    { id: 2, nombreMateria: 'Laboratorio III'},
    { id: 3, nombreMateria: 'Inglés III'},
];

switch (materiaSelected) {
    case 1:
        document.getElementById('nombreMateria').innerHTML = 'Programacion III';
        document.title = 'Programacion III';
        break;
    case 2:
        document.getElementById('nombreMateria').innerHTML = 'Laboratorio III';
        document.title = 'Laboratorio III';
        break;
    case 3:
        document.getElementById('nombreMateria').innerHTML = 'Inglés III';
        document.title = 'Inglés III';
        break;

    default:
        break;
}

function volverDash() {
    window.location.href = '/dashboards/alumnos/alumnosDash.html';
}