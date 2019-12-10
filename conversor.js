function converta(){
    var valor = Number(document.getElementById("num").value)
    var moeda = Number(document.getElementById("conv").value)

    if(moeda=="1"){document.getElementById("resul").value = valor/4.15}
    if(moeda=="2"){document.getElementById("resul").value = valor/5.10}
    if(moeda=="3"){document.getElementById("resul").value = valor/0.07}
    if(moeda=="4"){document.getElementById("resul").value = valor/0.03}
}