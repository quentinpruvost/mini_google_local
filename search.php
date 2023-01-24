<?php
// Récupération de la requête de recherche de l'utilisateur
$query = $_GET["q"];

// Lecture du fichier de données
$data = file_get_contents("data.txt");

// Découpage des lignes de données
$lines = explode("\n", $data);

// Initialisation de la variable pour stocker les résultats de recherche
$results = "";

// Boucle sur chaque ligne pour vérifier si la requête de recherche se trouve dans la ligne
foreach ($lines as $line) {
    // Utilisation de la fonction strpos() pour vérifier si la requête de recherche se trouve dans la ligne
    // La fonction retourne la position de la première occurrence de la requête de recherche dans la ligne
    // Si elle n'est pas trouvée, la fonction retourne false
    if (strpos($line, $query) !== false) {
        // Si la requête de recherche est trouvée dans la ligne, ajoutez-la aux résultats de recherche
        $results .= $line;
    }
}

// Retour des résultats de recherche à l'utilisateur
echo $results;
