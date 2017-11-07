var table = document.getElementById('tabelka'); //pobieramy tabelkę

var tableHTML = ''; //rozpoczynamy generowanie kodu tabeli
for (var y=1; y<=10; y++) {

    var tr = '<tr>'; //zaczynam tworzyć nowe tr

    for (var x=1; x<=10; x++) {
        var tekst = x*y; //tworzymy tekst do wstawienia do komórki

        if (y==1 || x==1) { //jeżeli jest to pierwsza komórka w pionie lub poziomie
            var td = '<th>'+tekst+'</th>'; //stwórz nowe th
        } else {
            var td = '<td>'+tekst+'</td>'; //stwórz nowe td
        }

        tr += td; //wstaw komórkę do rzędu TR
    }
    tr += '</tr>'; //zakończ tworzenie rzędu

    tableHTML += tr; //wstaw rząd do generowanego kodu HTML
}

table.innerHTML = tableHTML; //gotowy wygenerowany kod HTML wstawiamy do tabeli na stronie
