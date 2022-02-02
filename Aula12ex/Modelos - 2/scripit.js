function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro]!! Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero= ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        if (fsex[0].checked){
            gênero = 'Homem'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','HomemBebê.jpg')
                document.body.style.background= 'rgb(95, 233, 238)'
            } else if(idade < 21){
                //jovem
                img.setAttribute('src','HomemJovem.jpg')
                document.body.style.background= 'rgb(152, 245, 129, 0.993)'
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','HomemAdulto.jpg')
                document.body.style.background= 'rgb(231, 46, 46)'
            }else {
                //idoso
                img.setAttribute('src','HomemIdoso.jpg')
                document.body.style.background= 'rgb(236, 146, 113)'
            }

        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','MulherBebê.jpg')
                document.body.style.background= 'rgb(95, 233, 238)'
            } else if(idade < 21){
                //jovem
                img.setAttribute('src','MulherJovem.jpg')
                document.body.style.background= 'rgb(152, 245, 129, 0.993)'
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','MulherAdulta.jpg')
                document.body.style.background= 'rgb(231, 46, 46)'
            }else {
                //idoso
                img.setAttribute('src','MulherIdosa.jpg')
                document.body.style.background= 'rgb(236, 146, 113)'
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML=(`Detectamos ${gênero} com ${idade} anos.`)
        res.appendChild(img)
    }
}