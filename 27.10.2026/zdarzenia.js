function operacje(a, b) {
    var suma = a + b;
    var iloczyn = a * b;
    var iloraz = a / b;
    var różnica = a - b;
    
    // Zwracamy obiekt z jasnymi nazwami właściwości
    return {
        dodawanie: suma,
        mnozenie: iloczyn
    };
}

var wynik = operacje(5, 10);

// Odwołujemy się kropką do konkretnej wartości
document.write("Suma: " + wynik.dodawanie + " | Iloczyn: " + wynik.mnozenie + "<br>");
