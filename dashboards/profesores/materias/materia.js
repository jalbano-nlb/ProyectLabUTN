const materiaSelected = parseInt(sessionStorage.getItem('materiaSelected'));
var infoMaterias = [
    {id:1, nombre:'Programación III', Modalidad: 'Presencial'},
    {id:2, nombre:'Laboratorio de Programicón III', Modalidad: 'Remoto'},
    {id:3, nombre:'Inglés', Modalidad: 'Presencial'},
    {id:4, nombre:'Base de Datos', Modalidad: 'Remoto'},
]

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