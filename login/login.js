const usuarios = [
    {username: 'jalbano', password: '2323', tipo: 1},
    {username: 'ivalerio', password: '2323', tipo: 1},
    {username: 'mbonu', password: '2323', tipo: 2},
];

function validarUsuarioPw(){
    userInput = document.getElementById('username').value
    pwInput = document.getElementById('pwd').value

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
        login(_user, _pw, _tipo);
    }
}

function login(usu, pass, type){
    
    let valor1 = usu;
    let valor2 = pass;
    let valor3 = type;
    
    var params = new URLSearchParams();
    params.append('username', valor1);
    params.append('pw', valor2);
    params.append('type', valor3);
    
    if (type == 1){
        var urlRedireccion = '/dashboard.html?' + params.toString();
    }else if (type ==2){
        var urlRedireccion = '/dashboardProfesor.html?' + params.toString();
    }
    
    window.location.href = urlRedireccion;

}
