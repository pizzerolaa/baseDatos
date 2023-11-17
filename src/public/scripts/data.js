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




