const formularz = document.querySelector("#formularz");
const imie = document.querySelector("#imie");
const nazwisko = document.querySelector("#nazwisko");
const wiek = document.querySelector("#wiek");
const komunikaty = document.querySelector("#komunikaty");
const wynik = document.querySelector("#wynik");

const polaImienia = [
    [imie, "Imię"],
    [nazwisko, "Nazwisko"]
];

function aktualizuj() {
    const bledy = [];

    for (const [pole, etykieta] of polaImienia) {
        pole.value = pole.value.replace(/^(\p{L})/u, litera =>
            litera.toLocaleUpperCase("pl-PL")
        );

        const niepoprawne = pole.value !== "" && !/^\p{L}+$/u.test(pole.value);

        pole.setCustomValidity(
            niepoprawne ? "Wpisz wyłącznie litery." : ""
        );

        if (niepoprawne) {
            bledy.push(`${etykieta}: dozwolone są wyłącznie litery.`);
        }
    }

    const liczbaWieku = Number(wiek.value);
    const niepoprawnyWiek =
        wiek.value !== "" &&
        (!Number.isInteger(liczbaWieku) || liczbaWieku < 0 || liczbaWieku > 150);

    wiek.setCustomValidity(
        niepoprawnyWiek ? "Wiek musi wynosić od 0 do 150." : ""
    );

    if (niepoprawnyWiek) {
        bledy.push("Wiek musi wynosić od 0 do 150.");
    }

    komunikaty.replaceChildren(
        ...bledy.map(tresc => {
            const paragraf = document.createElement("p");
            paragraf.textContent = tresc;
            return paragraf;
        })
    );

    wynik.textContent =
        `Imię: ${imie.value || "—"}\n` +
        `Nazwisko: ${nazwisko.value || "—"}\n` +
        `Wiek: ${wiek.value || "—"}`;
}

[imie, nazwisko, wiek].forEach(pole => {
    pole.addEventListener("input", aktualizuj);
});

formularz.addEventListener("submit", event => {
    aktualizuj();

    if (!formularz.reportValidity()) {
        event.preventDefault();
    }
});

aktualizuj();