document.getElementById("year").innerHTML = new Date().getFullYear();

function toggleMenu() {
    var menu = document.querySelector('nav ul.menu-open');
    menu.classList.toggle('show-menu');
    menu.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var plantName = localStorage.getItem('selectedPlant');
    var plantImage = localStorage.getItem('selectedPlantImage')
    if (plantName) {
        document.getElementById('plant-name').innerText = plantName;
    }
    if(plantImage) {
        document.getElementById('plant-image').src = plantImage;
    }
});

let tempChart;
let humChart;

function loadChart(){
  var tempCtx = document.getElementById('temp-graph').getContext('2d');
  if (tempChart) {
    tempChart.destroy();
  }

  // Crear un array de fechas y un array de temperaturas
  var dates = window.temperatures.map(entry => {
    let objectDate = new Date(entry.time)

    let hour = objectDate.getHours();

    let min = objectDate.getMinutes();

    let sec = objectDate.getSeconds();

    let day = objectDate.getDate();

    let month = objectDate.getMonth();

    let year = objectDate.getFullYear();

    let format2 = day + "/" + month + "/" + year + "-" + hour + ":" + min + ":" + sec;
    return format2;
  });

  console.log(dates);
  var values = window.temperatures.map(entry => entry.value);

  // Configurar los datos de la gráfica
  var data = {
    labels: dates,
    datasets: [
      {
        label: 'Temperatura',
        data: window.temperatures.map(entry => entry.value),
        borderColor: 'rgba(4, 124, 30, 0.774)',
        borderWidth: 1,
        fill: false
      }
    ]
  };

  // Configurar las opciones de la gráfica
  var options = {
    scales: {
      x: {
        type: 'category',
        axisTick: {show: false}
      }
    }
  };

  // Crear la gráfica de línea
  tempChart = new Chart(tempCtx, {
    type: 'line',
    data: data,
    options: options
  });
}

function loadChart2(){
  var humCtx = document.getElementById('hum-graph').getContext('2d');
  if (humChart) {
    humChart.destroy();
  }

  var dates2 = window.humiditys.map(entry => {
    let objectDate = new Date(entry.time)

    let hour = objectDate.getHours();

    let min = objectDate.getMinutes();

    let sec = objectDate.getSeconds();

    let day = objectDate.getDate();

    let month = objectDate.getMonth();

    let year = objectDate.getFullYear();

    let format2 = day + "/" + month + "/" + year + "-" + hour + ":" + min + ":" + sec;
    return format2;
  });

  console.log(dates2);
  var values = window.humiditys.map(entry => entry.value);

  var data2 = {
    labels: dates2,
    datasets: [
      {
        label: 'Humedad de la tierra',
        data: window.humiditys.map(entry => entry.value),
        borderColor: 'rgba(4, 124, 30, 0.774)',
        borderWidth: 1,
        fill: false
      }
    ]
  }


  // Configurar las opciones de la gráfica
  var options = {
    scales: {
      x: {
        type: 'category',
        axisTick: {show: false}
      }
    }
  };

  humChart = new Chart(humCtx, {
    type: 'line',
    data: data2,
    options: options
  })
}

window.loadChart = loadChart;
window.loadChart2 = loadChart2;

document.addEventListener('DOMContentLoaded', function () {
  loadChart();
  loadChart2();
});









