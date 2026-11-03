let zakres_start = Number(prompt("Podaj początek zakresu:"));
let zakres_koniec = Number(prompt("Podaj koniec zakresu:"));
let dzielnik = Number(prompt("Podaj dzielnik:"));

while (dzielnik === 0) {
        dzielnik = Number(prompt("Podaj dzielnik:"));
    }

if (zakres_start > zakres_koniec) {
        document.write("Zamieniamy wartość początkową z wartością końcową! ")
        const temporary = zakres_start;
        zakres_start = zakres_koniec;
        zakres_koniec = temporary;
}

document.write('Liczby podzielne przez ' + dzielnik + ' w zakresie od ' + zakres_start + ' do ' + zakres_koniec + ': <br>');

for (let i = zakres_start; i <= zakres_koniec; i++) {
        if (i % dzielnik !== 0)
        document.write(i + " ; reszta: " + (i % dzielnik) + "<br>");
    }