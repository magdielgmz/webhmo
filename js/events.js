let mudal = document.getElementById('miModal');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('close');


abrir.addEventListener('click', function(){
    mudal.style.display = 'block';

});

cerrar.addEventListener('click', function(){
    mudal.style.display = 'none';

});

window.addEventListener('click', function(e){
    if(e.target == flex){
        mudal.style.display = 'none';
    }        

});