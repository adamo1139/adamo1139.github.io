function filterTable() {
    var input, filter, found, table, tr, td, i, j;
    input = document.querySelector(".input");
    filter = input.value.toUpperCase();
    table = document.querySelector(".sorTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
                found = true;
            }
        }
        if (found) {
            tr[i].style.display = "";
            found = false;
        } else {
            tr[i].style.display = "none";
        }
    }
}
var input = document.querySelector(".input")
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.querySelector(".button").click();
    }
});