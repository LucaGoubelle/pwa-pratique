console.log('hello depuis main');
const technosDiv = document.querySelector('#technos');
if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js').catch(err => console.error('service worker NON enregistré',err))
}

/*if(window.Notification && window.Notification !== "denied"){
    // demande une permission
    Notification.requestPermission(perm => {
        // vérifie si la permission est acceptée par l'utilisateur
        // 3 valeurs possibles : default | granted | denied
        if(perm === "granted"){
            
            // 7.2 Option de la notification
            const options = {
                body : "Body de la notification",
                icon : "images/icons/icon-72x72.png"
            }
 
            // On crée une nouvelle notification
            // 7.2 On passe les options en deuxième argument
            const notif = new Notification("Hello notification", options);
          
        }
        else{
            // Notification refusée
            console.log("Notification refusée");
        }
    })
}*/

function loadTechnologies(technos) {
    fetch('http://localhost:3001/technos')
        .then(response => {
            response.json()
                .then(technos => {
                    const allTechnos = technos.map(t => `
                    <div class="card">
                    <div class="card-body">
                    <h5 class="card-title">${t.name}</h5>
                    <p class="card-text">${t.description}</p>
                    <a href="${t.url}" class="card-link">site de ${t.name}</a>
                    </div> 
                    </div>`)
                            .join('');
            
                    technosDiv.innerHTML = allTechnos; 
                });
        })
        .catch(console.error);
}

loadTechnologies(technos);