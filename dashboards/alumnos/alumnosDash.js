const userInfo = {
    username: sessionStorage.getItem('usr'),
    type: sessionStorage.getItem('type')
    // sessionStorage.setItem('pwd', _pw);
};
document.getElementById('nombreUser').innerHTML = userInfo.username;



//PARA MOSTRARLO EN HTML alcanzaría con buscarlo en el DOM y .textContent