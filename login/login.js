const usuarios = [
    {username: 'jalbano', password: '2323', apellidoNombre: 'Albano, Joaquín', tipo: 1},
    {username: 'ivalerio', password: '2323', apellidoNombre: 'Valerio, Ignacio', tipo: 3},
    {username: 'mbonu', password: '2323', apellidoNombre: 'Bonuccelli, Martín', tipo: 2},
];

function validarUsuarioPw(){
    let userInput = document.getElementById('username').value
    let pwInput = document.getElementById('pwd').value

    let validaOK = false;
    let _user;
    let _pw;
    let _tipo;

    usuarios.forEach(u => {
        if(u.username.toLocaleLowerCase() == userInput.toLocaleLowerCase() && u.password == pwInput){
            validaOK = true;
            _user = u.username;
            _pw = u.password;
            _tipo = u.tipo;
            _apeNom = u.apellidoNombre;
            
            sessionStorage.setItem('usr', _user);
            sessionStorage.setItem('pwd', _pw);
            sessionStorage.setItem('type', _tipo);
            sessionStorage.setItem('apellidoNombre', _apeNom);
            return;
        }
    });

    if(!validaOK){
        alert('Usuario o contraseña incorrectos');
    }else{
        login(_tipo);
    }
}

function login(type){

    if (type == 1){
        var urlRedireccion = '/dashboards/alumnos/alumnosDash.html'
    }else if (type ==2){
        var urlRedireccion = '/dashboards/profesores/profesoresDash.html'
    }else if (type == 3){
        var urlRedireccion = '/dashboards/administrativos/administrativosDash.html'
    }

    window.location.href = urlRedireccion;

}