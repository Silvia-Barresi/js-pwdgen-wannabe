// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito19


// var nome utente
var nomeUtente;
nomeUtente = prompt("Inserisci il tuo nome");


// var cognome

var cognomeUtente;
cognomeUtente = prompt ("Inserisci il tuo cognome");

// var colore preferito

var colorePreferito;
colorePreferito = prompt ("Inserisci il tuo colore preferito");

// output pagina nomecognomecolorepreferito19

document.getElementById('mio_pass').innerHTML = nomeUtente+cognomeUtente+colorePreferito+19;
