 // Función para calcular el tiempo restante hasta el evento
 function updateCountdown() {
  var eventCountdownElements = document.getElementsByClassName('event-countdown');

  for (var i = 0; i < eventCountdownElements.length; i++) {
    var countdownElement = eventCountdownElements[i];
    var eventDate = new Date(countdownElement.getAttribute('data-countdown')).getTime();
    var now = new Date().getTime();

    var distance = eventDate - now;

    /*
      Se calcula la diferencia entre la fecha del evento y la fecha actual y se guarda en la variable distance.
      Se calcula la cantidad de días, horas, minutos y segundos a partir de la diferencia de tiempo.
    */
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.textContent = hours + "h " + minutes + "m " + seconds + "s";
  }
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);
