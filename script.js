// Fonction pour lancer une recherche
function search() {
    // Récupération de la valeur saisie dans le champ de recherche
    var query = document.getElementById("search-query").value;
    // Vérification si le champ de recherche est vide
    if (!query) {
        // Affichage d'un message d'erreur si le champ est vide
        document.getElementById("search-results").innerHTML = "Veuillez remplir le champ de recherche avant de lancer la recherche.";
        return;
    }
    // Création d'un objet XMLHttpRequest pour effectuer la requête
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Découpage des résultats de la requête en lignes
            var lines = this.responseText.split('\n');
            for (var i = 0; i < lines.length; i++) {
                // Découpage des informations de chaque ligne en titre, description et lien
                var line = lines[i].split('|');
                var title = line[0];
                var description = line[1];
                var link = line[2];
                // Création d'un lien HTML pour chaque résultat
                var linkHTML = '<a href="' + link + '" target="_blank">' + title + '</a>';
                // Ajout des résultats de recherche dans l'élément HTML
                document.getElementById("search-results").innerHTML += linkHTML + '<br>' + description + '<br><br>';
            }
        }
    };
    // Envoi de la requête GET avec le terme de recherche
    xhttp.open("GET", "search.php?q=" + query, true);
    xhttp.send();
    // Réinitialisation de l'élément HTML pour les résultats de recherche
    document.getElementById("search-results").innerHTML = "";
}

// Fonction pour ajouter des données
function addData() {
    // Récupération des valeurs saisies dans les champs du formulaire
    var title = document.getElementById("add-title").value;
    var description = document.getElementById("add-description").value;
    var link = document.getElementById("add-link").value;
    // Vérification si tous les champs sont remplis
    if (!title || !description || !link) {
        alert("Veuillez remplir tous les champs avant de soumettre les données.");
        return;
    }
    // Concaténation des informations en une seule chaîne de caractères séparée par des '|'
    var data = title + '|' + description + '|' + link;
    // Création d'un objet XMLHttpRequest pour effectuer la requête
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Affichage d'un message de confirmation
            alert(this.responseText);
            // Réinitialisation des champs du formulaire
            document.getElementById("add-title").value = "";
            document.getElementById("add-description").value = "";
            document.getElementById("add-link").value = "";
        }
    };
    xhttp.open("POST", "add.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("data=" + data);
}

// Fonction pour afficher/masquer le formulaire d'ajout de données
function toggleAddForm() {
    var addForm = document.getElementById("add-form");
    if (addForm.style.display === "none") {
        addForm.style.display = "block";
    } else {
        addForm.style.display = "none";
    }
}

