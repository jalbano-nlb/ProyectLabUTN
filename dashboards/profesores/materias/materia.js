const materiaSelected = parseInt(sessionStorage.getItem('materiaSelected'));
var infoMaterias = [
    {id:1, nombre:'Programación III', Modalidad: 'Presencial'},
    {id:2, nombre:'Laboratorio de Programicón III', Modalidad: 'Remoto'},
    {id:3, nombre:'Inglés', Modalidad: 'Presencial'},
    {id:4, nombre:'Base de Datos', Modalidad: 'Remoto'},
]

var misCalificativos = [
    {id:1, nombre:'TP 1'},
    {id:2, nombre:'TP2'},
    {id:3, nombre:'Parcial'},
    {id:4, nombre:'Recuperatorio'},
]

var misAlumnos = [
    {id: 1, apeNom: "Juan Pérez", Notas: [{id: 1, nota: 7}, {id: 2, nota: 6}, {id: 3, nota: 8}, {id: 4, nota: 7}], Regular: true},
    {id: 2, apeNom: "María López", Notas: [{id: 1, nota: 6}, {id: 2, nota: 5}, {id: 3, nota: 7}, {id: 4, nota: 6}], Regular: false},
    {id: 3, apeNom: "Carlos Fernández", Notas: [{id: 1, nota: 8}, {id: 2, nota: 7}, {id: 3, nota: 9}, {id: 4, nota: 8}], Regular: true},
    {id: 4, apeNom: "Ana García", Notas: [{id: 1, nota: 9}, {id: 2, nota: 8}, {id: 3, nota: 10}, {id: 4, nota: 9}], Regular: true},
    {id: 5, apeNom: "Pedro Rodríguez", Notas: [{id: 1, nota: 7}, {id: 2, nota: 6}, {id: 3, nota: 8}, {id: 4, nota: 7}], Regular: true},
    {id: 6, apeNom: "Laura Martínez", Notas: [{id: 1, nota: 5}, {id: 2, nota: 4}, {id: 3, nota: 6}, {id: 4, nota: 5}], Regular: false},
    {id: 7, apeNom: "Manuel Sánchez", Notas: [{id: 1, nota: 6}, {id: 2, nota: 5}, {id: 3, nota: 7}, {id: 4, nota: 6}], Regular: false},
    {id: 8, apeNom: "Sofía Torres", Notas: [{id: 1, nota: 8}, {id: 2, nota: 7}, {id: 3, nota: 9}, {id: 4, nota: 8}], Regular: true},
    {id: 9, apeNom: "Javier Ramírez", Notas: [{id: 1, nota: 7}, {id: 2, nota: 6}, {id: 3, nota: 8}, {id: 4, nota: 7}], Regular: true},
    {id: 10, apeNom: "Isabel Gómez", Notas: [{id: 1, nota: 9}, {id: 2, nota: 8}, {id: 3, nota: 10}, {id: 4, nota: 9}], Regular: true},
    {id: 11, apeNom: "Gabriel Castro", Notas: [{id: 1, nota: 6}, {id: 2, nota: 5}, {id: 3, nota: 7}, {id: 4, nota: 6}], Regular: false},
    {id: 12, apeNom: "Marta Navarro", Notas: [{id: 1, nota: 8}, {id: 2, nota: 7}, {id: 3, nota: 9}, {id: 4, nota: 8}], Regular: true},
    {id: 13, apeNom: "Alejandro Ortega", Notas: [{id: 1, nota: 7}, {id: 2, nota: 6}, {id: 3, nota: 8}, {id: 4, nota: 7}], Regular: true},
    {id: 14, apeNom: "Elena Jiménez", Notas: [{id: 1, nota: 5}, {id: 2, nota: 4}, {id: 3, nota: 6}, {id: 4, nota: 5}], Regular: false},
    {id: 15, apeNom: "Adrián Medina", Notas: [{id: 1, nota: 6}, {id: 2, nota: 5}, {id: 3, nota: 7}, {id: 4, nota: 6}], Regular: false},
    {id: 16, apeNom: "Clara Castro", Notas: [{id: 1, nota: 8}, {id: 2, nota: 7}, {id: 3, nota: 9}, {id: 4, nota: 8}], Regular: true},
    {id: 17, apeNom: "Diego Molina", Notas: [{id: 1, nota: 7}, {id: 2, nota: 6}, {id: 3, nota: 8}, {id: 4, nota: 7}], Regular: true},
    {id: 18, apeNom: "Luisa Vargas", Notas: [{id: 1, nota: 9}, {id: 2, nota: 8}, {id: 3, nota: 10}, {id: 4, nota: 9}], Regular: true},
    {id: 19, apeNom: "Miguel Ríos", Notas: [{id: 1, nota: 6}, {id: 2, nota: 5}, {id: 3, nota: 7}, {id: 4, nota: 6}], Regular: false},
    {id: 20, apeNom: "Paula Herrera", Notas: [{id: 1, nota: 8}, {id: 2, nota: 7}, {id: 3, nota: 9}, {id: 4, nota: 8}], Regular: true}
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

function generarCalificaciones (){

    let contenedorHeaders = document.getElementById('header-qualiRow');
    for (let i = 0; i < misCalificativos.length; i++) {
        let qualyNombre = misCalificativos[i];
        let qualyHeader = document.createElement('th');
      
        qualyHeader.innerHTML = `${qualyNombre.nombre}`;
        contenedorHeaders.appendChild(qualyHeader);
      }
}
generarCalificaciones();

function generarAlumnos (){

    let contenedorBodyQuali = document.getElementById('body-quali');

    for (let i = 0; i < misAlumnos.length; i++) {
        let alumno = misAlumnos[i];
        let trAlumno = document.createElement('tr');
        
        let stringTable =''
        stringTable = stringTable + `<th>${i+1}</th>`;
        stringTable = stringTable + `<td>${alumno.apeNom}</td>`;
        
        for (let v = 0; v < alumno.Notas.length; v++) {
            
            let nota = alumno.Notas[v];
            stringTable = stringTable + `<td>${nota.nota}</td>`; 
        }
        trAlumno.innerHTML = stringTable;
        contenedorBodyQuali.appendChild(trAlumno);
      }
}
generarAlumnos();