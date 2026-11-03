let liczba = Number(prompt("Podaj liczbę do pierwiastkowania:"));
let pierwiastekKwadratowy = Math.sqrt(liczba);
let pierwiastekTrzeciegoStopnia = Math.pow(liczba, 1/3).toFixed(2);

document.write("Liczba podana: " + liczba + "<br>");
document.write("Pierwiastek kwadratowy: " + pierwiastekKwadratowy + "<br>");
document.write("Zaokrąglona liczba: " + pierwiastekKwadratowy.toPrecision(3) + "<br>");
document.write("Pierwiastek trzeciego stopnia: " + pierwiastekTrzeciegoStopnia + "<br>");
