const userInfo = {
    username: sessionStorage.getItem('usr'),
    type: sessionStorage.getItem('type'),
    apeNom: sessionStorage.getItem('apellidoNombre')
    // sessionStorage.setItem('pwd', _pw);
};
document.getElementById('nombreUser').innerHTML = userInfo.apeNom;
document.title = userInfo.apeNom;