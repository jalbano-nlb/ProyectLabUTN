console.log("ESTOY EN DASHBOARD")
let urlParams = new URLSearchParams(window.location.search);
let variable1 = urlParams.get('username');
let variable2 = urlParams.get('pw');
let variable3 = urlParams.get('type');
  
  // Ahora puedes utilizar las variables recibidas como desees
console.log(variable1);
console.log(variable2);
console.log(variable3);