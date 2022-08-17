function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")
    

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("ERRO! Digite o ano0 novamente")
    } else{
        var fsex  = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var descricao = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        
        if(fsex[0].checked){
            genero = "um homem"
            if(idade >= 0 && idade < 13){
                //Criança
                descricao = "uma criança"
                img.setAttribute("src", "images/homem-crianca.png")   
            } else if(idade < 25){
                //Jovem
                descricao = "um jovem"
                img.src = "images/homem-jovem.png"
            } else if(idade < 65){
                //adulto
                descricao = "um adulto"
                img.src = "images/homem-adulto.png"
            } else {
                //idoso
                descricao = "um idoso"
                img.src = "images/homem-idoso.png"
            }
            
        } else if(fsex[1].checked){
            genero = "uma mulher"
            if(idade >= 0 && idade < 13){
                //Criança
                descricao = "uma criança"
                img.src = "images/mulher-crianca.png"   
            } else if(idade < 25){
                //Jovem
                descricao = "uma jovem"
                img.src = "images/mulher-jovem.png"
            } else if(idade < 65){
                //adulto
                descricao = "uma adulta"
                img.src = "images/mulher-adulta.png"
            } else {
                //idoso
                descricao = "uma idosa"
                img.src = "images/mulher-idosa.png"
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `<p>Detectamos ${genero}, ${descricao} com ${idade} anos.</p>`
        res.appendChild(img)
    }

}