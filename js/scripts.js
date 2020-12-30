var hearts = document.getElementsByClassName("fa-heart");

for (heart of hearts) {
    heart.addEventListener('click', function(elem) {
        if (elem.target.classList.contains('far'))
            elem.target.classList.replace('far', 'fas')
        else
            elem.target.classList.replace('fas', 'far')
    })
}






var list = document.getElementsByClassName("delete")
for (var i = 0; i < list.length; i++) {
    var button = list[i];
    button.addEventListener('click', function(event) {
        var buttonclicked = event.target;
        buttonclicked.parentElement.remove();
        TotalUpdate();
    })


}



var listplus = document.getElementsByClassName("plus")

for (var i = 0; i < listplus.length; i++) {

    var button = listplus[i];


    button.addEventListener('click', function(event) {
        var button = event.target;


        var sp = button.parentElement.parentElement.querySelector("span")
        var a = parseInt(sp.innerHTML);


        sp.innerHTML = a + 1;

        TotalUpdate();
    })


}

var test = false;
var i = 0;
var listless = document.getElementsByClassName("less")
while ((test == false) & (i < listless.length)) {


    var button = listless[i];

    console.log(i + "a");
    button.addEventListener('click', function(event) {
        var button = event.target;


        var sp = button.parentElement.parentElement.querySelector("span")
        var a = parseInt(sp.innerHTML);
        console.log(a + "aaa");
        if (a < 0) {
            test = true;
        }



        sp.innerHTML = a - 1;

        TotalUpdate();
    })


    i++
}

function TotalUpdate() {
    var lista = document.getElementsByClassName("prix");
    var listaq = document.getElementsByClassName("quantity");

    var Total = 0;
    for (var i = 0; i < lista.length; i++) {

        Total += (parseFloat(lista[i].innerHTML.replace('DT', '')) * parseFloat(listaq[i].innerHTML));

    }
    document.querySelector(".bodyheader>header").innerHTML = "TOTAL :" + Total + "DT";
}