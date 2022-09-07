function Calcular(){
    var valor1 = document.getElementById("n1").value;
    var valor2 = document.getElementById("n2").value;
    var valor3 = document.getElementById("n3").value;
    var valor4 = document.getElementById("n4").value;
    
    var notaFinal = (parseFloat(valor1) + parseFloat(valor2) + parseFloat(valor3) + parseFloat(valor4)) / 4; 
    
    if (valor1 == '' || valor2 == '' || valor3 == '' || valor4 == '' ) {
        document.getElementById("n1").value = ''; 
        document.getElementById("n2").value= '';
        document.getElementById("n3").value = '';
        document.getElementById("n4").value = '';
        document.getElementById("valorFinal").innerHTML = '';
        window.alert('[ERRO] Veriricar os dados e tente novamente!')
    } else {
        console.log(valor1)
        var elementoValorFinal = document.getElementById("valorFinal");
        var valorFinal = "Sua média é " + notaFinal;
        elementoValorFinal.innerHTML = valorFinal;
        console.log(notaFinal)
    }
    
 }
