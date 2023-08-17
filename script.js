// Mettre à jour le contenu de la balise <div> avec l'heure formatée

function mettreAJourHeure() {
    const date = new Date();
    const hour = date.getHours();
    const min = date.getMinutes();

    const dateDiv = document.querySelector('.date');

    const heureFormattee = `${hour}h${min < 10 ? '0' : ''}${min}`;
    
    dateDiv.textContent = heureFormattee;
}

function changeVue(event) {
    
    event.preventDefault();

    if (vueListe.style.display === 'none') {
        vueListe.style.display = 'block';
        vueImage.style.display = 'none';
        vueStyle = "liste";
    } else {
        vueListe.style.display = 'none';
        vueImage.style.display = 'block';
        vueStyle = "image"
    }
    saveLocalStorage();
}

function loadLocalStorage() {
    vueStyle = localStorage.getItem('dataVueStyle');
    
    if (vueStyle = "liste") {
        vueListe.style.display = 'block';
        vueImage.style.display = 'none';
    } else {
        vueListe.style.display = 'none';
        vueImage.style.display = 'block';
    }
}

function saveLocalStorage() {
    const saveVueStyle = JSON.stringify(vueStyle);
    localStorage.setItem('dataVueStyle', saveVueStyle);
}

// Appeler la fonction pour mettre à jour l'heure actuelle immédiatement
mettreAJourHeure();
setInterval(mettreAJourHeure, 60000);

// Bouton pour changer le mode de vue des livres (Liste ou Image)
let vueStyle = "image";
const changeVueBtn = document.getElementById('changeVue');
const vueListe = document.getElementById('vue_liste');
const vueImage = document.getElementById('vue_image');

loadLocalStorage();

changeVueBtn.addEventListener('click', changeVue);