var resultado = document.getElementById('resultado');
var colegas = document.getElementById('colegas');
var paginas = document.getElementById('paginas');
var calcular = document.getElementById('calcular');
var resetar = document.getElementById('resetar');

calcular.addEventListener('click', () => { 
    colegas.disabled = true;
    paginas.disabled = true; 
    
    let cVal = colegas.value;
    let pVal = paginas.value;
    
    resultado.innerText = "Resultado: " + calculaNumeroPaginas(cVal, pVal) + " páginas";
});

resetar.addEventListener('click', () => { 
    colegas.disabled = false;
    paginas.disabled = false;

    colegas.value = "";
    paginas.value = "";

    resultado.innerText = "Resultado"; 
})