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



---- Il Validatore di Siti Web ----

let url = prompt('Inserisci un url');
if((url.startsWith('http://' || 'https://')) && url.endsWith('.com')){
    alert('url valido');
} else{
    alert('url non valido');
}



---- La Sfida del Lancio del Dado ----

let vittoriePc = 0;
let vittorieG = 0;
let gioco = prompt('Vuoi giocare a dadi?')

while (gioco == 'si' || gioco == 'Si' || gioco == 'SI') {

    alert('Lancia il dado');

    let dadoPc = Math.ceil(Math.random() * 6);
    let dadoG = Math.ceil(Math.random() * 6);

    alert(' TU: ' + dadoG + '  PC: ' + dadoPc);

    if (dadoG > dadoPc) {
        alert('Hai Vinto');
        vittorieG++;
    }

    else if (dadoG < dadoPc) {
        alert('Hai Perso');
        vittoriePc++;
    }

    else {
        alert('Pareggio');
    }

    alert('Punteggio: TU = ' + vittorieG + '  PC = ' + vittoriePc);
    gioco = prompt('Vuoi continuare a giocare?')
}







