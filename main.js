let nome = prompt('inserisci il tuo nome');
console.log(nome)

let cognome = prompt ('inserisci il tuo cognome');
console.log(cognome)


let colorePreferito = prompt('inserisci il tuo cognome preferito');
console.log(colorePreferito)


let numero= "21";
console.log(numero)

let laTuapassword= "Questa è la tua password: " + nome + cognome + colorePreferito + numero;

document.getElementById ('password') .innerHTML = laTuapassword; 