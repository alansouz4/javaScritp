function calculaMedia(){
    var valor1 = Number(document.getElementById("v1").value)
    var valor2 = Number(document.getElementById("v2").value)
    var valor3 = Number(document.getElementById("v3").value)

    var media = (valor1+valor2+valor3) / 3

    document.getElementById("resultado").value = media.toFixed()
}