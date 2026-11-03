function operacje(a, b) { 
    var suma = a + b; 
    var iloczyn = a * b; 
    var iloraz = a / b; 
    var różnica = a - b; 
    
    return { dodawanie: suma, mnozenie: iloczyn, dzielenie: iloraz, odejmowanie: różnica }; 
} 

window.onload = function() {
    var kontenerPrzyciskow = document.getElementById("kontener-przyciskow");
    var poleWyniku = document.getElementById("wynik-wyswietlacz");

    function pobierzLiczbyZPrompt() {
        var wpisaneA = prompt("Podaj pierwszą liczbę (Liczba A):", "5");
        var wpisaneB = prompt("Podaj drugą liczbę (Liczba B):", "10");
        var a = parseFloat(wpisaneA) || 0;
        var b = parseFloat(wpisaneB) || 0;
        
        return { a: a, b: b };
    }

    var btnSuma = document.createElement("button");
    btnSuma.innerText = "+";
    btnSuma.onclick = function() {
        var liczby = pobierzLiczbyZPrompt();
        var wyniki = operacje(liczby.a, liczby.b);
        poleWyniku.innerText = liczby.a + " + " + liczby.b + " = " + wyniki.dodawanie;
    };

    var btnOdejmowanie = document.createElement("button");
    btnOdejmowanie.innerText = "-";
    btnOdejmowanie.onclick = function() {
        var liczby = pobierzLiczbyZPrompt();
        var wyniki = operacje(liczby.a, liczby.b);
        poleWyniku.innerText = liczby.a + " - " + liczby.b + " = " + wyniki.odejmowanie;
    };

    var btnMnozenie = document.createElement("button");
    btnMnozenie.innerText = "*";
    btnMnozenie.onclick = function() {
        var liczby = pobierzLiczbyZPrompt();
        var wyniki = operacje(liczby.a, liczby.b);
        poleWyniku.innerText = liczby.a + " * " + liczby.b + " = " + wyniki.mnozenie;
    };

    var btnDzielenie = document.createElement("button");
    btnDzielenie.innerText = "/";
    btnDzielenie.onclick = function() {
        var liczby = pobierzLiczbyZPrompt();
        
        if (liczby.b === 0) {
            poleWyniku.innerText = "Błąd: Nie można dzielić przez zero.";
            return;
        }
        
        var wyniki = operacje(liczby.a, liczby.b);
        poleWyniku.innerText = liczby.a + " / " + liczby.b + " = " + wyniki.dzielenie;
    };

    kontenerPrzyciskow.appendChild(btnSuma);
    kontenerPrzyciskow.appendChild(btnOdejmowanie);
    kontenerPrzyciskow.appendChild(btnMnozenie);
    kontenerPrzyciskow.appendChild(btnDzielenie);
};
