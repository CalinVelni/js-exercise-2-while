---- Il Generatore di Tabelle di Moltiplicazione ----

let num = prompt('Inserisci un numero da 1 a 10');
let i = 1;

while( i <= 10 ) {
 alert( num + 'x' + i + '=' + (num * i ));
 i++ ;
}



---- Il Sostitutore di Parole ----

let frase = prompt('Scrivi una frase');
let parola1 = prompt('Inscerisci parola da sostituire');
let parola2 = prompt('Inscerisci sostituo');
frase = frase.replace(parola1, parola2);
alert(frase); 


