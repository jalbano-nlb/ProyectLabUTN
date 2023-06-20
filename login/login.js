const usuarios = [
    {username: 'jalbano', password: '2323', tipo: 1},
    {username: 'ivalerio', password: '2323', tipo: 1},
    {username: 'mbonu', password: '2323', tipo: 2},
];

function validarUsuarioPw(){
    let userInput = document.getElementById('username').value
    let pwInput = document.getElementById('pwd').value

    let validaOK = false;
    let _user;
    let _pw;
    let _tipo;

    usuarios.forEach(u => {
        if(u.username == userInput && u.password == pwInput){
            validaOK = true;
            _user = u.username;
            _pw = u.password;
            _tipo = u.tipo;
        }
    });

    if(!validaOK){
        alert('Usuario o contraseña incorrectos');
    }else{
        sessionStorage.setItem('usr', _user);
        sessionStorage.setItem('pwd', _pw);
        sessionStorage.setItem('type', _tipo);
        login(_tipo);
    }
}

function login(type){

    if (type == 1){
        var urlRedireccion = '/dashboards/alumnos/alumnosDash.html'
    }else if (type ==2){
        var urlRedireccion = '/dashboards/alumnos/alumnosDash.html'
    }

    window.location.href = urlRedireccion;

}