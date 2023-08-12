const button = document.querySelector('#clickDiv button');
const divClick = document.getElementById("clickDiv");

button.addEventListener('click', function(event){

    event.stopPropagation();
    alert('Hola!');

})

divClick.addEventListener('click', function () {

    alert('Hola! Soy el div');

});