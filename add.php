<?php
// Réception des données envoyées via la requête POST
$data = $_POST["data"];

// Ajout des données à un fichier texte (data.txt)
file_put_contents("data.txt", $data . "\n", FILE_APPEND);

// Retourne un message de confirmation pour l'utilisateur
echo "Données ajoutées avec succès!";
