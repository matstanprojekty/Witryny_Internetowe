
// Zaokrąglanie
document.write(Math.round(4.5) + "<br>"); // 5
document.write(Math.floor(4.9) + "<br>"); // 4
document.write(Math.ceil(4.1) + "<br>");  // 5
document.write(Math.trunc(4.9) + "<br>"); // 4

// Losowanie i skrajności
document.write(Math.random() + "<br>");   // np. 0.634912
document.write(Math.min(5, 10, 2) + "<br>"); // 2
document.write(Math.max(5, 10, 2) + "<br>"); // 10

// Działania
document.write(Math.abs(-7) + "<br>");    // 7
document.write(Math.pow(3, 2) + "<br>");  // 9
document.write(Math.sqrt(25) + "<br>");   // 5

let liczba = 5.123456;

// 1. Formatowanie do określonej liczby cyfr znaczących
document.write(liczba.toPrecision(1) + "<br>"); // "5"       (tylko jedna cyfra)
document.write(liczba.toPrecision(2) + "<br>"); // "5.1"     (dwie cyfry)
document.write(liczba.toPrecision(4) + "<br>"); // "5.123"   (cztery cyfry)
document.write(liczba.toFixed(2) + "<br>"); // "5.12" (zaokrąglone do dwóch miejsc po przecinku)

document.write(Math.PI + "<br>"); // 3.141592653589793

let cena = 19.9567;

// 1. Zaokrąglanie do 2 miejsc po przecinku (standard w sklepach)
console.log(cena.toFixed(2)); // "19.96" (zaokrąglone w górę)

// 2. Zaokrąglanie do liczby całkowitej (brak argumentu)
console.log(cena.toFixed());  // "20"

// 3. Dopełnianie zerami
let calosc = 5;
console.log(calosc.toFixed(2)); // "5.00"

//data i czas
let data = new Date();
console.log(data);

/*
Zaokrąglanie liczb

• Math.round(x) – Zaokrągla liczbę do najbliższej liczby całkowitej (np. 4.5 zmienia w 5, a 4.4 w 4).
• Math.floor(x) – Zaokrągla liczbę zawsze w dół do najbliższej liczby całkowitej (np. 4.9 zmienia w 4).
• Math.ceil(x) – Zaokrągla liczbę zawsze w górę do najbliższej liczby całkowitej (np. 4.1 zmienia w 5).
• Math.trunc(x) – Usuwa część ułamkową liczby i zwraca tylko część całkowitą bez zaokrąglania (np. 4.9 zmienia w 4).

Losowanie i skrajne wartości

• Math.random() – Generuje losową liczbę zmiennoprzecinkową z przedziału od 0 (włącznie) do 1 (wyłącznie). To fundament do tworzenia własnych losowań.
• Math.min(a, b, c...) – Zwraca najmniejszą liczbę z podanych argumentów.
• Math.max(a, b, c...) – Zwraca największą liczbę z podanych argumentów.

Działania matematyczne

• Math.abs(x) – Zwraca wartość bezwzględną liczby (zmienia liczby ujemne na dodatnie, np. -5 zmienia w 5).
• Math.pow(base, exponent) – Podnosi podstawę do podanej potęgi (np. Math.pow(2, 3) to 8). W nowoczesnym JS częściej zastępuje się to operatorem 2 ** 3.
• Math.sqrt(x) – Oblicza pierwiastek kwadratowy z liczby (np. dla 9 zwraca 3).
*/

var dziś = new Date();
document.write("dziś: " + dziś + "<br>");
document.write("dziś: " + dziś.getFullYear() + "<br>");

var datownik = Number(prompt("Podaj numer od 0 do 6"));
document.write("Dzisiaj jest: " + datownik + " czyli ");

switch (datownik) {
    case 1:
        document.write("Poniedziałek");
        break;
    case 2:
        document.write("Wtorek");
        break;
    case 3:
        document.write("Środa");
        break;
    case 4:
        document.write("Czwartek");
        break;
    case 5:
        document.write("Piątek");
        break;
    case 6:
        document.write("Sobota");
        break;
    case 0:
        document.write("Niedziela");
        break;
    default:
        document.write("Niepoprawna liczba! Podaj cyfrę z przedziału 0-6.");
}

