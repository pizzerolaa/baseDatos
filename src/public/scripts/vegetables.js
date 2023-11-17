document.getElementById("year").innerHTML = new Date().getFullYear();

function toggleMenu() {
    var menu = document.querySelector('nav ul.menu-open');
    menu.classList.toggle('show-menu');
    menu.classList.add('active');
}

function storePlantName(plantName, plantImage) {
    localStorage.setItem('selectedPlant', plantName);
    localStorage.setItem('selectedPlantImage', plantImage);
}

    