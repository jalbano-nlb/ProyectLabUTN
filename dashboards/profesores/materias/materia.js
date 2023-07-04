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
    {id:5, nombre:'Regularidad'},
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
            stringTable = stringTable + `<td onclick="modificarNota(${alumno.id}, ${nota.id})">${nota.nota}</td>`; 
        }

        if (alumno.Regular){
            stringTable = stringTable + `<td style="color: green"> <ion-icon name="checkbox-outline"></ion-icon> </td>`;

        }else{
            stringTable = stringTable + `<td style="color: red"> <ion-icon name="remove-circle-outline"></ion-icon> </td>`;
        }
        trAlumno.innerHTML = stringTable;
        contenedorBodyQuali.appendChild(trAlumno);
      }
}
generarAlumnos();

function AskNota(){
    return prompt("Ingrese la calificación deseada");
}

function modificarNota(alumnoId, notaId){
    let _notaDeseada = AskNota();
    
    let _validNota = parseInt(_notaDeseada);

    if (_validNota >= 1 && _validNota <= 10) {
        
        let _foundAlumn = misAlumnos.find(a => a.id == alumnoId);
    
        _foundAlumn.Notas.forEach(n => {
        if (n.id == notaId) n.nota = _notaDeseada;
        });
        let contenedorBodyQuali = document.getElementById('body-quali');
        contenedorBodyQuali.innerHTML = '';

        generarAlumnos();
    }else if(_notaDeseada == "NC"){
        let _foundAlumn = misAlumnos.find(a => a.id == alumnoId);
    
        _foundAlumn.Notas.forEach(n => {
        if (n.id == notaId) n.nota = _notaDeseada;
        });
        let contenedorBodyQuali = document.getElementById('body-quali');
        contenedorBodyQuali.innerHTML = '';

        generarAlumnos();
    }else{
        alert("Nota inválida");
    }
}

function exportToExcel() {
    var table = document.getElementById("t-qualis");
  
    // Crear el contenido XML para el archivo XLS
    var xmlContent = generateExcelXML(table);
  
    // Establecer el tipo de datos para la descarga
    var dataType = 'data:application/vnd.ms-excel';
  
    // Crear un enlace temporal y hacer clic en él
    var link = document.createElement('a');
    link.href = dataType + ',' + encodeURIComponent(xmlContent);
    link.style = 'visibility:hidden';
    link.download = 'FichaAlumnos.xls';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
  
function generateExcelXML(table) {
    var xmlContent = '<?xml version="1.0"?>\r\n';
    xmlContent += '<ss:Workbook xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">\r\n';
    xmlContent += '  <ss:Worksheet ss:Name="Sheet1">\r\n';
    xmlContent += '    <ss:Table>\r\n';
  
    var rows = table.getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
      xmlContent += '      <ss:Row>\r\n';
      var cells = rows[i].querySelectorAll('td, th');
      for (var j = 0; j < cells.length; j++) {
        var cellValue = cells[j].textContent;
        xmlContent += '        <ss:Cell>\r\n';
        xmlContent += '          <ss:Data ss:Type="String">' + cellValue + '</ss:Data>\r\n';
        xmlContent += '        </ss:Cell>\r\n';
      }
      xmlContent += '      </ss:Row>\r\n';
    }
  
    xmlContent += '    </ss:Table>\r\n';
    xmlContent += '  </ss:Worksheet>\r\n';
    xmlContent += '</ss:Workbook>\r\n';
  
    return xmlContent;
}
  
function exportToCSV() {
    var table = document.getElementById("t-qualis");
    var rows = table.getElementsByTagName("tr");
    var csv = [];

    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");

        for (var j = 0; j < cols.length; j++)
        row.push(cols[j].innerText);

        csv.push(row.join(","));
    }

    // Crear un enlace temporal y hacer clic en él
    var csvContent = "data:text/csv;charset=utf-8," + encodeURIComponent(csv.join("\n"));
    var link = document.createElement('a');
    link.href = csvContent;
    link.style = 'visibility:hidden';
    link.download = 'tablaAlumnos.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function volverDash() {
    window.location.href = '/dashboards/profesores/profesoresDash.html';
}