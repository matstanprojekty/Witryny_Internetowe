let zakresDolny = Number(prompt("Podaj dolny zakres: "));
let zakresGorny = Number(prompt("Podaj gorny zakres: "));
let dzielnik = Number(prompt("Przez ile dzielimy (bez reszty): "));

if (isNaN(zakresDolny) || isNaN(zakresGorny) || isNaN(dzielnik)) {
    document.write("Wszystkie pola muszą być wypełnione poprawnymi liczbami! <br>");
} 

else if (dzielnik === 0) {
    document.write("Nie można dzielić przez 0! Podaj właściwy dzielnik. <br>");
} 

else {
    if (zakresDolny > zakresGorny) {
        document.write("Dolny zakres nie może być większy od górnego! <br>");
        let temp = zakresDolny;
        zakresDolny = zakresGorny;
        zakresGorny = temp;
    }

    document.write(`Liczby podzielne przez ${dzielnik} w zakresie od ${zakresDolny} do ${zakresGorny}: <br>`);

    for (let i = zakresDolny; i <= zakresGorny; i++) {
        if (i % dzielnik !== 0) {
            continue; 
        }
        document.write(`<span class='wyniki'>${i}</span><br>`);
    }
}