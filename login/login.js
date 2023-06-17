const usuarios = [
    {username: 'jalbano', password: '2323', tipo: 1},
    {username: 'ivalerio', password: '2323', tipo: 1},
    {username: 'mbonu', password: '2323', tipo: 2},
];

var formulario = document.getElementById('logForm');
var tipo;

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let _userVal = document.getElementById('username').value;
    let _pwVal = btoa(document.getElementById('pwd').value); // decodear con atob
    let _typeVal = this.tipo;
    let location = window.location.host;
    
    fetch('dashboards/alumnosDash.html', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ v1: _userVal, v2: _pwVal, v3: _typeVal })
      })
      .then(function(response) {
        console.log("response: ", response)
        window.location.href = 'http://'+ window.location.host + 'dashboards/alumnosDash.html';
        console.log('Enviada correctamente');
      })
      .catch(function(error) {
        console.log('Error al enviar la solicitud:', error);
      });
  });

function validarUsuarioPw(){
    userInput = document.getElementById('username').value
    pwInput = document.getElementById('pwd').value

    let validaOK = false;
    let _user;
    let _pw;

    usuarios.forEach(u => {
        if(u.username == userInput && u.password == pwInput){
            validaOK = true;
            _user = u.username;
            _pw = u.password;
            this.tipo = u.tipo;
        }
    });

    if(!validaOK){
        alert('Usuario o contraseña incorrectos');
    }else{
        // login(_user, _pw, _tipo);
        formulario.submit();
    }
}

// function login(usu, pass, type){
    
//     let valor1 = usu;
//     let valor2 = pass;
//     let valor3 = type;
    
//     var params = new URLSearchParams();
//     params.append('username', valor1);
//     params.append('pw', valor2);
//     params.append('type', valor3);
    
//     if (type == 1){
//         var urlRedireccion = '/dashboards/alumnosDash.html?' + params.toString();
//     }else if (type ==2){
//         var urlRedireccion = '/dashboardProfesor.html?' + params.toString();
//     }
    
//     window.location.href = urlRedireccion;

// }
