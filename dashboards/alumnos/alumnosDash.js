const userInfo = [];
let urlParams = new URLSearchParams(window.location.search);
let variable1 = urlParams.get('username');
let variable2 = urlParams.get('pw');
// let variable3 = urlParams.get('type');
//PARA MOSTRARLO EN HTML alcanzaría con buscarlo en el DOM y .textContent