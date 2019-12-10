function calcule(){
    var valor1 = Number(document.getElementById("n1").value)
    var valor2 = Number(document.getElementById("n2").value)
    var operacao = Number(document.getElementById("oper").value)

    if(operacao=="1"){document.getElementById("resul").value = valor1-valor2}
    if(operacao=="2"){document.getElementById("resul").value = valor1+valor2}
    if(operacao=="3"){document.getElementById("resul").value = valor1*valor2}
    if(operacao=="4"){document.getElementById("resul").value = valor1/valor2}
}