Note avant installation.

Avoir un environement mongo qui tourne sur le poste de travail.

S'assurer qu'il est compatible avec les info suivantes

dbname=spotify-back
dbhost=localhost
dbport=27017

Faire un fichier .env à la racine du projet et y mettre les info précédentes 


Pour ce qui est de la mise en place de l'identification auprès de spotify:

Dans le fichier helpers/spotifyApi/spotifyApi.js

remplacer les informations clientId et client secret par respectivement

CLIENT_ID=9afadfadb0534f42b9cbf981a6794791
CLIENT_SECRET=ad4e416511974a3da8896cbe653cbd09

Pour lancer l'application il faut exécuter la commander suivante à la racine du projet back
npm start 

Pour lancer le front à la racine il faut lancer la commande suivante
npm run serve