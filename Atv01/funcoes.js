function Trocar(){
    let tipo = document.getElementById("veiculo").value
    
    if(tipo == "Basico"){
        document.getElementById("imagem").src="carro04.png"
        document.getElementById("valor").innerHTML="99 / "
    }else if(tipo == "Esporte"){
        document.getElementById("imagem").src="esporte.png"
        document.getElementById("valor").innerHTML="159 / "
    }else{
        document.getElementById("imagem").src="completo.png"
        document.getElementById("valor").innerHTML="199 / "
    }
    
}